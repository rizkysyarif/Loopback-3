'use strict';

module.exports = function(Product) {
    Product.getAll = function(cb) {
        Product.find({include: 'category'}, function (err, instance) {
            var response = instance;
            cb(null, response);
        });
    };
    Product.remoteMethod (
        'getAll',
        {
          http: {path: '/getall', verb: 'get'},
          returns: {arg: 'Product', type: 'any'}
        }
    );
};
