import config from './../config/default';

const utils = {
  ajax(params, data = null) {
    const arrParams = params.split(':');
    if (arrParams.length !== 2) {
      return Promise.reject(new Error('Unaccepted parameter'));
    }

    const method = arrParams[0];
    const targetUrl = config.host + arrParams[1];
    const fetchOpt = {
      method: method,
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
    };

    if (data) {
      fetchOpt.body = JSON.stringify(data);
    }

    return new Promise((resolve, reject) => {
      fetch(targetUrl, fetchOpt)
        .then(resolve)
        .catch(reject);
    });
  }
};

export default utils;
