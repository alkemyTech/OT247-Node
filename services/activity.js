const { Activities } = require('../models')

const insertActivity = async (body) => {
    try{   	
      const activities = await Activities.create(body)
      return activities
    }catch(err){
        return { error: err };
    };
};

module.exports = { insertActivity };