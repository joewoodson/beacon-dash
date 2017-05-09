// @flow
import { connect } from 'react-redux'
import LoginForm from '../component/login-form'

import { loginUser } from '../action/auth'

const mapDispatchToProps = dispatch => ({
  onSubmit: (fields) => { dispatch(loginUser(fields.username, fields.password)) },
})

export default connect(null, mapDispatchToProps)(LoginForm)
