const initialState = {
    token: "token"
}

export default function userReducer(state = initialState, action) {
    switch (action.type) {
        case "user:auth": {
            return {
                ...state,
                token: action.payload
            }
        }
        default:
            return state;
    }
}
