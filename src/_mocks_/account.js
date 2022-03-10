import { useSelector } from 'react-redux';
// import { login } from '../pages/redux/actions/login/authAction';
import { styled } from '@mui/material/styles';
import { Box, Link, Typography, Avatar} from '@mui/material';
import { Link as RouterLink} from 'react-router-dom';
// ----------------------------------------------------------------------

const AccountStyle = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(2, 2.5),
  borderRadius: theme.shape.borderRadiusSm,
  backgroundColor: theme.palette.grey[200]
}));

function Account() {
  const {firstName, lastName} = useSelector((state) => state.AuthReducer)
  const user = {
    // firstName: {firstName},
    // lastName: {lastName},
    photoURL: '/static/mock-images/avatars/avatar_default.jpg'
  }
  console.log(firstName)
  // const displayName = {email}
  // email: 'demo@minimals.cc',
  // photoURL: '/static/mock-images/avatars/avatar_default.jpg'
  return(
    <Link underline="none" component={RouterLink} to="#">
          <AccountStyle>
            <Avatar src={user.photoURL} alt="photoURL" />
            <Box sx={{ ml: 2 }}>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                {firstName} {lastName}
              </Typography>
            </Box>
          </AccountStyle>
        </Link>
  )
};

export default Account;
