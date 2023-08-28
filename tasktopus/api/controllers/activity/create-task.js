module.exports = {


    friendlyName: 'Create a task',
  
  
    description: 'Sign up for a new user account.',
  
  
    extendedDescription:
  `This creates a new user record in the database, signs in the requesting user agent
  by modifying its [session](https://sailsjs.com/documentation/concepts/sessions), and
  (if emailing with Mailgun is enabled) sends an account verification email.
  
  If a verification email is sent, the new user's account is put in an "unconfirmed" state
  until they confirm they are using a legitimate email address (by clicking the link in
  the account verification message.)`,
  
  
    inputs: {
  
      title: {
        required: true,
        type: 'string',
        description: 'The title for the task to be created',
      },
  
      type: {
        required: true,
        type: 'string',
        description: 'The unencrypted password to use for the new account.'
      },
  
      description:  {
        type: 'string',
        example: 'A berief description for the task to be created',
      },

      startDate: {
        type: 'string'
      }
  
    },
  
  
    exits: {
  
      success: {
        description: 'New task was created successfully.'
      },
  
    },
  
  
    fn: async function ({title, type, description, startDate}) {
  
      // Build up data for the new task record and save it to the database.
      await Task.create({
        title,
        type,
        description,
        startDate,
        // owner: id,
        owner: this.req.session.userId
      })

      let tasks = await Task.find().populate('owner')
    //   if(this.req.me == id){

    //   }
      this.req.res.json(tasks)
  
      // In case there was an existing session (e.g. if we allow users to go to the signup page
      // when they're already logged in), broadcast a message that we can display in other open tabs.
      if (sails.hooks.sockets) {
        await sails.helpers.broadcastSessionChange(this.req);
      }
  
    }
  
  };
  