const getLoading = state => state.posters.loading;
const getPosters = state => state.posters.posters;
const getError = state => state.posters.error;

export default {
  getLoading,
  getPosters,
  getError,
};
