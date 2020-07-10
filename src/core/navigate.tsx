import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
export function NavigateTo(url:string){
    return(
        <Router>
            <Switch>
                <Route path={url}></Route>
            </Switch>
        </Router>
    )
}