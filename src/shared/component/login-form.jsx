// @flow
import GrommetLoginForm from 'grommet/components/LoginForm'
import React from 'react'

type Props = {
  onSubmit: Function,
}

const LoginForm = ({ onSubmit }: Props) =>
  <GrommetLoginForm
    align="start"
    onSubmit={onSubmit}
    usernameType="text"
  />

export default LoginForm
