import React, {Component} from 'react';
import {Route, Switch, Link} from 'react-router-dom'
import Home from './components/pages/Home'
import PublicPage1 from './components/pages/PublicPage1'
import PrivatePage1 from './components/pages/PrivatePage1'
import Login from './components/pages/Login'
import AppBar from './components/shared/appBar'
import AuthButton from './components/shared/AuthButton'
import PrivateRoute from './components/shared/PrivateRoute'
import styles from './App.css';

class App extends Component {
    render() {
        return (
            <div className={styles.App}>
                <AppBar className={styles.appBar}>
                    <span>SimpleReactAuthApp</span>
                    <ul className={styles.AppNavLinksList}>
                        <li className={styles.AppNavLinksListItem}><Link exact="true" to="/">Home</Link></li>
                        <li className={styles.AppNavLinksListItem}><Link to="/publicPage1">PublicPage1</Link></li>
                        <li className={styles.AppNavLinksListItem}><Link to="/privatePage1">PrivatePage1</Link></li>
                    </ul>
                </AppBar>
                <AuthButton/>
                <Switch>
                    <Route path="/" component={Home} exact/>
                    <Route path="/publicPage1" component={PublicPage1}/>
                    <Route path="/login" component={Login}/>
                    <PrivateRoute path="/privatePage1" component={PrivatePage1}/>
                </Switch>
            </div>
        );
    }
}

export default App;
