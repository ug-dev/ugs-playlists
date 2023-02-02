import { Instance, flow, toGenerator, types } from 'mobx-state-tree';
import { NullableString } from '../utils';
import { withStatus } from '../extensions';
import { baseApi } from '../../services';

export const UserModel = types
  .model('User')
  .props({
    name: NullableString,
  })
  .extend(withStatus)
  .actions(self => ({
    setName: (name: string) => {
      self.name = name;
    },
    getName: flow(function* () {
      self.setStatus('pending');
      try {
        const result = yield* toGenerator(baseApi.getName());

        // TODO: need to work on response from the api.
        console.log('🚀 ~ file: index.ts:23 ~ getName:flow ~ result', result);
        if (result.kind === 'ok') {
          // console.log('🚀 ~ file: index.ts:23 ~ getName:flow ~ result', result);
        }
        self.setStatus('done');
      } catch (e) {
        console.log('🚀 ~ file: index.ts:28 ~ getName:flow ~ e', e);
        self.status = 'error';
      }
    }),
  }));

export const UserStoreInitialState = {
  id: '',
  name: '',
};

type UserStoreType = Instance<typeof UserModel>;
export interface User extends UserStoreType {}
