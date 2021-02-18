import axios from 'axios';

export const getUsersList = (payload) => ({
    type: 'GET_USERS_LIST',
    payload
});

export const setLoading = (payload) => ({
    type: 'SET_LOADING',
    payload
})

export const setError = (payload) => ({
    type: 'SET_ERROR',
    payload
});

export const getUsers = (payload) => {
    return (dispatch) => {
        axios({
            url: 'https://jsonplaceholder.typicode.com/users',
            method: 'get'
        })
            .then(({ data }) => dispatch(getUsersList(data)))
            .catch(error => dispatch(setError(error)))
    }
}
