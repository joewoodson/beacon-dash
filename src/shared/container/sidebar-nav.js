// @flow
import { connect } from 'react-redux'

import { navActivate } from '../action/sidebar-nav'
import Sidebar from '../component/sidebar'

const mapStateToProps = state => ({
  label: 'Close',
  active: state.nav.get('active'),
})

const mapDispatchToProps = dispatch => ({
  handleClick: () => { dispatch(navActivate(false)) },
})

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar)
