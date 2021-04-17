import createLoadingPlugin from '@rematch/loading';
import {getModelKeys} from '../../utils';
import {Product} from '../models';

export const loadingPlugin = createLoadingPlugin({
  whitelist: [...getModelKeys(Product)],
});
