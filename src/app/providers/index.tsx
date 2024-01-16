import { compose } from '@reduxjs/toolkit'

import { withRouter } from './router-provider';

export const withProviders = compose(withRouter);