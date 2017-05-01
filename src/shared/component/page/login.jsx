import React from 'react'
import Helmet from 'react-helmet'

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
  </div>

export default LoginPage
