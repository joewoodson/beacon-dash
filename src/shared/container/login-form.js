// @flow
import { connect } from 'react-redux'
import LoginForm from '../component/login-form'

import { loginUser } from '../action/auth'

const mapDispatchToProps = dispatch => ({
  handleClick: () => { dispatch(loginUser()) },
})

export default connect(null, mapDispatchToProps)(LoginForm)
