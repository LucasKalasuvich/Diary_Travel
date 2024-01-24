import React from 'react';
import classes from './style.module.scss';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const bull = (
    <Box
      component="span"
      sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
      •
    </Box>
  );

const Login = () => {
  return (
    <>
    <div className={classes.wrapper}>
        <Card sx={{ minWidth: 375 }}>
            <CardContent>
                <div className={classes.login}>
                    <h3>Login</h3>
                </div>
                <div className={classes.loginEmail}>
                    <h4>Email</h4>
                    <Box
                    component="form"
                    sx={{
                        '& > :not(style)': { m: 1, width: '25ch' },
                    }}
                    noValidate
                    autoComplete="off"
                    >
                        <TextField id="outlined-basic"  variant="outlined" />
                    </Box>
                </div>

                <div className={classes.loginPassword}>
                    <h4>Password</h4>
                    <Box
                    component="form"
                    sx={{
                        '& > :not(style)': { m: 1, width: '25ch' },
                    }}
                    noValidate
                    autoComplete="off"
                    >
                        <TextField id="outlined-basic"  variant="outlined" />
                    </Box>
                </div>
                
                <div className={classes.btn}>
                    <Stack spacing={2} direction="row">
                        <Button sx={ {minWidth: 320} } variant="contained">Login</Button>
                    </Stack>
                </div>
                
            </CardContent>
        </Card>
    </div>
     
    </>
  )
}

export default Login
