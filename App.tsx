import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import ScreenRedux from './src/screens/ScreenRedux';
import {Provider} from 'react-redux';
import configurestore from './src/redux/configureStore.dev';
import {PersistGate} from 'redux-persist/integration/react';
const {store, persistor} = configurestore();
type Props = {};

const App = (props: Props) => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <ScreenRedux />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({});
