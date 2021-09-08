import { createContext } from 'react';

const ShowModal = createContext();
ShowModal.displayName = 'ShowModal';

export const ShowModalProvaider = ShowModal.Provider;
export const ShowModalConsumer = ShowModal.Consumer;
