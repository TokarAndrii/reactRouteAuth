import React from 'react'
import {withRouter} from 'react-router-dom'
import {fakeAuth} from '../../auth/'

const AuthButton = withRouter(({history}) => (
    fakeAuth.isAuthenticated ? (
        <div>
            <span>Welcome you are Authenticated!!!!</span>
            <button onClick={() => {
                fakeAuth.signOut(() => history.push('/'))
            }}>Sign out
            </button>
        </div>

    ) : (<span>You are not logged</span>)
))

export default AuthButton
