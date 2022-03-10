import axios from 'axios';

export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";

export const login = (data) => {
    return(dispatch) => {

        // post API
        axios({
            method: "POST",
            // url: `${process.env.REACT_APP_API_URL}/v1/login`,
            url: 'http://localhost:8081/v1/user/login',
            timeout: 120000,
            data: data
        })
            .then((response)=>{
                // berhasil post api
                console.log('3. Berhasil login', response)
                localStorage.setItem("token", response.data.data.access_token)
                dispatch({
                    type: "LOGIN",
                    payload: {
                        loading: false,
                        token: response.data.data.access_token,
                        errorMessage: false
                    }
                })
            })
            .catch((error)=>{
                // gagal post api
                console.log('3. Gagal post data', error)
                dispatch({
                    type: "LOGIN",
                    payload: {
                        loading: false,
                        data: false, 
                        errorMessage: error.message
                    }
                })
            })
    }
}

export const logout = () => {
    return (dispatch) => {
        dispatch({
            type: "LOGOUT"
        })
    }
}