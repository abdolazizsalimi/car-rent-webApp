import { configureStore, ThunkAction, Action, AnyAction } from '@reduxjs/toolkit';
import homePageReducer from "./containers/HomePage/slice";
import reduxLogger from 'redux-logger';
export const store = configureStore({
  middleware : (getDefaulteMiddlewar) => getDefaulteMiddlewar().concat(reduxLogger),
  reducer: {
    homePage: homePageReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
function homePageSlice(state: unknown, action: AnyAction): unknown {
  throw new Error('Function not implemented.');
}

