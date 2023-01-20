import { Instance, types } from 'mobx-state-tree';
import { UserModel, UserStoreInitialState } from '../user';
import { createContext, useContext } from 'react';

export const RootStoreModel = types
  .model({
    userStore: UserModel,
  })
  .actions(self => ({
    resetRootStore() {
      // clear();
    },
  }))
  .create({
    userStore: UserStoreInitialState,
  });

export function useStore() {
  const store = useContext(RootStoreContext);
  if (store === null) {
    throw new Error('Store cannot be null, please add a context provider');
  }
  return store;
}

const RootStoreContext = createContext<null | Instance<typeof RootStoreModel>>(
  null,
);
export const StoreProvider = RootStoreContext.Provider;
