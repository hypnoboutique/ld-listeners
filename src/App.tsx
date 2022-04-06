import React from 'react';
import { Button, SafeAreaView, Text } from 'react-native';

import { LISTEN_FLAG, MOBILE_KEY } from '@env';
import LDClient from 'launchdarkly-react-native-client-sdk';

const client = new LDClient();

const ANONYMOUS_USER = {
  anonymous: true,
  custom: {},
  key: 'anonymous',
};

const init = async () => {
  /**
   *
   */
  try {
    await client.isInitialized();
  } catch {
    await client.configure(
      {
        mobileKey: MOBILE_KEY,
        debugMode: true,
      },
      ANONYMOUS_USER,
    );
  }
};

init();

const App: () => React.ReactNode = () => {
  const callback = () => console.log('callback');
  console.log();

  const addListener = () => {
    console.log('Adding listener');
    client.registerFeatureFlagListener(LISTEN_FLAG, callback);
  };

  const removeListener = () => {
    console.log('Removing listener');
    client.unregisterFeatureFlagListener(LISTEN_FLAG, callback);
  };

  const viewListeners = () => {
    /* eslint-disable-next-line @typescript-eslint/ban-ts-comment */
    // @ts-ignore flagListeners is not defined in type but inspection shows that is present
    console.log(client.flagListeners);
  };

  return (
    <SafeAreaView>
      <Text>Hello world</Text>
      <Button onPress={addListener} title="add listener" />
      <Button onPress={removeListener} title="remove listener" />
      <Button onPress={viewListeners} title="view listeners" />
    </SafeAreaView>
  );
};
export default App;
