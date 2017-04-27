// @flow
import { connect } from 'react-redux'
import Button from 'grommet/components/Button'

import { navActivate } from '../action/sidebar-nav'

const mapStateToProps = () => ({
  label: 'Open',
})

const mapDispatchToProps = dispatch => ({
  onClick: () => { dispatch(navActivate(true)) },
})

export default connect(mapStateToProps, mapDispatchToProps)(Button)
