import { FC, memo } from 'react';

import Navigation from 'navigation';

import './App.scss';

const App: FC = () => {
  return (
    <div>
      <Navigation />
    </div>
  );
};
export default memo(App);
