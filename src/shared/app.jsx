// @flow

import GrommetApp from 'grommet/components/App'
import Helemt from 'react-helmet'
import React from 'react'
import { Route } from 'react-router-dom'
import Split from 'grommet/components/Split'
import { Switch } from 'react-router'

import { APP_NAME } from './config'
import HomePage from './component/page/home'
import HelloPage from './component/page/hello'
import HelloAsyncPage from './component/page/hello-async'
import NotFoundPage from './component/page/not-found'
import {
  HOME_PAGE_ROUTE,
  HELLO_PAGE_ROUTE,
  HELLO_ASYNC_PAGE_ROUTE,
} from './routes'
import SidebarNav from './container/sidebar-nav'

const App = () =>
  <div>
    <Helemt titleTemplate={`%s | ${APP_NAME}`} defaultTitle={APP_NAME} />
    <GrommetApp centered={false}>
      <Split flex="right">
        <SidebarNav />
        <Switch>
          <Route exact path={HOME_PAGE_ROUTE} render={() => <HomePage />} />
          <Route path={HELLO_PAGE_ROUTE} render={() => <HelloPage />} />
          <Route path={HELLO_ASYNC_PAGE_ROUTE} render={() => <HelloAsyncPage />} />
          <Route component={NotFoundPage} />
        </Switch>
      </Split>
    </GrommetApp>
  </div>

export default App
