import { Instance, types } from 'mobx-state-tree';
import { NullableString } from '../utils';

export const UserModel = types
  .model('User')
  .props({
    name: NullableString,
  })
  .actions(self => ({
    setName: (name: string) => {
      self.name = name;
    },
  }));

export const UserStoreInitialState = {
  id: '',
  name: '',
};

type UserStoreType = Instance<typeof UserModel>;
export interface User extends UserStoreType {}
