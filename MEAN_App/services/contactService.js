var ContactModel = require('../models/Contact');

module.exports = (function() {
    function createImpl(contactToSave, callback) {
        var dao = new ContactModel(contactToSave);
        dao.save(callback);
    }

    function updateImpl() {

    }

    function removeImpl() {
        
    }

    function findAllImpl(callback) {
        ContactModel.find({},callback);
    }

    function findByIdImpl(id, callback) {
        ContactModel.findById(id,callback);
    }
    return {
        create : createImpl,
        update : updateImpl,
        remove : removeImpl,
        findAll : findAllImpl,
        findById : findByIdImpl
    };
})();