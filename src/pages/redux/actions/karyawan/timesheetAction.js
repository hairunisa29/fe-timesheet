import axios from 'axios';

export const GET_LIST_TIMESHEET = "GET_LIST_TIMESHEET";
export const ADD_TIMESHEET = "ADD_TIMESHEET";
export const DETAIL_TIMESHEET = "DETAIL_TIMESHEET";
export const UPDATE_TIMESHEET = "UPDATE_TIMESHEET";
export const OPEN_MODAL = "OPEN_MODAL";

export const getListTimesheet = () =>{
    console.log('2. Masuk action getList')
    return(dispatch) => {
        // loading
        dispatch({
            type: "GET_LIST_TIMESHEET",
            payload: {
                loading: true,
                data: false, 
                errorMessage: false
            }
        })

        // get api
        axios({
            method: "GET",
            url: 'http://localhost:4000/timesheets',
            timeout: 120000
        })
            .then((response)=>{
                // berhasil get api
                console.log('3. Berhasil dapat data', response)
                dispatch({
                    type: "GET_LIST_TIMESHEET",
                    payload: {
                        loading: false,
                        data: response.data, 
                        errorMessage: false
                    }
                })
            })
            .catch((error)=>{
                // gagal get api
                console.log('3. Gagal dapat data', error)
                dispatch({
                    type: "GET_LIST_TIMESHEET",
                    payload: {
                        loading: false,
                        data: false, 
                        errorMessage: error.message
                    }
                })
            })
    }
}


export const addTimesheet = (data) =>{
    console.log('2. Masuk action add')
    return(dispatch) => {
        // loading
        dispatch({
            type: "ADD_TIMESHEET",
            payload: {
                loading: true,
                data: false, 
                errorMessage: false
            }
        })

        // get api
        axios({
            method: "POST",
            url: 'http://localhost:4000/timesheets',
            timeout: 120000,
            data: data
        })
            .then((response)=>{
                // berhasil get api
                console.log('3. Berhasil dapat data', response)
                dispatch({
                    type: "ADD_TIMESHEET",
                    payload: {
                        loading: false,
                        data: response.data, 
                        errorMessage: false
                    }
                })
            })
            .catch((error)=>{
                // gagal get api
                console.log('3. Gagal dapat data', error)
                dispatch({
                    type: "ADD_TIMESHEET",
                    payload: {
                        loading: false,
                        data: false, 
                        errorMessage: error.message
                    }
                })
            })
    }
}


export const detailTimesheet = (data) => {
    return (dispatch) => {
        dispatch({
            type: DETAIL_TIMESHEET,
            payload: {
                data: data
            }
        })
    }
}


export const updateTimesheet = (data) =>{
    console.log('2. Masuk action update')
    return(dispatch) => {
        // loading
        dispatch({
            type: "UPDATE_TIMESHEET",
            payload: {
                loading: true,
                data: false, 
                errorMessage: false
            }
        })

        // get api
        axios({
            method: "PUT",
            url: 'http://localhost:4000/timesheets/'+ data.id,
            timeout: 120000,
            data: data
        })
            .then((response)=>{
                // berhasil get api
                console.log('3. Berhasil dapat data', response)
                dispatch({
                    type: "UPDATE_TIMESHEET",
                    payload: {
                        loading: false,
                        data: response.data, 
                        errorMessage: false
                    }
                })
            })
            .catch((error)=>{
                // gagal get api
                console.log('3. Gagal dapat data', error)
                dispatch({
                    type: "UPDATE_TIMESHEET",
                    payload: {
                        loading: false,
                        data: false, 
                        errorMessage: error.message
                    }
                })
            })
    }
}


export const openModal = (open) => {
    return (dispatch) => {
        dispatch({
            type: OPEN_MODAL,
            payload: {
                data: open
            }
        })
    }
}