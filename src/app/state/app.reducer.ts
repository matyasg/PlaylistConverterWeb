import { createReducer, on } from '@ngrx/store';

import * as AppActions from './app.actions';

export interface State {
  uiInput29: {
      value: any;
  };
  uiCheckbox61: {
      value: any;
  };
  uiInput26: {
      value: any;
  };
  uiInput25: {
      value: any;
  };
  uiInput24: {
      value: any;
  };
  uiInput281: {
      value: any;
  };
  uiInput271: {
      value: any;
  };
  uiCheckbox9: {
      value: any;
  };
  uiCheckbox8: {
      value: any;
  };
  uiCheckbox7: {
      value: any;
  };
  uiCheckbox6: {
      value: any;
  };
  uiCheckbox5: {
      value: any;
  };
  uiCheckbox4: {
      value: any;
  };
  uiCheckbox3: {
      value: any;
  };
  uiCheckbox2: {
      value: any;
  };
  uiCheckbox1: {
      value: any;
  };
  uiCheckbox: {
      value: any;
  };
  uiInput: {
      value: any;
  };
  stateMessages: any;
}

const initialState: State = {
  uiInput29: {
      value: '',
  },
  uiCheckbox61: {
      value: false,
  },
  uiInput26: {
      value: '',
  },
  uiInput25: {
      value: '',
  },
  uiInput24: {
      value: '',
  },
  uiInput281: {
      value: '',
  },
  uiInput271: {
      value: '',
  },
  uiCheckbox9: {
      value: false,
  },
  uiCheckbox8: {
      value: false,
  },
  uiCheckbox7: {
      value: false,
  },
  uiCheckbox6: {
      value: false,
  },
  uiCheckbox5: {
      value: false,
  },
  uiCheckbox4: {
      value: false,
  },
  uiCheckbox3: {
      value: false,
  },
  uiCheckbox2: {
      value: false,
  },
  uiCheckbox1: {
      value: false,
  },
  uiCheckbox: {
      value: false,
  },
  uiInput: {
      value: '',
  },
  stateMessages: [],
};

export const reducer = createReducer(
  initialState,
  on(AppActions.updateUiInput29, (state: State, changes) => ({ ...state, uiInput29: { ...state.uiInput29, ...changes.param }})),
  on(AppActions.updateUiCheckbox61, (state: State, changes) => ({ ...state, uiCheckbox61: { ...state.uiCheckbox61, ...changes.param }})),
  on(AppActions.updateUiInput26, (state: State, changes) => ({ ...state, uiInput26: { ...state.uiInput26, ...changes.param }})),
  on(AppActions.updateUiInput25, (state: State, changes) => ({ ...state, uiInput25: { ...state.uiInput25, ...changes.param }})),
  on(AppActions.updateUiInput24, (state: State, changes) => ({ ...state, uiInput24: { ...state.uiInput24, ...changes.param }})),
  on(AppActions.updateUiInput281, (state: State, changes) => ({ ...state, uiInput281: { ...state.uiInput281, ...changes.param }})),
  on(AppActions.updateUiInput271, (state: State, changes) => ({ ...state, uiInput271: { ...state.uiInput271, ...changes.param }})),
  on(AppActions.updateUiCheckbox9, (state: State, changes) => ({ ...state, uiCheckbox9: { ...state.uiCheckbox9, ...changes.param }})),
  on(AppActions.updateUiCheckbox8, (state: State, changes) => ({ ...state, uiCheckbox8: { ...state.uiCheckbox8, ...changes.param }})),
  on(AppActions.updateUiCheckbox7, (state: State, changes) => ({ ...state, uiCheckbox7: { ...state.uiCheckbox7, ...changes.param }})),
  on(AppActions.updateUiCheckbox6, (state: State, changes) => ({ ...state, uiCheckbox6: { ...state.uiCheckbox6, ...changes.param }})),
  on(AppActions.updateUiCheckbox5, (state: State, changes) => ({ ...state, uiCheckbox5: { ...state.uiCheckbox5, ...changes.param }})),
  on(AppActions.updateUiCheckbox4, (state: State, changes) => ({ ...state, uiCheckbox4: { ...state.uiCheckbox4, ...changes.param }})),
  on(AppActions.updateUiCheckbox3, (state: State, changes) => ({ ...state, uiCheckbox3: { ...state.uiCheckbox3, ...changes.param }})),
  on(AppActions.updateUiCheckbox2, (state: State, changes) => ({ ...state, uiCheckbox2: { ...state.uiCheckbox2, ...changes.param }})),
  on(AppActions.updateUiCheckbox1, (state: State, changes) => ({ ...state, uiCheckbox1: { ...state.uiCheckbox1, ...changes.param }})),
  on(AppActions.updateUiCheckbox, (state: State, changes) => ({ ...state, uiCheckbox: { ...state.uiCheckbox, ...changes.param }})),
  on(AppActions.updateUiInput, (state: State, changes) => ({ ...state, uiInput: { ...state.uiInput, ...changes.param }})),
  on(AppActions.updateStateMessages, (state: State, { stateMessages }) => ({ ...state, stateMessages })),
);
