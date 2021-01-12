export const selectObjects = state => state.objectsReducer.objects;
export const selectObject = state => state.objectsReducer.openedObject;
export const selectCreateObject = state => state.objectsReducer.objects;
export const selectDeletedObject = state => state.objectsReducer.deletedObject;
export const selectUpdatedObject = state => state.objectsReducer.updatedObject;