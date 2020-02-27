import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    withRouter
} from "react-router-dom";

import Home from './Tabs/Home/Home'
import Apps from './Tabs/Apps/Apps'
import Contact from './Tabs/Contact/Contact'

const ContentView = () => {
    return (
        <div class="content-view">
            <Switch>
                <Route path="/" exact component={Apps} />
                <Route path="/home" component={Home} />
                <Route path="/contact" component={Contact} />
            </Switch>
        </div>
    )
}

export default ContentView
