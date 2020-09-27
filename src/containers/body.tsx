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
import { URLS } from '../core/db/urls'

function Body() {
    return (
        <React.Fragment>
            <Switch>
                <Route exact path={URLS.home.path} component={HomePage} />
                <Route path={URLS.products.path} component={ProductsPage} />
                <Route path={URLS.services.path} component={ServicePage} />
                <Route path={URLS.about.path} component={AboutPage} />
                <Route path={URLS.terms.path} component={TermsAndConditionsPage} />
                <Route path={URLS.noMatch.path} component={Page404} />
            </Switch>
        </React.Fragment>
    )
}

export default Body