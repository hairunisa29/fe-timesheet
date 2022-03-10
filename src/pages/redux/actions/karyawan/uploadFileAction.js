import axios from 'axios';

export const GET_LIST_FILE = "GET_LIST_FILE";
export const ADD_FILE = "ADD_FILE";

export const getListFile = () => {
    return(dispatch) => {
        dispatch({
            type: "GET_LIST_FILE",
            payload: {
                loading: true,
                data: false,
                errorMessage: false
            }
        })

        //get api
        axios({
            method: "GET",
            url: `${process.env.REACT_APP_API_URL}/v1/file`,
            headers: {
                'Authorization': `Bearer ${localStorage.getItem("token")}`
            },
            timeout: 120000
        })
        .then((response)=>{
            // berhasil get api
            console.log('3. Berhasil dapat data get', response.status)
            dispatch({
                type: "GET_LIST_FILE",
                payload: {
                    loading: false,
                    data: response.data.data, 
                    errorMessage: false
                }
            })
        })
        .catch((error)=>{
            //gagal get api
            dispatch({
                type: "GET_LIST_FILE",
                payload: {
                    loading: false,
                    data: false,
                    errorMessage: error.message
                }
            })
        })
    }
}


export const addFile = (data) => {
    console.log(data)
    return(dispatch) => {
        dispatch({
            type: "ADD_FILE",
            payload: {
                loading: true,
                data: false,
                errorMessage: false
            }
        })

        //get api
        axios({
            method: "POST",
            url: `${process.env.REACT_APP_API_URL}/v1/file`,
            headers: {
                'Authorization': `Bearer ${localStorage.getItem("token")}`,
                'Content-Type': 'multipart/form-data',
            },
            timeout: 120000,
            data: data,
            
        })
            .then((response)=>{
                console.log('Berhasil dapat data add file', response)
                dispatch({
                    type: "ADD_FILE",
                    payload: {
                        loading: false,
                        data: response.data.data,
                        errorMessage: false
                    }
                })
            })
            .catch((error)=>{
                console.log('Gagal dapat data', error)
                dispatch({
                    type: "ADD_FILE",
                    payload: {
                        loading: false,
                        data: false,
                        errorMessage: error.message
                    }
                })
            })
    }
}