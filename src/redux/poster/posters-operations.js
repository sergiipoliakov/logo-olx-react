import axios from 'axios';
import {
  fetchAllPostersError,
  fetchAllPostersRequest,
  fetchAllPostersSuccess,
} from './posters-actions';

axios.defaults.baseURL = 'https://callboard-backend.herokuapp.com/';

const fetchPosters = () => async dispatch => {
  dispatch(fetchAllPostersRequest());
  try {
    const { data } = await axios.get('/call');
    dispatch(fetchAllPostersSuccess(data.data.cards));
  } catch (error) {
    dispatch(fetchAllPostersError(error));
  }
};

export default { fetchPosters };
