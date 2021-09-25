import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';

import {
  // fetchAllCardsRequest,
  fetchAllCardsSuccess,
  // fetchAllCardsError,
  // setCardIdRequest,
  setCardIdSuccess,
  // setCardIdError,
} from './allCards-action';

const cardId = createReducer('', {
  [setCardIdSuccess]: (_, { payload }) => payload,
});

const AllCards = createReducer([], {
  [fetchAllCardsSuccess]: (_, { payload }) => payload,
});

export default combineReducers({
  AllCards,
  cardId,
});
