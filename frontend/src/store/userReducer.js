const userData = {
    users: { email: "", password: "", username: "", first_name: "", last_name: "" } 
}

const ADD_NEW_USER = "ADD_NEW_USER";

export const UserReducer = (state = userData, action) => {
    switch (action.type){

        case ADD_NEW_USER:  
            return{
                ...state, users: action.payload
            }

        default:
            return state
    }
}

export const newUserCreator = (payload) => {
    return { type: "ADD_NEW_USER", payload }
} 