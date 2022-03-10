import { combineReducers } from "redux";
import ProjectReducer from "./admin/project";
import EmployeeReducer from "./admin/employee";
import TimesheetReducer from './karyawan/timesheet';
import StatusReducer from './karyawan/status'
import AddFileReducer from './karyawan/addFile'
import AuthReducer from './login'


export default combineReducers({
    TimesheetReducer,
    StatusReducer,
    AddFileReducer,
    ProjectReducer,
    EmployeeReducer,
    AuthReducer
})
