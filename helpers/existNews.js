const { News } = require('../models');

const existNews = async(req, res, next) => {
  try{
    const { id } = req.params;
    const news = await News.findOne( { where: { id } } );
 
    if (!news) return res.status(404).json({ msg: 'This news does not exist' });

    next();
  }catch(err){
    console.log(err);
  }
}

module.exports = { existNews };  
