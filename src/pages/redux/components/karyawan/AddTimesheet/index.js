import React, { useState, useEffect } from 'react';
import {
    Card, 
    Button,
    CardContent, 
    FormControl,
    Input, 
    InputLabel,
    MenuItem, 
    Stack, 
    TextField, 
    Typography} from '@mui/material';
import {makeStyles} from "@mui/styles";
import { useDispatch, useSelector } from 'react-redux';
import {addTimesheet, getListTimesheet, updateTimesheet, openModal} from '../../../actions/karyawan/timesheetAction';
import {getListStatus} from '../../../actions/karyawan/statusAction';
// import {addFile} from '../../../actions/karyawan/uploadFileAction';


const useStyles = makeStyles((theme) => ({
    card: {
        height: '100%',
        display: 'flex',
        width: '400px',
        flexDirection: 'column',
        marginTop: '2px',
    },
    cardMedia: {
        paddingTop: '56.25%', // 16:9
    },
    cardContent: {
        flexGrow: 1,
        
    },
}));


const project_id = [
    {
      value: 1,
      label: 'Project 1',
    },
    {
      value: 2,
      label: 'Project 2',
    },
    {
      value: 3,
      label: 'Project 3',
    },
  ];




function AddTimesheet() {
    const classes = useStyles();

    const dispatch = useDispatch();

    const {addTimesheetResult, detailTimesheetResult, updateTimesheetResult} = useSelector((state) => state.TimesheetReducer);
    const {getListStatusResult, getListStatusLoading, getListStatusError} = useSelector((state) => state.StatusReducer);
    

    const [formData, setFormData] = useState({
        id:"",
        project_id: 0,
        date: "",
        status_id: 0,
        working_start: "00:00",
        working_end: "00:00",
        overtime_start: "00:00",
        overtime_end: "00:00",
        activity: ""
    });

    // const [fileInfo, setFileInfo] = useState({
    //     id:"",
    //     id_doctype:"",
    // })

    // const [file, setFile] = useState(null)

    
    useEffect(()=>{
        dispatch(getListStatus())
    }, [dispatch])

    // console.log("getlisttatus" + getListStatusResult)

    const handleChange = e => {
        let data = {...formData};
       
        data[e.target.name] = e.target.value;
        
        console.log(data)
        setFormData(data)
        
    }


    // const fileInfoHandler = e => {
    //     let formFile = {...fileInfo};
    //     formFile[e.target.name] = e.target.value;
    //     setFileInfo(formFile)
    // }

    // const fileHandler = (e) => {
    //     setFile(e.target.files[0])
    // }

 

    const closeHandler = e => {
        e.preventDefault();
        dispatch(openModal(false))
    }
    

    

    const handleSubmit = e => {
        e.preventDefault();

        // saat ada id update timesheet
        if(formData.id){
            // update kontak
            dispatch(updateTimesheet({
                id: formData.id,
                project_id: formData.project_id,
                date: formData.date,
                status_id: formData.status_id,
                working_start: formData.working_start,
                working_end: formData.working_end,
                overtime_start: formData.overtime_start,
                overtime_end: formData.overtime_end,
                activity: formData.activity,
            }));
            
            
        }
        // saat tidak ada id maka add timesheet
        else{
            // add timesheet
            dispatch(addTimesheet({
                project_id: formData.project_id,
                date: formData.date,
                status_id: formData.status_id,
                working_start: formData.working_start,
                working_end: formData.working_end,
                overtime_start: formData.overtime_start,
                overtime_end: formData.overtime_end,
                activity: formData.activity,
            }))
            // dispatch(addFile({
            //     id_doctype: fileInfo.id_doctype,
            //     // file: file,
            // }))
        }
    }

    


    useEffect(()=>{
        if (addTimesheetResult) {
            // console.log('6. Masuk komponen did update')
            dispatch(getListTimesheet())
            setFormData({
                project_id: "",
                date: "",
                status_id: "",
                working_start: "00:00",
                working_end: "00:00",
                overtime_start: "00:00",
                overtime_end: "00:00",
                activity: ""
            })
            
        }
    },[addTimesheetResult, dispatch])


    useEffect(()=>{
        if (detailTimesheetResult) {
            // console.log('6. Masuk komponen did update')
            // dispatch(getListKontak())
            setFormData({
                id: detailTimesheetResult.id,
                project_id: detailTimesheetResult.project_id,
                date: detailTimesheetResult.date,
                status_id: detailTimesheetResult.status_id,
                working_start: detailTimesheetResult.working_start,
                working_end: detailTimesheetResult.working_end,
                overtime_start: detailTimesheetResult.overtime_start,
                overtime_end: detailTimesheetResult.overtime_end,
                activity: detailTimesheetResult.activity
            })
            
        }
    },[detailTimesheetResult, dispatch])


    useEffect(()=>{
        if (updateTimesheetResult) {
            // console.log('6. Masuk komponen did update')
            dispatch(getListTimesheet())
            setFormData({
                project_id: "",
                date: "",
                status_id: "",
                working_start: "00:00",
                working_end: "00:00",
                overtime_start: "00:00",
                overtime_end: "00:00",
                activity: ""
            })
            
        }
    },[updateTimesheetResult, dispatch])


    // useEffect(()=>{
    //     if (openModalResult === false) {
    //         setFormData({
    //             project_id: "",
    //             date: "",
    //             status_id: "",
    //             working_start: "00:00",
    //             working_end: "00:00",
    //             overtime_start: "00:00",
    //             overtime_end: "00:00",
    //             activity: ""
    //         })
    //     }
    // })

    

    return(
        <>
                <Card className={classes.card}>
                <Stack
                    alignItems="center"
                >
                   <CardContent className={classes.cardContent} style={{textAlign:'center'}}>

                    <Typography 
                        gutterBottom 
                        component="div"  
                        style={{fontWeight:'bold', fontSize:'12pt', marginTop:'10px', marginBottom:'25px'}}
                    >
                        {formData.id? "Edit Activity" : "Add Activity"}
                    </Typography>
                    <Stack
                        component="form"
                        sx={{
                            width: '35ch',
                        }}
                        spacing={2}
                        noValidate
                        autoComplete="off"
                        
                    >
 
                    <FormControl variant="standard">
                        <InputLabel shrink>
                            Status
                        </InputLabel>
                        <TextField
                            id="status"
                            select
                            label="Select Status"
                            size="small"
                            name="status_id"
                            value={formData.status_id}
                            onChange={handleChange}
                            style={{marginTop:'25px'}}
                        >
                            

                            {getListStatusResult ? (
                                getListStatusResult.map((option) => {
                                    return(
                                            <MenuItem key={option.status_id} value={option.status_id}>
                                                {option.status_name}
                                            </MenuItem>    
                                        )
                                            })
                                        ) : getListStatusLoading ? (
                                            <MenuItem>
                                                Loading...
                                            </MenuItem>  
                                        ) : (
                                            <MenuItem>{getListStatusError ? getListStatusError : "Data Kosong"}</MenuItem> 
                                        )
                                    }
                       </TextField>
                    </FormControl>

                    {
                        formData.status_id == 1 ? (
                            <Stack>
                                <FormControl variant="standard">
                                    <InputLabel shrink>
                                        Project Name
                                    </InputLabel>
                                    <TextField
                                        id="projectname"
                                        select
                                        size="small"
                                        label="Select Project"
                                        name="project_id"
                                        value={formData.project_id}
                                        onChange={handleChange}
                                        style={{marginTop:'20px', marginBottom:"10px"}} 
                                    >
                                        {project_id.map((option) => (
                                            <MenuItem key={option.value} value={option.value}>
                                                {option.label}
                                            </MenuItem>
                                        ))}
                                    </TextField>
                                </FormControl>
                                <FormControl variant="standard">
                                    <InputLabel shrink>
                                        Date
                                    </InputLabel>
                                    <TextField 
                                        id="date" 
                                        name="date" 
                                        type="date" 
                                        variant="outlined" 
                                        size="small" 
                                        value={formData.date} 
                                        onChange={handleChange} 
                                        style={{marginTop:'20px'}}
                                    />
                                </FormControl>
                   
                                  
                                <Stack direction="row" alignItems="center" justifyContent="space-between" mb={1} mt={1}>
                                    <FormControl variant="standard">
                                        <InputLabel shrink>
                                            Working Hour
                                        </InputLabel>
                                        <TextField 
                                            id="startworkinghour" 
                                            name="working_start" 
                                            type="time"
                                            label="Start" 
                                            variant="outlined"
                                            size='small' 
                                            value={formData.working_start} 
                                            onChange={handleChange}
                                            style={{marginTop:'20px'}}
                                        />
                                    </FormControl>
                                    <TextField 
                                            id="endworkinghour"
                                            name="working_end"
                                            type="time" 
                                            label="End" 
                                            size='small' 
                                            variant="outlined" 
                                            value={formData.working_end} 
                                            onChange={handleChange}
                                            style={{marginTop:'20px'}}
                                    />
                                    
                                </Stack>


                                <Stack direction="row" alignItems="center" justifyContent="space-between" mb={1} >
                                    <FormControl variant="standard">
                                        <InputLabel shrink>
                                            Overtime
                                        </InputLabel>
                                        <TextField 
                                            id="startovertime" 
                                            name="overtime_start" 
                                            label='Start'
                                            type="time" 
                                            size='small' 
                                            variant="outlined" 
                                            value={formData.overtime_start} 
                                            onChange={handleChange}
                                            style={{marginTop:'20px'}}
                                        />
                                    </FormControl>
                                    
                                    <TextField 
                                        id="endovertime" 
                                        name="overtime_end" 
                                        type="time"
                                        label="End"
                                        size='small' 
                                        variant="outlined" 
                                        value={formData.overtime_end} 
                                        onChange={handleChange}
                                        style={{marginTop:'20px'}}
                                    />
                                </Stack>

                                <FormControl variant="standard">
                                    <InputLabel shrink>
                                        Activity
                                    </InputLabel>
                                    <TextField 
                                        id="activity" 
                                        name="activity" 
                                        type="text" 
                                        multiline 
                                        value={formData.activity} 
                                        onChange={handleChange}
                                        style={{marginTop:'20px'}}
                                    />
                                </FormControl>
                            </Stack>
                            
                        ) : (
                            <Stack>
                                <FormControl variant="standard">
                                    <InputLabel shrink>
                                        Date
                                    </InputLabel>
                                    <TextField 
                                        id="date" 
                                        name="date" 
                                        type="date" 
                                        variant="outlined" 
                                        size="small" 
                                        value={formData.date} 
                                        onChange={handleChange} 
                                        style={{marginTop:'2 5px'}}
                                    />
                                </FormControl>
                                {/* <FormControl variant="standard">
                                    <InputLabel shrink>
                                        Doc Type
                                    </InputLabel>
                                    <TextField
                                        id="doctype"
                                        select
                                        size="small"
                                        label="Select Doctype"
                                        name="id_doctype"
                                        value={fileInfo.id_doctype}
                                        onChange={fileInfoHandler}
                                        style={{marginTop:'20px', marginBottom:"10px"}} 
                                    >
                                        {id_doctype.map((option) => (
                                            <MenuItem key={option.value} value={option.value}>
                                                {option.label}
                                            </MenuItem>
                                        ))}
                                    </TextField>
                                </FormControl> */}
                                
                            </Stack>
                            
                        )
                    }

                    
                    
                    <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5} mt={5}>
                        <Button variant='contained' onClick={handleSubmit}>Submit</Button>
                        <Button variant='contained' onClick={closeHandler}>Cancel</Button>
                    </Stack>
                   
                    

                    </Stack>




                    </CardContent>



                </Stack>
                
            </Card>


            
        </>
    )
}

export default AddTimesheet;