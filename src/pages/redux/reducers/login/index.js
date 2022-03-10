import {LOGIN, LOGOUT} from '../../actions/login/authAction';
import jwtDecode from "jwt-decode";

const initialState = {
    token: localStorage.getItem("token"),
    loginLoading: false,
    loginError: false,
    user_id: null,
    role_id: null,
    email: null,
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN:
            const user = jwtDecode(action.payload.token);
            
            return {
                ...state,
                token: action.payload.token,
                loginLoading: action.payload.loading,
                loginError: action.payload.errorMessage,
                userId: user.user_id,
                roleId: user.role_id,
                firstName: user.first_name,
                lastName: user.last_name,
                expired: user.exp
            };
        case LOGOUT:
            localStorage.removeItem("token")
            return{
                token: null,
                name: null,
                user_id: null,
                role_id: null,
                email: null,
            }
        default:
            return state;

    }
}

export default authReducer;