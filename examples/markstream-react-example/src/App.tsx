import React, { Suspense } from 'react';

import '@/theme';

import { composeAppProviders } from '@/app-providers';
import Loading from '@/components/Loading';
import Landing from '@/pages/Landing';

const App = () =>
  composeAppProviders(
    <Suspense fallback={<Loading />}>
      <Landing />
    </Suspense>,
  );

export default App;
