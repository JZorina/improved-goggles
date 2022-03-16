import {
    configureStore,
    Action,
    ThunkAction,
  } from '@reduxjs/toolkit';
  import rootReducer from './RootReducer';
  

  
  const store = configureStore({
    reducer: rootReducer,
  });
  
  export default store;
  
  export type RootState = ReturnType<typeof rootReducer>;
  export type AppDispatch = typeof store.dispatch;
  export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
  >;
  