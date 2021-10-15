import React from "react";
import { Route, Switch, Redirect } from "react-router";
import { TRoutes } from "../../../models";

type TProps = {
  routes: TRoutes[];
  NotFoundPage: any;
};

const RouterView: React.FC<TProps> = ({ routes, NotFoundPage }) => {
  const renderRoute = (routes: TRoutes[]) => {
    return routes.map((r) => {
      if (!r.children) {
        return <Route key={r.name} path={r.path} component={r.component} />;
      }

      return (
        <Route key={r.name} path={r.path}>
          <r.component>
            <Switch>
              {renderRoute(r.children)}
              <Redirect exact path={r.path} to={r.children[0].path} />
              <Route component={NotFoundPage} />
            </Switch>
          </r.component>
        </Route>
      );
    });
  };

  return (
    <Switch>
      {renderRoute(routes)}
      <Redirect exact path="/" to={routes[0].path} />
      <Route component={NotFoundPage} />
    </Switch>
  );
};

export default React.memo(RouterView);
