import React from 'react'
import { useLocation } from 'react-router-dom'

function Page404() {
    let location = useLocation()
    return (
        <React.Fragment>
            <div>
                Not Found 404
                Invalid Link <code>{location.pathname}</code>
            </div>
        </React.Fragment>
    )
}

export default Page404
