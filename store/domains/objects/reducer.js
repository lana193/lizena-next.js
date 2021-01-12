import actionTypes from './actionTypes';

const initialStateObjects = {
    objects: [],
    openedObject: {}
}

export const objectsReducer = (state=initialStateObjects, action={}) => {
    switch(action.type) {
        case actionTypes.GET_OBJECTS_FULFILLED:
            return {...state, objects: action.payload.data};
        case actionTypes.GET_OBJECT_FULFILLED: 
            return {...state, openedObject: action.payload.data};
        case actionTypes.CREATE_OBJECT_FULFILLED: 
            return {objects: [...state.objects, action.payload.data]};
        case actionTypes.DELETE_OBJECT_FULFILLED: 
            return {...state, objects: state.objects.filter(object => object._id !== action.payload)}
        case actionTypes.UPDATE_OBJECT_FULFILLED:
            return {...state, objects: state.objects.map(object => object._id === action.payload.data._id ? action.payload.data : object)};
        default: 
            return state;
    }
}
