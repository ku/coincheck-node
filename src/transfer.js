var utils = require('./utils.js');

function Transfer(coinCheck) {
    this._coinCheck = coinCheck;
}

Transfer.prototype = {
    urlRoot: '/api/exchange/transfers',
    to_leverage: function(params) {
        var arr = utils.extend({
            data: {
                amount: null,
                currency: null
            }
        }, params);
        return this._coinCheck.request('post', this.urlRoot + '/to_leverage', arr);
    },
    from_leverage: function(params) {
        var arr = utils.extend({
            data: {
                amount: null,
                currency: null
            }
        }, params);
        return this._coinCheck.request('post', this.urlRoot + '/from_leverage', arr);
    }
};

exports.Transfer = Transfer;