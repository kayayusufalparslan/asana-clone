const Project = require('../models/Projects');

const insert = (projectData) => {
    const project = new Project(projectData);
    return project.save();
};

const list = () => {
    return Project.find({});
};

module.exports = {
    insert,
    list,
};