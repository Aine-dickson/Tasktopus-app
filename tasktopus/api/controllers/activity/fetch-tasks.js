module.exports = {


    friendlyName: 'fetchTasks',
  
  
    description: '',
  
  
    extendedDescription:
  ``,
  
    fn: async function () {
  
      var tasks = await Task.find();
        console.log(tasks)
      this.res.json(tasks)
    }
  
  };
  