const {Category} = require('../models');

module.exports = {
    getCategoriesNames: async(req, res, next) => {
        try{
            const categoriesNames = await Category.findAll({
                attributes: ['name']
            });
            return res.status(200).json(categoriesNames);
        }catch(err){
            return res.status(400).send(err);
        }
    }
}
