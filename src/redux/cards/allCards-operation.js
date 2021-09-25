import {
  fetchAllCardsRequest,
  fetchAllCardsSuccess,
  fetchAllCardsError,
  setCardIdRequest,
  setCardIdSuccess,
  setCardIdError,
} from './allCards-action';

const setAllCardsToCardsState = cards => dispatch => {
  dispatch(fetchAllCardsRequest());

  try {
    dispatch(fetchAllCardsSuccess(cards));
  } catch (error) {
    dispatch(fetchAllCardsError(error));
  }
};

const cardId = id => dispatch => {
  dispatch(setCardIdRequest());

  try {
    dispatch(setCardIdSuccess(id));
  } catch (error) {
    dispatch(setCardIdError(error));
  }
};

export default {
  setAllCardsToCardsState,
  cardId,
};
