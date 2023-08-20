/**********************************************************************
 *
 *   Component hook generated by Quest
 *
 *   Code Logic for the component goes in this hook
 *   To setup bindings that use the data here or call the functions here, use the Quest editor
 *   Do not change the name of the hook
 *
 *   For help and further details refer to: https://www.quest.ai/docs
 *
 *
 **********************************************************************/

import React from 'react';
import useAuthentication1ResponsiveSize from './useAuthentication1ResponsiveSize';

/* These are the possible values for the current variant. Use this to change the currentVariant dynamically.
Please don't modify */
const variantOptions = {
  ScreenDesktop: 'ScreenDesktop',
  ScreenMobile: 'ScreenMobile',
};

const useAuthentication1 = () => {
  const [currentVariant, setCurrentVariant] = React.useState(
    variantOptions['ScreenDesktop']
  );

  const breakpointsVariant = useAuthentication1ResponsiveSize();

  React.useEffect(() => {
    if (breakpointsVariant !== currentVariant) {
      setCurrentVariant(breakpointsVariant);
    }
  }, [breakpointsVariant]);

  const data = { currentVariant };

  const fns = { setCurrentVariant };

  return { data, fns };
};

export default useAuthentication1;
