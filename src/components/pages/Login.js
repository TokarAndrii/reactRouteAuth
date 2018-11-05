import React, {Component} from 'react'
import {Redirect} from 'react-router-dom'
import {fakeAuth} from '../../auth/'

const INITIAL_STATE = {
    redirectToReferrer: false
}


class Login extends Component {
    state = INITIAL_STATE

    login = () => {
        console.log('click ')
        fakeAuth.authenticate(() => {
            this.setState({
                redirectToReferrer: true
            })
        })
    }

    render() {
        const {redirectToReferrer} = this.state
        const {from} = this.props.location.state || {from: {pathname: '/'}}
        console.log(this)

        if (redirectToReferrer === true) {
            return <Redirect to={from}/>
        }


        return (
            <div>
                <h2>Login</h2>
                <button onClick={this.login}>Log in</button>
            </div>
        )
    }
}


export default Login