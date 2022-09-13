import AsyncStorage from '@react-native-community/async-storage';
import { getType } from 'deox';
import { Action, combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import { RootState } from 'types';
import { resetStore } from 'modules/app/actions';
import { AppReducer } from 'modules/app/reducer';

const rootPersistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['app'],
};

const projectReducer = combineReducers({
  app: AppReducer,
})

const rootReducer = (state: RootState | undefined, action: Action) => {
  if (action.type === getType(resetStore)) {
    state = undefined;
  }
  return projectReducer(state, action);
};

export default persistReducer(rootPersistConfig, rootReducer);
