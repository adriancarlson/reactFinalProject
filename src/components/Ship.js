import React from 'react'
import {Switch, Route, Redirect, useRouteMatch, useParams} from 'react-router-dom';


const Ship = ( getShipById) => {
    const match = useRouteMatch();
    const {shipId} = useParams();

    const ship = getShipById(parseInt(shipId));


    return (
        <div className="container mt-3">
            {(!ship) ? <Redirect to="/notfound" /> :
            <Switch>
                <Route path={`${match.path}/edit`}>
                    Note Form 
                </Route>
                <Route path={`${match.path}`}>
                    Note 
                </Route>
            </Switch>

            }
            
        </div>
    )
}

export default Ship
