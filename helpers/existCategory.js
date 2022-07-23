const { Category } = require('../models');
const { ErrorObject } = require('../helpers/error')

const existCategory = async(idCategory) => {
    try{
        const category = await Category.findByPk(idCategory);
        if(!category){
            return false;
        }
        return category;
    }catch(err){
        console.log(err);
    }
}

module.exports = existCategory;