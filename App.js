import type {Node} from 'react';
import React from 'react';
import {SafeAreaView, Text} from 'react-native';

const ANONYMOUS_USER = {
  anonymous: true,
  custom: {},
  key: 'anonymous',
};
(async () => {
  /**
   *
   */
  try {
    await client.isInitialized();
  } catch {
    await client.configure(
      {
        mobileKey: Config.LAUNCH_DARKLY,
        debugMode: Config.ENV === 'dev',
      },
      ANONYMOUS_USER,
    );
  }

  client.registerFeatureFlagListener('dummyFlag09Dec2021', cb);
  // at this point, callback is called once when LD flag is toggled
  client.unregisterFeatureFlagListener('dummyFlag09Dec2021', cb);
  // at this point, callback is not called when LD flag is toggled (so unregister has done something)
  client.registerFeatureFlagListener('dummyFlag09Dec2021', cb);
  // now there should only be one callback but there are two...
})();

const App: () => Node = () => {
  return (
    <SafeAreaView>
      <Text>Loaded</Text>
    </SafeAreaView>
  );
};

export default App;
