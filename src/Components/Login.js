import React, { Component } from 'react';
import { Store, ReactNotifications } from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css'
import 'animate.css/animate.min.css';
class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userEmail: '',
            userPassword: ''
        }
    }
    checkuser() {

    }
    render() {
        return (
            <div className="full-page">
                <ReactNotifications />

                <div className="overlay-box"></div>
                <div className="center-form-box show" id="login-box">
                    <div className="header-text">
                        <h1>LogIn</h1>
                        <h5>Have an account?</h5>
                    </div>
                    <form>
                        <input type="text" placeholder="Email" name="email" onChange={(e) => {
                            this.setState({ ...this.state, userEmail: e.currentTarget.value })
                        }} />
                        <input type="password" name="password" id="" placeholder="Password" onChange={(e) => {
                            this.setState({ ...this.state, userPassword: e.currentTarget.value })
                        }} />
                        <button type="button" onClick={() => {
                            if (this.state.userEmail == '' || this.state.userPassword == '') {
                                Store.addNotification({
                                    title: "INFO!",
                                    message: "Fill your Email and Password.",
                                    type: "info",
                                    insert: "top",
                                    container: "top-right",
                                    animationIn: ["animate__animated", "animate__flipInY"],
                                    animationOut: ["animate__animated", "animate__flipInY"],
                                    dismiss: {
                                        duration: 3000,
                                        onScreen: true
                                    }
                                });
                            } else if (this.state.userEmail == 'test@gmail.com' && this.state.userPassword == '123456') {
                                this.props.history.push('/car');
                            } else {
                                Store.addNotification({
                                    title: "ERROR!",
                                    message: "Username or Password is incorrect.",
                                    type: "danger",
                                    insert: "top",
                                    container: "top-right",
                                    animationIn: ["animate__animated", "animate__flipInY"],
                                    animationOut: ["animate__animated", "animate__flipInY"],
                                    dismiss: {
                                        duration: 3000,
                                        onScreen: true
                                    }
                                });
                            }
                        }}>Submit</button>
                    </form>
                </div>
                <div className="center-form-box hide" id="sign-box">
                    <div className="header-text">
                        <h1>Signup</h1>
                        <h5>use your email for registration </h5>
                    </div>
                    <form>
                        <input type="text" name="name" placeholder="Name" required />
                        <input type="text" name="email" placeholder="Email" required />
                        <input type="text" name="phone" placeholder="Phone" required />
                        <input type="password" id="password" name="password" placeholder="Password" required />
                        <input type="password" id="confirm_password" name="confirm_password" placeholder="Confirm password" required />
                        <span id="msg"></span>
                        <button type="submit" onClick={() => this.checkuser()}>Submit</button>
                        <a href="javascript:void(0)" className="sign-in" id="login-link">Or Login</a>
                    </form>
                </div>
            </div>
        );
    }

}

export default (Login);

