import { AppState } from "./types";
import { createReducer } from 'deox';
import produce from 'immer';

const initialState: AppState = {};

export const AppReducer = createReducer(initialState, (handle) => []);