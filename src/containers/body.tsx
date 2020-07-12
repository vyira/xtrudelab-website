import React from "react";
import { Route, Switch } from 'react-router-dom'
import {
    AboutPage,
    HomePage,
    Page404,
    ProductsPage,
    ServicePage,
    TermsAndConditionsPage
} from '../pages';
import { Urls } from '../core/urls'

function Body() {
    return (
        <React.Fragment>
            <Switch>
                <Route exact path={Urls.home} component={HomePage} />
                <Route path={Urls.products} component={ProductsPage} />
                <Route path={Urls.services} component={ServicePage} />
                <Route path={Urls.about} component={AboutPage} />
                <Route path={Urls.tc} component={TermsAndConditionsPage} />
                <Route path={Urls.noMatch} component={Page404} />
            </Switch>
        </React.Fragment>
    )
}

export default Body