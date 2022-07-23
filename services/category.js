const { Category } = require('../models');
const { ErrorObject } = require('../helpers/error')

const updateCategoryById = async(id, body) =>{
    try{
        const category = await Category.findByPk(id);
        const { name, description, image } = body;

        if(!category){
            throw new ErrorObject(404, 'Category not found')
        };

        const updatedCategory = await Category.update({
            name,
            description,
            image
        },{
            where: {
                id: id
            }
        });
        return updatedCategory;

    }catch(err){
        throw new ErrorObject(500, 'Error updating category')
    }
};

module.exports = {
    updateCategoryById
}