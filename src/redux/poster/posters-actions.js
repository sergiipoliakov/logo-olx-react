import { createAction } from '@reduxjs/toolkit';
console.log(createAction);

export const fetchAllPostersRequest = createAction(
  'posters/fetchAllPostersRequest',
);
export const fetchAllPostersSuccess = createAction(
  'posters/fetchAllPostersSuccess',
);
export const fetchAllPostersError = createAction(
  'posters/fetchAllPostersError',
);

// export const addPosterRequest = createAction('posters/addPosterRequest');
// export const addPosterSuccess = createAction('postePs/addPosteSuccess');
// export const addPosterError = createAction('posters/addPosterError');

// export const editPosterRequest = createAction('posters/editPosterRequest');
// export const editPosterSuccess = createAction('posters/editPosterSuccess');
// export const editPosterError = createAction('posters/editPosterError');

// export const deletePosterRequest = createAction('posters/deletePosterRequest');
// export const deletePosterSuccess = createAction('posters/deletePosterSuccess');
// export const deletePosterError = createAction('posters/deletePosterError');

// export const toggleCompletedRequest = createAction(
//   'posters/toggleCompletedRequest',
// );
// export const toggleCompletedSuccess = createAction(
//   'posters/toggleCompletedSuccess',
// );
// export const toggleCompletedError = createAction(
//   'posters/toggleCompletedError',
// );

export const clearError = createAction('posters/clearError');
