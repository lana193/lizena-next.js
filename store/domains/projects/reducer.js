import actionTypes from './actionTypes';

const initialStateProjects = {
    projects: [],
    openedProject: {}
}

export const projectsReducer = (state=initialStateProjects, action={}) => {
    switch(action.type) {
        case actionTypes.GET_PROJECTS_FULFILLED:
            return {...state, projects: action.payload.data};
        case actionTypes.GET_PROJECT_FULFILLED: 
            return {...state, openedProject: action.payload.data};
        case actionTypes.CREATE_PROJECT_FULFILLED: 
            return {projects: [...state.projects, action.payload.data]};
        case actionTypes.DELETE_PROJECT_FULFILLED: 
            return {...state, projects: state.projects.filter(project => project._id !== action.payload)}
        case actionTypes.UPDATE_PROJECT_FULFILLED:
            return {...state, projects: state.projects.map(project => project._id === action.payload.data._id ? action.payload.data : project)};
        default: 
            return state;
    }
}
