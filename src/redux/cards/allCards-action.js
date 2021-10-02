import { createAction } from '@reduxjs/toolkit';

export const fetchAllCardsRequest = createAction('cards/fetchAllCardsRequest');
export const fetchAllCardsSuccess = createAction('cards/fetchAllCardsSuccess');
export const fetchAllCardsError = createAction('cards/fetchAllCardsError');

export const setCardIdRequest = createAction('cards/setCardIdRequest');
export const setCardIdSuccess = createAction('cards/setCardIdSuccess');
export const setCardIdError = createAction('cards/setCardIdError');

export const searchProductRequest = createAction('cards/searchProductRequest');
export const searchProductSuccess = createAction('cards/searchProductdSuccess');
export const searchProductError = createAction('cards/searchProductError');

export const clearError = createAction('cards/clearError');
