import Project from "../models/Project.js";
import Task from "../models/Task.js";

export const resolvers = {
    Query: 
    {
        hello: () => "Hello world!",
        
        projects: async () => await Project.find(),

        tasks: async () => await Task.find(),

        project: async (_, {_id}) => await Project.findById(_id),

        task: async (_, {_id}) => await Task.findById(_id),
    },

    Mutation: 
    {
        createProject: async (_, {name, description}) =>
        {
            const project = new Project({
                name, 
                description
            });

            const savedProject = await project.save();

            return savedProject;
        },

        createTask: async (_, {title, projectId}) =>
        {
            const projectFound = await Project.findById(projectId);

            if(!projectFound)
            {
                throw new Error("Project not found");
            }

            const task = new Task({
                title,
                projectId
            });

            const taskSaved = task.save();

            return taskSaved;
        },

        deleteProject: async (_, {_id}) =>
        {
            const deletedProject = await Project.findByIdAndDelete(_id);

            if(!deletedProject)
            {
                throw new Error("Project not found");
            }

            const projectTasksFound = await Task.find({projectId: _id});

            if(projectTasksFound)
            {
                const tasksDeleted = await Task.deleteMany({projectId: _id});
            }

            return deletedProject;
        },

        deleteTask: async (_, {_id}) =>
        {
            const deletedTask = Task.findByIdAndDelete(_id);

            if(!deletedTask)
            {
                throw new Error("Task not found");
            }

            return deletedTask;
        },

        updateProject: async (_, args) =>
        {
            const updatedProject = await Project.findByIdAndUpdate(args._id, args, { new: true });

            if(!updatedProject)
            {
                throw new Error("Project not found");
            }

            return updatedProject
        },

        updateTask: async (_, args) =>
        {
            const projectFound = await Project.findById(args.projectId);

            if(!projectFound)
            {
                throw new Error("Project does not exist");
            }

            const updatedTask = await Task.findByIdAndUpdate(args._id, args, { new: true });

            if(!updatedTask)
            {
                throw new Error("Task not found");
            }

            return updatedTask;
        },
    },

    Project: {
        tasks: async (parent, ) => 
        {

            const tasks = await Task.find({projectId: parent._id})

            return tasks;
        }
    },

    Task: {
        project: async (parent) =>
        {
            const project = await Project.findById(parent.projectId);

            console.log(parent)

            return project;
        }
    }


};
