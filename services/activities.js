const { ErrorObject } = require('../helpers/error')
const { Activities } = require('../models')
const { existActivity }= require('../helpers/existActivity')


const destroyActivity = async (id) => {
  try{
  	const activity = await existActivity(id)
    if(!activity) throw new ErrorObject('Activity not found', 404)
    
    return await Activities.destroy({ where: { id } })
  }catch(error){
    throw new ErrorObject(error.message, error.statusCode || 500)
  }
}

module.exports = { destroyActivity }
