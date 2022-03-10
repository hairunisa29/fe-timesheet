// import { Link as RouterLink } from "react-router-dom";
// material
import { styled } from "@mui/material/styles";
import { Card, Container} from "@mui/material";
// layouts
// import AuthLayout from "../layouts/AuthLayout";
// components
// import Page from "../components/Page";
// import { MHidden } from "../../layout/@material-extend";
import { LoginForm } from "../redux/components";

// ----------------------------------------------------------------------

const RootStyle = styled("div")({
  display: "flex",
  minHeight: "100%",
  overflow: "hidden",
});

const SectionStyle = styled(Card)(({ theme }) => ({
  width: "100%",
  maxWidth: 464,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  margin: theme.spacing(2, 0, 2, 2),
}));

const ContentStyle = styled("div")(({ theme }) => ({
  maxWidth: 480,
  margin: "auto",
  display: "flex",
  minHeight: "100vh",
  flexDirection: "column",
  justifyContent: "center",
  padding: theme.spacing(12, 0),
}));

// ----------------------------------------------------------------------

export default function Login() {
  return (
    <RootStyle title="Login | PSM">
      {/* <AuthLayout>
        <Link underline="none" variant="subtitle2" component={RouterLink} to="/register">
          Get started
        </Link>
      </AuthLayout> */}

      {/* <MHidden width="mdDown">
        <SectionStyle>
          <img src="/static/illustrations/login.jpg" alt="login" />
        </SectionStyle>
      </MHidden> */}

      <Container maxWidth="sm">
        <ContentStyle>
          {/* <Stack sx={{ mb: 5, ml: 12 }}>
            <Typography gutterBottom>
              <img src="/prosigmaka.png" alt="login" />
            </Typography>
          </Stack> */}

          <LoginForm />

          {/* <MHidden width="smUp">
            <Typography variant="body2" align="center" sx={{ mt: 3 }}>
              Don’t have an account?&nbsp;
              <Link variant="subtitle2" component={RouterLink} to="register">
                Get started
              </Link>
            </Typography>
          </MHidden> */}
        </ContentStyle>
      </Container>
    </RootStyle>
  );
}
