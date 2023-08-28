/**
 * Task.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    //  ╔═╗╦═╗╦╔╦╗╦╔╦╗╦╦  ╦╔═╗╔═╗
    //  ╠═╝╠╦╝║║║║║ ║ ║╚╗╔╝║╣ ╚═╗
    //  ╩  ╩╚═╩╩ ╩╩ ╩ ╩ ╚╝ ╚═╝╚═╝
    title:{
      type: 'string',
      description: 'A title to a created task for easy identification',
      required: true,
      example: 'Am a title'
    },
    description: {
      type: 'string',
      description: 'A body to the task, explaining what the task is all about',
      required: true,
      example: 'Having the task complete for better service delivery'
    },
    startDate: {
      type: 'string',
      description: 'The date when the task is to be commenced'
    },
    dueDate: {
      type: 'string',
      description: 'The date when the task is supposed to be complete'
    },
    priority: {
      type: 'string',
      description: 'The level of necessity a task is over the others',
      isIn: ['low', 'medium', 'high', 'extraHigh'],
      defaultsTo: 'low'
    },
    status:{
      type: 'string',
      description: 'The state of progress the taask lies',
      isIn: ['pending', 'inProgress', 'completed'],
      defaultsTo: 'pending'
    },


    //  ╔═╗╔╦╗╔╗ ╔═╗╔╦╗╔═╗
    //  ║╣ ║║║╠╩╗║╣  ║║╚═╗
    //  ╚═╝╩ ╩╚═╝╚═╝═╩╝╚═╝


    //  ╔═╗╔═╗╔═╗╔═╗╔═╗╦╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
    //  ╠═╣╚═╗╚═╗║ ║║  ║╠═╣ ║ ║║ ║║║║╚═╗
    //  ╩ ╩╚═╝╚═╝╚═╝╚═╝╩╩ ╩ ╩ ╩╚═╝╝╚╝╚═╝
    collaborator: {
      collection: 'user',
      via: 'collaboration',
      through: 'TaskCollaboration',
    },
    owner:{
      model: 'user'
    }

  },

};

