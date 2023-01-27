// Use this import if you want to use "env.js" file
// const { API_URL } = require("../../config/env")
// Or just specify it directly like this:

import Config from 'react-native-config';

/**
 * The options used to configure the API.
 */

export interface ApiConfig {
  /**
   * The URL of the api.
   */
  url: string | undefined;

  /**
   * Milliseconds before we timeout the request.
   */
  timeout: number;
}

/**
 * The default configuration for the app.
 */
export const DEFAULT_API_CONFIG: ApiConfig = {
  url: Config.API_URL,
  timeout: 10000,
};
