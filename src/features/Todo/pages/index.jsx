import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import DetailPage from './DetailPage';
import ListPage from './ListPage';


TodoFeature.propTypes = {

};
function TodoFeature() {
    const match = useRouteMatch();

    return (
        <div>
            <Switch>
                <Route path={match.path} component={ListPage} exact />
                <Route path='{`${match.path}/:todoId`}' component={DetailPage} />
                {/* <Route component={NotFound} /> */}
            </Switch>
        </div>
    );
}

export default TodoFeature;