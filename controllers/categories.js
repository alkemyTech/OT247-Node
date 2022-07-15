const {Category} = require('../models');

module.exports = {
    getCategories: async(req, res, next) => {
        try{
            const allCategories = await Category.findAll();
            res.status(200).json(allCategories);
        }catch(err){
            next(err)
        }
    }
}
