const reducer = (state, action) => {
    switch (action.type) {
        case 'GET_USERS_LIST':
            return {
                ...state,
                usersList: action.payload
            }   
            
        case 'SET_LOADING':
            return {
                ...state,
                loading: action.payload
            } 

        default:
            return state;
    }
}

export default reducer;