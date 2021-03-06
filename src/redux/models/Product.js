import axios from 'axios';
import {reducerActions as reducers} from './reducers';
import Api from '../../services/apis/productApi';

const IState = {
  isError: false,
  products: [],
};

export const Product = {
  name: 'Product',
  state: IState,
  reducers,
  effects: (dispatch: {[key: string]: any}) => ({
    async getProducts(_, state) {
      dispatch.Product.setError(false);
      try {
        const data = await axios.get(Api.getAllProducts);
        if (data) {
          dispatch.Product.setState({
            products: data.data,
          });
        }
      } catch (error) {
        this.handleError(error);
      }
    },

    async addSingleTask({callback, data}, state) {
      dispatch.Task.setError(false);
      console.log(state, 'my state');
      try {
        console.log(typeof state.Task.tasks);
        const response = state.Task.tasks.push(data);
        if (response) {
          this.getTasks();
        }
      } catch (e) {
        this.handleError(e);
      }
    },

    async completeTask(id, state) {
      dispatch.Task.setError(false);
      try {
        const data = state.Task.tasks.findIndex(task => task.taskId === id);
        console.log(data);
        state.Task.tasks[data] = {...state.Task.tasks[data], isCompleted: '1'};
        dispatch.Task.setState(state.Task.tasks);
      } catch (error) {
        console.log(error);
        dispatch.Account.setError(true);
      }
    },

    async handleError(error) {
      dispatch.Task.setError(true);
      console.log(error);
    },
  }),
};
