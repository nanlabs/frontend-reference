// this hook is used to lazy load components
// reduce the bundle size and the initial load time as well
// in some cases, we can apply useCallback to prevent the component from re-rendering and losing its state

import React, { lazy, Suspense, useCallback } from 'react';

const CustomSelect = lazy(() => import('reactComponents/Select'));
const CustomButton = lazy(() => import('reactComponents/Button'));
const CustomCard = lazy(() => import('reactComponents/Card'));
const Header = lazy(() => import('reactComponents/Header'));

const useLazyComponent = () => {
  return {
    CustomSelect: useCallback(
      (props) => (
        <Suspense fallback={<div>Loading...</div>}>
          <CustomSelect {...props} />
        </Suspense>
      ),
      []
    ),
    CustomButton: useCallback(
      (props) => (
        <Suspense fallback={null}>
          <CustomButton {...props} />
        </Suspense>
      ),
      []
    ),
    CustomCard: (props) => (
      <Suspense fallback={<div>Loading...</div>}>
        <CustomCard {...props} />
      </Suspense>
    ),
    Header: () => (
      <Suspense fallback={null}>
        <Header />
      </Suspense>
    ),
  };
};

export default useLazyComponent;
