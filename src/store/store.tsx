import { configureStore } from '@reduxjs/toolkit';
import authSlice from './authSlice';

import productSlice from './productSlice';
import cartSlice from './cartSlice';

// import orderReducer from './oderSlice';
// ...

export const store = configureStore({
  reducer: {
    posts: authSlice,
    products:productSlice,
    cart:cartSlice
    // order:orderReducer,
    
    // comments: commentsReducer,
    // users: usersReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),

})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch