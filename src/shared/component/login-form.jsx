// @flow
import GrommetLoginForm from 'grommet/components/LoginForm'
import React from 'react'

type Props = {
  handleClick: Function,
}

const LoginForm = ({ handleClick }: Props) =>
  <GrommetLoginForm
    align="start"
    onSubmit={handleClick}
    usernameType="text"
  />

export default LoginForm
