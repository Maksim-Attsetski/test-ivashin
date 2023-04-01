import React, { FC, memo } from 'react';

import { pages } from 'pages';
import { Route, Routes } from 'react-router-dom';
import { routes } from './types';

const Navigation: FC = () => {
  return (
    <Routes>
      <Route path={routes.home} element={<pages.Home />} />
    </Routes>
  );
};

export default memo(Navigation);
