export const selectProjects = state => state.projectsReducer.projects;
export const selectProject = state => state.projectsReducer.openedProject;
export const selectCreateProject = state => state.projectsReducer.projects;
export const selectDeletedProject = state => state.projectsReducer.deletedProject;
export const selectUpdatedProject = state => state.projectsReducer.updatedProject;