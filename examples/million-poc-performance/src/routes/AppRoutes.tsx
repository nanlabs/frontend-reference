import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Base001 from '@/pages/experiment001/Base001';
import Base from '@/pages/experiment003/Base';
import Tree from '@/pages/experiment004/Base';
import Million001 from '@/pages/experiment001/Million001';
import Million002A from '@/pages/experiment002/Million002-only-root-block';
import Million002B from '@/pages/experiment002/Million002-root-block-and-map-blocks';
import Million002C from '@/pages/experiment002/Million002-root-block-for-without-block';
import Million from '@/pages/experiment003/Million';
import TreeMillion from '@/pages/experiment004/Million';
import MillionPage from '@/pages/MillionPage';
import ReactPage from '@/pages/ReactPage';

const ROUTES = {
  react: '/react',
  million: '/million',
};

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<MillionPage />} />
    <Route path={ROUTES.react} element={<ReactPage />}>
      <Route path="1" element={<Base001 />} />
      <Route path="3" element={<Base />} />
      <Route path="4" element={<Tree />} />
    </Route>
    <Route path={ROUTES.million} element={<MillionPage />}>
      <Route path="1" element={<Million001 />} />
      <Route path="2/only-root-block" element={<Million002A />} />
      <Route path="2/root-block-and-map-blocks" element={<Million002B />} />
      <Route path="2/root-block-for-without-block" element={<Million002C />} />
      <Route path="3" element={<Million />} />
      <Route path="4" element={<TreeMillion />} />
    </Route>
  </Routes>
);

export default AppRoutes;
