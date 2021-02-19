const reducer = (state, action) => {
    switch (action.type) {
        case 'GET_USERS_LIST':
            return {
                ...state,
                usersList: action.payload
            } 
        
        case 'GET_POSTS_LIST':
            return {
                ...state,
                postsList: action.payload
            }

        case 'GET_COMMENTS_LIST':
            return {
                ...state,
                commentsList: action.payload
            }

        case 'GET_USER_DETAILS':
            const { usersList, userId } = action.payload 
            return {
                ...state,
                userDetails: usersList.find(user => user.id === Number(userId))
            }  
            
        case 'UNMOUNT_USER_DETAILS':
            return {
                ...state,
                userDetails: action.payload
            }

        case 'UNMOUNT_POSTS':
            return {
                ...state,
                postsList: action.payload
            }

        case 'UNMOUNT_COMMENTS':
            return {
                ...state,
                commentsList: action.payload
            }
            
        case 'GET_POSTS':
            return {
                ...state,
                postsList: action.payload
            }        
            
        case 'SET_TOOGLE':
            return {
                ...state,
                toogle: !state.toogle
            } 

        default:
            return state;
    }
}

export default reducer;