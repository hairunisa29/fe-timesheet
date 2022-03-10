import {GET_LIST_FILE, ADD_FILE} from '../../../actions/karyawan/uploadFileAction';

const initialState = {
    getListFileResult: false,
    getListFileLoading: false,
    getListFileError: false,

    addFileResult: false, 
    addFileLoading: false,
    addFileError: false,
}

const file = (state = initialState, action) => {
    switch(action.type) {
        case GET_LIST_FILE:
            return{
                ...state,
                getListFileResult: action.payload.data,
                getListFileLoading: action.payload.loading,
                getListFileError: action.payload.errorMessage
            };
        case ADD_FILE:
            return{
                ...state,
                addFileResult: action.payload.data,
                addFileLoading: action.payload.loading,
                addFileError: action.payload.errorMessage
            };
        default:
            return state;
    }
}

export default file;