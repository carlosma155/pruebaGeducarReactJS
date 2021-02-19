import axios from 'axios';

const usersUrl = process.env.USERS_URL;

export const getUsersList = (payload) => ({
    type: 'GET_USERS_LIST',
    payload
});

export const getPostsList = (payload) => ({
    type: 'GET_POSTS_LIST',
    payload
});

export const getCommentsList = (payload) => ({
    type: 'GET_COMMENTS_LIST',
    payload
});
export const unmountComments = (payload) => ({
    type: 'UNMOUNT_COMMENTS',
    payload
})

export const getUserDetails = (payload) => ({
    type: 'GET_USER_DETAILS',
    payload
})

export const setToogle = (payload) => ({
    type: 'SET_TOOGLE',
    payload
})

export const unmountUserDetails = (payload) => ({
    type: 'UNMOUNT_USER_DETAILS',
    payload
})

export const unmountPosts = (payload) => ({
    type: 'UNMOUNT_POSTS',
    payload
})

export const setError = (payload) => ({
    type: 'SET_ERROR',
    payload
});

export const getUsers = () => {
    return (dispatch) => {
        axios({
            url: usersUrl,
            method: 'get'
        })
            .then(({ data }) => dispatch(getUsersList(data)))
            .catch(error => dispatch(setError(error)))
    }
}

export const getUser = (userId) => {
    return (dispatch) => {
        axios({
            url: usersUrl,
            method: 'get' 
        })
        .then(({data}) => dispatch(getUserDetails({ usersList:data, userId })))
        .catch(error => dispatch(setError(error)))
    }
}

export const getPosts = (userId) => {
    return (dispatch) => {
        axios({
            url: `https://jsonplaceholder.typicode.com/users/${userId}/posts`,
            method: 'get'
        })
        .then(({ data }) => dispatch(getPostsList(data)))
        .catch(error => dispatch(setError(error)))
    }
}

export const getComments = (id) => {
    return (dispatch) => {
        axios({
            url: `https://jsonplaceholder.typicode.com/posts/${id}/comments`,
            method: 'get'
        })
        .then(({ data }) => dispatch(getCommentsList(data)))
        .catch(error => dispatch(setError(error)))
    }
}