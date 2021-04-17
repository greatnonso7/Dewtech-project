import {init} from '@rematch/core';
import logger from 'redux-logger';

import * as models from '../models';
import {loadingPlugin} from '../plugins';

export default init({
  models,
  plugins: [loadingPlugin],
  redux: {
    middlewares: [logger],
  },
  devtoolOptions: {},
  rootReducers: {RESET_APP: () => undefined},
});
