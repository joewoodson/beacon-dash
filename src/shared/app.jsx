// @flow

import { connect } from 'react-redux'
import GrommetApp from 'grommet/components/App'
import Header from 'grommet/components/Header'
import Helemt from 'react-helmet'
import Menu from 'grommet/components/icons/base/Menu'
import React from 'react'
import { Route } from 'react-router-dom'
import Split from 'grommet/components/Split'
import { Redirect, Switch } from 'react-router'

import { APP_NAME } from './config'
import HomePage from './component/page/home'
import HelloPage from './component/page/hello'
import HelloAsyncPage from './component/page/hello-async'
import LoginPage from './component/page/login'
import NavOpenButton from './container/nav-open-button'
import NotFoundPage from './component/page/not-found'
import {
  HOME_PAGE_ROUTE,
  HELLO_PAGE_ROUTE,
  HELLO_ASYNC_PAGE_ROUTE,
  LOGIN_PAGE_ROUTE,
} from './routes'
import SidebarNav from './container/sidebar-nav'

type Props = {
  isAuth: boolean,
}

const mapStateToProps = state => ({
  isAuth: state.app.get('isAuth'),
})

const App = ({ isAuth }: Props) => {
  const AuthRoute = (
    <Split flex="right">
      <SidebarNav />
      <Header
        pad={{ horizontal: 'small' }}
      >
        <NavOpenButton icon={<Menu />} />
      </Header>
      <Switch>
        <Redirect exact from="/" to={HOME_PAGE_ROUTE} />
        <Route exact path={HOME_PAGE_ROUTE} render={() => <HomePage />} />
        <Route exact path={LOGIN_PAGE_ROUTE} render={() => <LoginPage />} />
        <Route path={HELLO_PAGE_ROUTE} render={() => <HelloPage />} />
        <Route path={HELLO_ASYNC_PAGE_ROUTE} render={() => <HelloAsyncPage />} />
        <Route component={NotFoundPage} />
      </Switch>
    </Split>
  )

  const UnauthRoute = (
    <Route render={() => <LoginPage />} />
  )

  return (
    <div>
      <Helemt titleTemplate={`%s | ${APP_NAME}`} defaultTitle={APP_NAME} />
      <GrommetApp centered={false}>
        {isAuth ? AuthRoute : UnauthRoute}
      </GrommetApp>
    </div>
  )
}

export default connect(mapStateToProps)(App)
