import * as Yup from "yup";
import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { useFormik, Form, FormikProvider } from "formik";
import { Icon } from "@iconify/react";
import eyeFill from "@iconify/icons-eva/eye-fill";
import eyeOffFill from "@iconify/icons-eva/eye-off-fill";
import {makeStyles} from "@mui/styles";
// material
import { 
  Stack, 
  TextField, 
  IconButton, 
  InputAdornment, 
  Card, 
  CardContent, 
  Typography
} from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../actions/login/authAction';

// ----------------------------------------------------------------------


const useStyles = makeStyles((theme) => ({
  card: {
      height: '100%',
      display: 'flex',
      width: '500px',
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





export default function LoginForm() {
  const classes = useStyles();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {roleId, expired} = useSelector((state) => state.AuthReducer)
  
  const [showPassword, setShowPassword] = useState(false);

  const LoginSchema = Yup.object().shape({
    email: Yup.string().email("Email address is invalid").required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      remember: true,
    },
    validationSchema: LoginSchema,
    onSubmit: () => {
      dispatch(login({
              email: values.email,
              password: values.password
            }))
    },
  });  

  const { errors, touched, values, isSubmitting, handleSubmit, getFieldProps } = formik;

  // console.log(values)

  const handleShowPassword = () => {
    setShowPassword((show) => !show);
  };


  useEffect(()=>{
    console.log(roleId)
    if (roleId === 2) {
      navigate("/dashboard/karyawan", { replace: true });
    }
    // else{
    //   navigate("/dashboard/admin", { replace: true });
    // }
  },[roleId])

  return (
    <FormikProvider value={formik}>
      <Card className={classes.card}>
        <Stack alignItems="center" direction='row'>
          <img src="/prosigmaka.png" alt="login" style={{width:'200px', marginLeft:'25px', marginRight:'10px'}}/>
          <CardContent className={classes.cardContent} style={{textAlign:'center'}}>
            <Typography 
              gutterBottom 
              component="div"  
              style={{fontWeight:'bold', fontSize:'12pt', marginTop:'10px', marginBottom:'15px'}}
            >
              Login
            </Typography>
            <Form autoComplete="off" noValidate onSubmit={handleSubmit}>

              <Stack spacing={3}>
                <TextField 
                  type="email"
                  label="Email address"
                  {...getFieldProps("email")}
                  // onChange={handleChange}
                  value={values.email}
                  error={Boolean(touched.email && errors.email)}
                  helperText={touched.email && errors.email} 
                  size="small"
                  style={{marginTop:'15px', marginBottom:'10px'}}
                />

                <TextField
                  type={showPassword ? "text" : "password"}
                  label="Password"
                  {...getFieldProps("password")}
                  // onChange={handleChange}
                  value={values.password}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton onClick={handleShowPassword} edge="end">
                          <Icon icon={showPassword ? eyeFill : eyeOffFill} />
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                  error={Boolean(touched.password && errors.password)}
                  helperText={touched.password && errors.password}
                  size='small'
                  style={{marginTop:'15px', marginBottom:'15px'}}
                />
              </Stack>

              <LoadingButton 
                fullWidth 
                type="submit" 
                variant="contained" 
                loading={isSubmitting}
                style={{
                  marginTop:'10px', 
                  marginBottom:'15px', 
                  // width:'213px', 
                  backgroundColor:'#0e66b6'
                }}
              >
                Login
              </LoadingButton>
            </Form>
          </CardContent>
        </Stack>
      </Card>
      
    </FormikProvider>
  );
}




// export default function LoginForm() {
//   const classes = useStyles();
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const {role_id, expired} = useSelector((state) => state.AuthReducer)
//   // const currentTime = Date.now() / 1000
  

//   const [loginData, setLoginData] = useState({
//     email: "",
//     password: "",
//   })

//   const [showPassword, setShowPassword] = useState(false);

//   const handleShowPassword = () => {
//     setShowPassword((show) => !show);
//   };

//   const LoginSchema = Yup.object().shape({
//     email: Yup.string().email("Periksa kembalil email anda").required("Email is required"),
//     password: Yup.string().required("Password is required"),
//   });


//   const formik = useFormik({
//     initialValues: {
//       email: loginData.email,
//       password: loginData.password
//     },
//     validationSchema: LoginSchema,
//   });

//   const { errors, touched } = formik;

//   const handleChange = e => {
//     let data = {...loginData};
//     data[e.target.name] = e.target.value;
//     console.log(data)
//     setLoginData(data)
//   }

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     dispatch(login({
//       email: loginData.email,
//       password: loginData.password
//     }))
   
//     // if (role_id == 2) {
//     //   navigate("/dashboard/karyawan", { replace: true });
//     // }
//   }

//   useEffect(()=>{
//     console.log(role_id)
//     if (role_id == 2) {
//       navigate("/dashboard/karyawan", { replace: true });
//     }
//     else{
//       navigate("/", { replace: true });
//     }
//   },[role_id])

  

//   return(
//     <>
//       <Card className={classes.card}>
//         <Stack alignItems="center" direction='row'>
//           <img src="/prosigmaka.png" alt="login" style={{width:'200px', marginLeft:'25px', marginRight:'10px'}}/>
//         <CardContent className={classes.cardContent} style={{textAlign:'center'}}>
//           <Typography 
//             gutterBottom 
//             component="div"  
//             style={{fontWeight:'bold', fontSize:'12pt', marginTop:'10px', marginBottom:'15px'}}
//           >
//             Login
//           </Typography>

//           <FormikProvider value={formik}>
//             <FormControl variant="standard">
//               <TextField 
//                 id="email" 
//                 name="email" 
//                 type="email" 
//                 size="small"
//                 label="Email"
//                 value={loginData.email} 
//                 onChange={handleChange}
//                 error={Boolean(touched.email && errors.email)} 
//                 helperText={touched.email && errors.email}
//                 style={{marginTop:'15px', marginBottom:'10px'}}
//               />
//             </FormControl>

//             <FormControl variant="standard">
              
//               <TextField 
//                 id="password" 
//                 name="password" 
//                 type="password" 
//                 size="small"
//                 label="Password"
//                 value={loginData.password} 
//                 onChange={handleChange}
//                 style={{marginTop:'15px', marginBottom:'15px'}}
//                 InputProps={{
//                         endAdornment: (
//                                   <InputAdornment position="end">
//                                     <IconButton onClick={handleShowPassword} edge="end">
//                                       <Icon icon={showPassword ? eyeFill : eyeOffFill} />
//                                     </IconButton>
//                                   </InputAdornment>
//                                 ),
//                               }}
//                 error={Boolean(touched.password && errors.password)}
//                 helperText={touched.password && errors.password}
//               />
//             </FormControl>
//             <Button 
//               variant='contained' 
//               onClick={handleSubmit} 
//               style={{
//                 marginTop:'10px', 
//                 marginBottom:'15px', 
//                 width:'213px', 
//                 backgroundColor:'#0e66b6'
//               }}
//             >
//               Submit
//             </Button>
//           </FormikProvider>
          
//         </CardContent>
//         </Stack>
//       </Card>
//     </>
//   )


// }