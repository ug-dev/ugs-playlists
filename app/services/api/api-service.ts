import { generateCancelToken } from './cancel-token/generate-cancel-token';

const baseApi = {
  generateCancelToken,
  /* Add Your Api Config */
};

export type BaseApi = typeof baseApi;
export { baseApi };
