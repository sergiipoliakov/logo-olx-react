import { createAction } from '@reduxjs/toolkit';

export const fetchUserCardsRequest = createAction(
  'cards/fetchUserCardsRequest',
);
export const fetchUserCardsSuccess = createAction(
  'cards/fetchUserCardsSuccess',
);
export const fetchUserCardsError = createAction('cards/fetchUserCardsError');

export const fetchUserFavouritCardsRequest = createAction(
  'cards/fetchUserFavouritCardsRequest',
);
export const fetchUserFavouritCardsSuccess = createAction(
  'cards/fetchUserFavouritCardsSuccess',
);
export const fetchUserFavouritCardsError = createAction(
  'cards/fetchUserFavouritCardsError',
);

export const addCardRequest = createAction('cards/addCardRequest');
export const addCardSuccess = createAction('cards/addCardSuccess');
export const addCardError = createAction('cards/addCardError');

export const addCardToFavouritRequest = createAction(
  'cards/addCardToFavouritRequest',
);
export const addCardToFavouritSuccess = createAction(
  'cards/addCardToFavouritSuccess',
);
export const addCardToFavouritError = createAction(
  'cards/addCardToFavouritError',
);

export const deleteFavouritRequest = createAction(
  'cards/deleteFavouritRequest',
);
export const deleteFavouritSuccess = createAction(
  'cards/deleteFavouritSuccess',
);
export const deleteFavouritError = createAction('cards/deleteFavouritError');

// export const editCardRequest = createAction('cards/editCardRequest');
// export const editCardSuccess = createAction('cards/editCardSuccess');
// export const editCardError = createAction('cards/editCardError');

export const deleteCardRequest = createAction('cards/deleteCardRequest');
export const deleteCardSuccess = createAction('cards/deleteCardSuccess');
export const deleteCardError = createAction('cards/deleteCardError');

// export const toggleCompletedRequest = createAction(
//   'posters/toggleCompletedRequest',
// );
// export const toggleCompletedSuccess = createAction(
//   'posters/toggleCompletedSuccess',
// );
// export const toggleCompletedError = createAction(
//   'posters/toggleCompletedError',
// );

export const clearError = createAction('cards/clearError');
