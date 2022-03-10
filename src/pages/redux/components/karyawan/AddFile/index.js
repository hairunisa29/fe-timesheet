import React, {useState, useEffect} from 'react';
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
    Typography
} from '@mui/material';
import {makeStyles} from "@mui/styles";
import { useDispatch, useSelector } from 'react-redux';
import {addFile} from '../../../actions/karyawan/uploadFileAction';



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



const id_doctype = [
    {
      value: 1,
      label: 'Surat Izin',
    },
    {
      value: 2,
      label: 'Surat Sakit',
    },
    {
      value: 3,
      label: 'Surat Cuti',
    },
  ];


function AddFile(){
    const classes = useStyles();
    const dispatch = useDispatch();

    const [fileInfo, setFileInfo] = useState({
        id:"",
        id_doctype:"",
    })

    const [file, setFile] = useState(null)
    

    const fileInfoHandler = e => {
        let formFile = {...fileInfo};
        formFile[e.target.name] = e.target.value;
        setFileInfo(formFile)
        
        // formData.append("id_doctype", fileInfo.id_doctype)
    }

    const fileHandler = (e) => {
        setFile(e.target.files[0])
    }

    const handleSubmit = e => {
        e.preventDefault();
        const data = new FormData();
        data.append("id_doctype", fileInfo.id_doctype);
        data.append("file", file)

        dispatch(addFile(data))
    }

    return(
        <>
            <Card className={classes.card}>
                <Stack alignItems="center">
                    <CardContent className={classes.cardContent} style={{textAlign:'center'}}>
                        <Typography
                            gutterBottom 
                            component="div"  
                            style={{fontWeight:'bold', fontSize:'12pt', marginTop:'10px', marginBottom:'25px'}}
                        >
                            Add New File
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
                        </FormControl>
                        <FormControl>
                            <InputLabel shrink>
                                Upload File
                            </InputLabel>
                            <Input
                                type='file'
                                onChange={fileHandler}
                            />
                        </FormControl>
                        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5} mt={5}>
                            <Button variant='contained' onClick={handleSubmit}>Submit</Button>
                        </Stack>
                    </Stack>
                    </CardContent>
                </Stack>    
            </Card>
        </>
    )

}

export default AddFile;