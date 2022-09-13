import React from 'react';

import { initialWindowMetrics, SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import AppContainer from './src/AppContainer';
// import store, { persistor } from './src/store';

const App = () => (
  // <Provider store={store}>
  //   <PersistGate loading={null} persistor={persistor}>
      <SafeAreaProvider initialMetrics={initialWindowMetrics}>
        <AppContainer />
      </SafeAreaProvider>
  //   </PersistGate>
  // </Provider>
);

export default App;