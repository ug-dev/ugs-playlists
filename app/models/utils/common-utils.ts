import { types } from 'mobx-state-tree';

export const NullableString = types.maybeNull(types.string);
export const NullableNumber = types.maybeNull(types.number);
export const NullableBoolean = types.maybeNull(types.boolean);
