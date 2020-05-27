import React, { Suspense, useEffect } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import * as router from 'react-router-dom';
import * as jwt from 'jsonwebtoken';
import { Container } from 'reactstrap';
import {
  AppFooter,
  AppHeader,
  AppSidebar,
  AppSidebarFooter,
  AppSidebarForm,
  AppSidebarHeader,
  AppSidebarMinimizer,
  AppSidebarNav2 as AppSidebarNav,
} from '@coreui/react';

import navigation from '../../routes/menu';
import routes from '../../routes';
import oAuth from '../../providers/auth';
import state from '../../redux';

const MocoFooter = React.lazy(() => import('./MocoFooter'));
const MocoHeader = React.lazy(() => import('./MocoHeader'));
const PageNotFound = React.lazy(() => import('../../views/pages/NotFound'));

export default (props) => {
  const loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>
  const signOut = async (e) => {
    e.preventDefault()
    await oAuth.logout();
    props.history.push('/login')
  }
  const { history } = props;

  useEffect(() => {
    const logout = async () => {
      await oAuth.logout();
      history.push('/login')
    }
    const checkToken = async () => {
      const { auth = {} } = state.getState();
      const { attributes = {} } = auth;
      const { accessToken, refreshToken } = attributes;

      if (!accessToken) {
        await logout();
      } else {
        const decode = jwt.decode(accessToken);
        if (decode.exp * 1000 < Date.now()) {
          try {
            await oAuth.refreshToken(refreshToken);
          } catch (error) {
            console.log(error.message);
            await logout();
          }
        }
      }
    }

    const timeout = setTimeout(() => {
      checkToken();
    }, 5000);

    return () => {
      clearTimeout(timeout);
    }
  }, [history]);

  return (
    <div className="app">
      <AppHeader fixed>
        <Suspense fallback={loading()}>
          <MocoHeader onLogout={e => signOut(e)} />
        </Suspense>
      </AppHeader>
      <div className="app-body">
        <AppSidebar fixed display="lg">
          <AppSidebarHeader />
          <AppSidebarForm />
          <Suspense>
            <AppSidebarNav navConfig={navigation} {...props} router={router} />
          </Suspense>
          <AppSidebarFooter />
          <AppSidebarMinimizer />
        </AppSidebar>
        <main className="main">
          {/* <AppBreadcrumb appRoutes={routes} router={router} /> */}
          <Container fluid>
            <Suspense fallback={loading()}>
              <Switch>
                {routes.map((route, idx) => {
                  return route.component ? (
                    <Route
                      key={idx}
                      path={route.path}
                      exact={route.exact}
                      name={route.name}
                      render={props => (
                        <route.component {...props} />
                      )} />
                  ) : (null);
                })}
                <Redirect exact from="/" to="/home" />
                <Route render={() => <PageNotFound />} />
              </Switch>
            </Suspense>
          </Container>
        </main>
      </div>
      <AppFooter style={{ marginTop: 28 }}>
        <MocoFooter />
      </AppFooter>
    </div>
  );
}
