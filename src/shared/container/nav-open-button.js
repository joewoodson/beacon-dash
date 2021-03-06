// @flow
import { connect } from 'react-redux'
import Button from 'grommet/components/Button'

import { navActivate } from '../action/sidebar-nav'

const mapStateToProps = state => ({
  active: state.nav.get('active'),
})

const mapDispatchToProps = dispatch => ({
  onClick: () => { dispatch(navActivate(true)) },
})

function mergeProps(stateProps, dispatchProps, ownProps) {
  const { active } = stateProps

  const className = active ? 'hide' : ''
  const onClick = active ? null : () => { dispatchProps.onClick(true) }

  return Object.assign({}, ownProps, {
    className,
    onClick,
  })
}

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(Button)
