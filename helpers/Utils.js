const axios = require("axios");

  /**
   * apiCall - wrapper for axios
   *
   * @param  {object}   config  Object required to make a successful axios request
   *
   * @Output - Error or fetched value
   *
   */
class Utils {
    static apiCall(config) {
        try {
          return axios(config);
        }
        catch (error) {
          logger.error(error);
          return {"error": error, "success": false};
        }
      }
}
module.exports = Utils;