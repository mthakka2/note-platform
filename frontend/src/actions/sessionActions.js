import { SessionActionTypes } from '../constants';
import API from './api/appAPI';

export function loginRequest(data) {
    return (dispatch) => {
        console.log(data);
        API.login(data.username, data.password)
            .then((res) => {
                console.log(res);
                dispatch(handleCurrentUser(res.data.user.username));
            }).catch(() => {
                dispatch(handleCurrentUser(''));
            });
    }
}


function handleCurrentUser(data){
    return {
        type: SessionActionTypes.LOGIN_REQUEST_SUCCESS,
        payload: data
    }
}

// function handleUser(){
//     return {
//         type: SessionActionTypes.LOGIN_REQUEST_FAILED,
//         payload: null
//     }
// }

