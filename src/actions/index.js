import axios from 'axios';

const usersUrl = process.env.USERS_URL;
const postsUrl = process.env.POSTS_UR;
const commentsUrl = process.env.COMMENTS_URL;

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
            url: usersUrl,
            method: 'get'
        })
            .then(({ data }) => dispatch(getUsersList(data)))
            .catch(error => dispatch(setError(error)))
    }
}
