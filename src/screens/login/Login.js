import React, { Component } from 'react';
import Header from '../../common/header/Header';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import './Login.css';
import FormHelperText from '@material-ui/core/FormHelperText';
import {withStyles} from '@material-ui/core/styles';


const styles = theme => ({
    formControl: {
        margin: theme.spacing.unit,
        minWidth: 240,
        maxWidth: 240
     }
});

class Login extends Component {
    constructor() {
        super();

        this.state = {

            usernameRequired: "dispNone",
            username: "",
            passwordRequired: "dispNone",
            password: "",
            usernamePasswordIncorrect :"dispNone",
            loggedIn: sessionStorage.getItem("access-token") == null ? false : true
        }
    }

    loginClickHandler = (e) =>{
        let dummyUsername="xyz";
        let dummyPassword="xyz@123";

        let accessToken = "IGQVJVUzV3dkVWaVFmUllOUzY0OVY0bjJId25TMGpteWlrMktaQUFZAWDFMNUg0SWtGU1ZAJZA2l2dGlEMUx6REpLWEhTNnZAvZA2c1bnlQRnF2M0NPU3hSdEM5SDNxZAXYyZAERPakdWUklHZAHo1aHpmRGdGckNEWklJQTZANd1RJ";

        if (this.state.username === dummyUsername && this.state.password === dummyPassword) {
            window.sessionStorage.setItem("access-token", accessToken);
            /*this is the history object where the push method available in the history object is used
             to redirecting the user to the Home page when a user logins successfully.*/
            this.props.history.push('/home/');

        }  

        this.state.username === "" ? this.setState({usernameRequired :"dispBlock"}) : this.setState({usernameRequired :"dispNone"});
        this.state.password === "" ? this.setState({passwordRequired :"dispBlock"}) : this.setState({passwordRequired :"dispNone"});
        
        (this.state.username !== "") & (this.state.password !== "") & (this.state.username !== dummyUsername || this.state.password !== dummyPassword) ? this.setState({ usernamePasswordIncorrect: "dispBlock" }) : this.setState({ usernamePasswordIncorrect: "dispNone" });   
          
    }

    inputUsernameChangeHandler = (e) => {
        this.setState({ username: e.target.value });
    }

    inputPasswordChangeHandler = (e) => {
        this.setState({ password: e.target.value });
    }

    render() {
        const { classes } = this.props;
        return (
            <div>
                <Header  title="Image Viewer"
          parent="login"
          history={this.props.history} />
                <div>
                    <Card variant="outlined" className='cardStyle'>
                        <CardContent >
                            <Typography variant='title'>
                                LOGIN
                            </Typography><br />
                            <FormControl className={classes.formControl} required>
                                <InputLabel className='loginLabel' htmlFor="username">Username</InputLabel>
                                <Input id="username" type="text" username={this.state.username} onChange={this.inputUsernameChangeHandler} />
                                <FormHelperText className={this.state.usernameRequired}>
                                    <span className='red'>required</span>
                                </FormHelperText>
                            </FormControl><br />
                            <FormControl className={classes.formControl} required>
                                <InputLabel htmlFor="password">Password</InputLabel>
                                <Input id="password" type="password" password={this.state.password} onChange={this.inputPasswordChangeHandler}/>
                                <FormHelperText className={this.state.passwordRequired}>
                                    <span className='red'>required</span>
                                </FormHelperText>
                                <FormHelperText className={this.state.usernamePasswordIncorrect}>
                                    <span className="red">Incorrect username and/or password</span>
                                </FormHelperText>
                            </FormControl><br /><br />

                            <Button variant="contained" color="primary" className='loginButton' onClick ={this.loginClickHandler}>LOGIN</Button>
                        </CardContent>
                    </Card>
                </div>
            </div>
        )
    }
}

export default withStyles(styles)(Login);