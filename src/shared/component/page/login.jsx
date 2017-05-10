import Helmet from 'react-helmet'
import React from 'react'

import LoginForm from '../../container/login-form'

const title = 'Login Page'

const LoginPage = () =>
  <div>
    <Helmet
      title={title}
      meta={[
        { name: 'description', content: 'Login' },
        { property: 'og:title', content: title },
      ]}
    />
    <h1>{title}</h1>
    <LoginForm />
  </div>

export default LoginPage
