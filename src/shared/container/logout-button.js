// @flow
import { connect } from 'react-redux'
import Button from 'grommet/components/Button'

import { logoutUser } from '../action/auth'

const mapStateToProps = () => ({
  label: 'Logout',
})

const mapDispatchToProps = dispatch => ({
  onClick: () => { dispatch(logoutUser()) },
})

export default connect(mapStateToProps, mapDispatchToProps)(Button)
