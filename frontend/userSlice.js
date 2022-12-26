const initialState = {
    token: localStorage.getItem('token')
}

export default function userReducer(state = initialState, action) {
    switch (action.type) {
        case "user:auth": {
            return {
                ...state,
                token: action.payload
            }
        }
        case "user:remove": {
            return {
                ...state,
                token: "AMOGUS" 
            }
        }
    }
}
