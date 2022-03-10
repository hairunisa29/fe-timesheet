import axios from 'axios';

export const GET_LIST_STATUS = "GET_LIST_STATUS";
export const DETAIL_STATUS = "DETAIL_STATUS";

export const getListStatus = () =>{
    // console.log('2. Masuk action getStatus')
    return(dispatch) => {
        // loading
        dispatch({
            type: "GET_LIST_STATUS",
            payload: {
                loading: true,
                data: false, 
                errorMessage: false
            }
        })

        // get api
        axios({
            method: "GET",
            url: 'http://localhost:8081/v1/status',
            timeout: 120000
        })
            .then((response)=>{
                // berhasil get api
                console.log('3. Berhasil dapat data get', response.data.data)
                dispatch({
                    type: "GET_LIST_STATUS",
                    payload: {
                        loading: false,
                        data: response.data.data, 
                        errorMessage: false
                    }
                })
            })
            .catch((error)=>{
                // gagal get api
                console.log('3. Gagal dapat data', error)
                dispatch({
                    type: "GET_LIST_STATUS",
                    payload: {
                        loading: false,
                        data: false, 
                        errorMessage: error.message
                    }
                })
            })
    }
}