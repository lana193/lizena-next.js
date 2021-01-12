import actionTypes from './actionTypes';
import { postService } from '../../services';

const sendMessage = (messageDetails) => ({
    type: actionTypes.SEND_MESSAGE_FROM_USER,
    payload: postService('lizena/contacts/send', messageDetails)
})

export const handleSendMessage = (messageDetails) => {
    return async(dispatch) => {
        await dispatch(sendMessage(messageDetails));
    }
};
