import { ApiResponse } from 'apisauce';

import { translate } from '../../i18n';
import { GeneralApiProblem } from './api.types';

const getErrorMsg = (response: ApiResponse<any>) => {
  try {
    if (response?.data) {
      if (response?.data?.message) {
        // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
        return `${response?.data?.error} ${response?.data?.message}`;
      }
    }
  } catch (error) {}

  return 'Error';
};
export function getGeneralApiProblem(
  response: ApiResponse<any>,
): GeneralApiProblem | null {
  const originalErrorMessage = response.originalError?.message;
  const status = response.status;

  switch (response.problem) {
    case 'CONNECTION_ERROR':
      return {
        errorMessage: translate('errors.apiConnectionError'),
        kind: 'cannot-connect',
        originalErrorMessage,
        status,
        temporary: true,
      };
    case 'NETWORK_ERROR':
      return {
        errorMessage: translate('errors.apiNoNetworkError'),
        kind: 'cannot-connect',
        originalErrorMessage,
        status,
        temporary: true,
      };
    case 'TIMEOUT_ERROR':
      return {
        errorMessage: translate('errors.apiNetworkTimedOutError'),
        kind: 'timeout',
        originalErrorMessage,
        status,
        temporary: true,
      };
    case 'SERVER_ERROR':
      return {
        errorMessage: `${
          translate('errors.apiDefaultError') ?? ''
        } - Server Error`,
        kind: 'server',
        originalErrorMessage,
        status,
      };
    case 'UNKNOWN_ERROR':
      return {
        errorMessage: translate('errors.apiDefaultError'),
        kind: 'unknown',
        originalErrorMessage,
        status,
        temporary: true,
      };
    case 'CLIENT_ERROR':
      switch (response.status) {
        case 401:
          return {
            errorMessage: `${
              translate('errors.apiDefaultError') ?? ''
            } - Error 401`,
            kind: 'unauthorized',
            originalErrorMessage,
            status,
          };
        case 403:
          return {
            errorMessage: response?.data
              ? getErrorMsg(response)
              : response.problem,
            kind: 'forbidden',
            originalErrorMessage,
            status,
          };
        case 404:
          return {
            errorMessage: `${
              translate('errors.apiDefaultError') ?? ''
            } - Error 404`,
            kind: 'not-found',
            originalErrorMessage,
            status,
          };
        default:
          return {
            errorMessage: response?.data
              ? getErrorMsg(response)
              : response.problem,
            kind: 'rejected',
            originalErrorMessage,
            status,
          };
      }
    case 'CANCEL_ERROR':
      return { kind: 'cancelled' };
  }

  return null;
}
