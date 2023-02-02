import { generateCancelToken } from './cancel-token/generate-cancel-token';
import { getName } from './get-name';

const baseApi = {
  generateCancelToken,
  /* Add Your Api Config */
  getName,
};

export type BaseApi = typeof baseApi;
export { baseApi };
