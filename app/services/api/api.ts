import { ApisauceInstance, create } from 'apisauce';
import { GeneralApiProblem } from './api.types';
import { ApiConfig, DEFAULT_API_CONFIG } from './api-config';
import { getGeneralApiProblem } from './api-problem';
import { capitalize } from 'lodash';
import { Slug } from './api-slug';
import Snackbar from 'react-native-snackbar';

export interface APIParameters {
  axiosConfig?: object;
  body?: object | null;
  queryParameters?: object;
  slug: Slug | string;
}

/**
 * Manages all requests to the API.
 */

const showErrorToast = (problem: GeneralApiProblem) => {
  // To hide location update throttling errors

  console.log(problem);
  // Uncomment when API is integrated

  Snackbar.show({
    duration: Snackbar.LENGTH_LONG,
    numberOfLines: 7,
    text: capitalize(problem?.errorMessage),
  });
};

export class Api {
  /**
   * The underlying apisauce instance which performs the requests.
   */
  apisauce: ApisauceInstance | undefined;

  /**
   * Configurable options.
   */
  config: ApiConfig;

  /**
   * Creates the api.
   *
   * @param config The configuration to use.
   */
  constructor(config: ApiConfig = DEFAULT_API_CONFIG) {
    this.config = config;
  }

  /**
   * Sets up the API.  This will be called during the bootup
   * sequence and will happen before the first React component
   * is mounted.
   *
   * Be as quick as possible in here.
   */
  setup() {
    // construct the apisauce instance
    this.apisauce = create({
      baseURL: this.config.url,
      timeout: this.config.timeout,
      headers: {
        Accept: 'application/json',
      },
    });
  }

  async get<T>({
    slug,
    axiosConfig = {},
    queryParameters,
  }: APIParameters): Promise<T | GeneralApiProblem | undefined> {
    return await this.apisauce
      ?.get(slug, queryParameters, axiosConfig)
      .then(response => {
        if (!response.ok) {
          const problem = getGeneralApiProblem(response);
          if (problem) {
            problem.kind !== 'cancelled' && showErrorToast(problem);
            return problem;
          }
        }
        try {
          return { kind: 'ok', ...(response.data as T) };
        } catch (e) {
          return { errorMessage: 'Error', kind: 'bad-data' };
        }
      });
  }

  async post<T>({
    slug,
    axiosConfig = {},
    body = null,
  }: APIParameters): Promise<T | GeneralApiProblem | undefined> {
    return await this.apisauce?.post(slug, body, axiosConfig).then(response => {
      if (!response.ok) {
        const problem = getGeneralApiProblem(response);
        if (problem) {
          showErrorToast(problem);
          return problem;
        }
      }
      try {
        return { kind: 'ok', ...(response.data as T) };
      } catch (e) {
        return { kind: 'bad-data' };
      }
    });
  }

  async put<T>({
    slug,
    axiosConfig = {},
    body = null,
  }: APIParameters): Promise<T | GeneralApiProblem | undefined> {
    return await this.apisauce?.put(slug, body, axiosConfig).then(response => {
      if (!response.ok) {
        const problem = getGeneralApiProblem(response);
        if (problem) {
          showErrorToast(problem);
          return problem;
        }
      }
      try {
        return { kind: 'ok', ...(response.data as T) };
      } catch (e) {
        return { kind: 'bad-data' };
      }
    });
  }

  async delete<T>({
    slug,
    axiosConfig = {},
    queryParameters,
  }: APIParameters): Promise<T | GeneralApiProblem | undefined> {
    return await this.apisauce
      ?.delete(slug, queryParameters, axiosConfig)
      .then(response => {
        if (!response.ok) {
          const problem = getGeneralApiProblem(response);
          if (problem) {
            showErrorToast(problem);
            return problem;
          }
        }
        try {
          return { kind: 'ok', ...(response.data as T) };
        } catch (e) {
          return { kind: 'bad-data' };
        }
      });
  }
}

const ApiInstance = new Api();
ApiInstance.setup();
export default ApiInstance;
