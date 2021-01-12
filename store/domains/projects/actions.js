import { getService, postService, deleteService, updateService } from '../../services';
import actionTypes from './actionTypes';

const getProjects = () => ({
    type: actionTypes.GET_PROJECTS,
    payload: getService('lizena/projects')
})

export const handleGetProjects = () => {
    return async(dispatch) => {
        await dispatch(getProjects());
    }
};

const getProject = (projectId) => ({
    type: actionTypes.GET_PROJECT,
    payload: getService(`lizena/project/${projectId}`)
})

export const handleGetProject = (projectId) => {
    return async(dispatch) => {
        await dispatch(getProject(projectId));
    }
};

const createProject = (projectData, jwtToken) => ({
    type: actionTypes.CREATE_PROJECT,
    payload: postService('lizena/project', projectData, { headers: {Authorization: `Bearer ${jwtToken}`}})
})

export const handleCreateProject = (projectData, jwtToken) => {
    return async(dispatch) => {
        await dispatch(createProject(projectData, jwtToken));
    }
};

const deleteProject = (projectId, jwtToken) => ({
    type: actionTypes.DELETE_PROJECT,
    payload: deleteService(`lizena/project/${projectId}`, { headers: {Authorization: `Bearer ${jwtToken}`}})
})

export const handleDeleteProject = (projectId, jwtToken) => {
    return async(dispatch) => {
        await dispatch(deleteProject(projectId, jwtToken));
    }
};

const updateProject = (projectId, projectData, jwtToken) => ({
    type: actionTypes.UPDATE_PROJECT,
    payload: updateService(`lizena/project/${projectId}`, projectData, { headers: {Authorization: `Bearer ${jwtToken}`}})
})

export const handleUpdateProject = (projectId, projectData, jwtToken) => {
    return async(dispatch) => {
        await dispatch(updateProject(projectId, projectData, jwtToken));
    }
};
