const config = require('./../../config/app');

module.exports = (res, func, params) => {
  return func(params)
    .then(payload => {
      let responseData = payload.data ? payload.data : payload;
      responseData = responseData.app && responseData.app.externalKey ? ({
        externalKey: responseData.app.externalKey,
        equipmentBundles: responseData.app.equipmentBundles,
        businesses: responseData.app.businesses
      }) : responseData;
      res.json({'status': 'success', data: responseData});
    })
    .catch(err => {
      let response = {'status': 'error'};

      let errorText = err && err.response && err.response.text ? err.response.text : err && err.message ? err.message : err ? JSON.stringify(err) : config.error.badRequest;

      response.message = {
        text: errorText,
        code: err && err.status ? err.status : config.status.serverError
      };

      res.status(err && err.status ? err.status : config.status.serverError).json(response);
    });
};
