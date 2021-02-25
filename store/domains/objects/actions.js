import { getService, postService, deleteService, updateService, deleteArrayValueService } from '../../services';
import actionTypes from './actionTypes';

const getObjects = () => ({
    type: actionTypes.GET_OBJECTS,
    payload: getService('lizena/objects')
})

export const handleGetObjects = () => {
    return async(dispatch) => {
        await dispatch(getObjects());
    }
};

const getObject = (objectId) => ({
    type: actionTypes.GET_OBJECT,
    payload: getService(`lizena/object/${objectId}`)
})

export const handleGetObject = (objectId) => {
    return async(dispatch) => {
        await dispatch(getObject(objectId));
    }
};

const createObject = (objectData, jwtToken) => ({
    type: actionTypes.CREATE_OBJECT,
    payload: postService('lizena/object',  objectData, { headers: {Authorization: `Bearer ${jwtToken}`}})
})

export const handleCreateObject = (objectData, jwtToken) => {
    return async(dispatch) => {
        await dispatch(createObject(objectData, jwtToken));
    }
};

const deleteObject = (objectId, jwtToken) => ({
    type: actionTypes.DELETE_OBJECT,
    payload: deleteService(`lizena/object/${objectId}`, { headers: { Authorization: `Bearer ${jwtToken}` }})
})

export const handleDeleteObject = (objectId, jwtToken) => {
    return async(dispatch) => {
        await dispatch(deleteObject(objectId, jwtToken));
    }
};

const updateObject = (objectId, objectData, jwtToken) => ({
    type: actionTypes.UPDATE_OBJECT,
    payload: updateService(`lizena/object/${objectId}`, objectData, { headers: {Authorization: `Bearer ${jwtToken}`}})
})

export const handleUpdateObject = (objectId, objectData, jwtToken) => {
    return async(dispatch) => {
        await dispatch(updateObject(objectId, objectData, jwtToken));
    }
};

const editObjectPhotos = (objectId, img, objectData, jwtToken) => ({
    type: actionTypes.EDIT_OBJECT_PHOTOS,
    payload: updateService(`lizena/object/${objectId}/image/${img}`, objectData, { headers: {Authorization: `Bearer ${jwtToken}`}})
})

export const handleEditObjectPhotos = (objectId, img, objectData, jwtToken) => {
    return async(dispatch) => {
        await dispatch(editObjectPhotos(objectId, img, objectData, jwtToken));
    }
};
