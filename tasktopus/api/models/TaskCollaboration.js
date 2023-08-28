/**
 * Collaboration.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    collaboration:{
      model: 'task'
    },
    collaborator:{
      model: 'user'
    },
    permissions: {
      type: 'string',
      isIn: ['owner', 'previlaged', 'member'],
      defaultsTo: 'previlaged'
    }

  },

};

