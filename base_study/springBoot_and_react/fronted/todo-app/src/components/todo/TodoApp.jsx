import React, {Component} from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import "./TodoApp.css"

class TodoApp extends Component {
    render() {
        return (
            <div className="TodoApp">
                <Router>
                    <>
                        <Route path="/" exact component={LoginComponent}/>
                        <Route path="/login" component={LoginComponent}/>
                        <Route path="/welcome" component={WelcomeComponent}/>
                    </>
                </Router>
                {/*<LoginComponent/>
                <WelcomeComponent />*/}
            </div>
        )
    }
}

class WelcomeComponent extends Component {
    render() {
        return <div>Welcome jae-kim</div>
    }
}

class LoginComponent extends Component {
    constructor(props) {
        super(props)
        this.state = { 
            username: 'jae-kim',
            password: '',
            hasLoginFailed: false,
            showSuccessMessage: false
        }
        // this.handleUsernameChange = this.handleUsernameChange.bind(this)
        // this.handlePasswordChange = this.handlePasswordChange.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.loginClicked = this.loginClicked.bind(this)
    }


    handleChange(event) {
        console.log(this.state);
        this.setState(
            {
                [event.target.name]
                :event.target.value
            }
        )
    }

    // handleUsernameChange(event) {
    //     console.log(event.target.value);
    //     this.setState({username:event.target.value})
    // }

    // handlePasswordChange(event) {
    //     console.log(event.target.value);
    //     this.setState({password:event.target.value})
    // }

    loginClicked() {
        if (this.state.username === 'jae-kim' && this.state.password === 'test')
            {
                this.props.history.push("/welcome")
                //this.setState({hasLoginFailed:false})
                //this.setState({showSuccessMessage:true})
            }
        else
            {
                this.setState({hasLoginFailed:true})
                this.setState({showSuccessMessage:false})
            }
    } 

    render() {
        return (
            <div>
                {this.state.hasLoginFailed && <div>Invaild Credentials</div>}
                {this.state.showSuccessMessage && <div>Login Success </div>}
                {/*<ShowInvalidCredentials hasLoginFailed={this.state.hasLoginFailed}/>
                <ShowLoginSuccess showSuccessMessage={this.state.showSuccessMessage}/>*/}
                User Name: <input type="text" name="username" value={this.state.username} onChange={this.handleChange}/>
                Password: <input type="password" name="password" value={this.state.password} onChange={this.handleChange} onKeyPress={this.handleKeyPress}/>

                <button onClick={this.loginClicked}>Login</button>
            </div>
        )
    }

    handleKeyPress = (e) => {
        if (e.key === "Enter") {
            this.loginClicked();
        }
    }
}

// function ShowInvalidCredentials(props){
//     if (props.hasLoginFailed) {
//         return <div>Invalid Credentials</div>
//     }
//     return null
// }

// function ShowLoginSuccess(props){
//     if (props.showSuccessMessage) {
//         return <div>Login Success</div>
//     }
//     return null
// }

export default TodoApp