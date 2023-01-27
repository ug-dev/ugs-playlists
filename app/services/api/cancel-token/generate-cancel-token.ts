import { CancelToken } from 'apisauce';
import { Canceler } from 'axios';

interface GenerateCancelTokenResponse {
  cancel: Canceler;
  token: any;
}

export const generateCancelToken = (): GenerateCancelTokenResponse => {
  const { source } = CancelToken;
  const { cancel, token } = source();
  return {
    cancel,
    token,
  };
};
