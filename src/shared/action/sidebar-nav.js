// @flow
import 'isomorphic-fetch'

import { createAction } from 'redux-actions'

export const NAV_ACTIVATE = 'NAV_ACTIVATE'

export const navActivate = createAction(NAV_ACTIVATE)
