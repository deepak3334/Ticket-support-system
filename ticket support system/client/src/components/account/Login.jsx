import { Box, TextField, Button, styled, Typography } from '@mui/material';

const Component = styled(Box)`
     width: 500px;
     background: #F4FBFF;
     height: 450px;
     margin-top: 110px;
     margin-left: 440px;
     box-shadow: 5px 2px 5px 2px rgb(0 0 0/ 0.6);

`;

const Heading = styled(Typography)`
       text-align: center;
       font-size: 25px;
       padding: 20px;
`;

const Detail = styled(Typography)`
      text-align: center;
      font-size: 30px;
      
`

const Wrapper = styled(Box)`
     padding: 20px 30px;
     display: flex;
     flex: 1;
     flex-direction: column;
     & > div, & > button, & > p {
        margin-top: 15px;
      }
`;

const LoginButton = styled(Button)`
     width: 120px;
     height: 25px;
     padding: 20px;
    
     margin-left: 150px;
`

const Forgot = styled(Typography)`
      margin-left: 295px;
`

const Fields = styled(TextField)`
   background: #fff;
`;

const Login = () => {
    return (
        <Component>
          <Box>
             <Heading >Welcome to Kadel Labs</Heading>
             <Detail >Login</Detail>
             <Wrapper>
               
                Username<Fields  id="outlined-basic" label="Enter Username" variant="outlined" name='name'  /> <br/>
                Password<Fields  htmlFor="outlined-adornment-password" id="outlined-basic" label="Enter Password" variant="outlined" name='name' />
                {/* <Fields hintText="At least 8 characters"floatingLabelText="Enter your password"errorText="Your password is too short"/> */}
                
                        <Forgot>Forgot Password</Forgot>
                 
                 <LoginButton variant="contained">LOGIN</LoginButton>
                 {/* <Button>Create an account</Button> */}
             </Wrapper>
          </Box> 
          <Typography  style={{ textAlign: 'center' }}>By clicking Login, you accept the </Typography>
          <Typography   style={{ textAlign: 'center' }} > Term & Condition</Typography>
        </Component>
      
    )
}

export default Login;