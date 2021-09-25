import { createAction } from '@reduxjs/toolkit';

export const fetchAllCardsRequest = createAction('cards/fetchAllCardsRequest');
export const fetchAllCardsSuccess = createAction('cards/fetchAllCardsSuccess');
export const fetchAllCardsError = createAction('cards/fetchAllCardsError');

export const setCardIdRequest = createAction('cards/setCardIdRequest');
export const setCardIdSuccess = createAction('cards/setCardIdSuccess');
export const setCardIdError = createAction('cards/setCardIdError');
