import { bindActionCreators } from 'redux';

import { useTypedDispatch } from './redux';
import { noteActions } from 'widgets/Note';

const useActions = () => {
  const dispatch = useTypedDispatch();

  const allActions = {
    ...noteActions,
  };

  const action = bindActionCreators(allActions, dispatch);

  return { action };
};

export default useActions;
