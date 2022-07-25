const { Category } = require('../models');
const { ErrorObject } = require('../helpers/error')
const existCategory = require('../helpers/existCategory');

const updateCategoryById = async(id, body) =>{
    try{
        const category = await existCategory(id)
        const { name, description, image } = body;

        if(!category){
            throw new ErrorObject('Category not found', 404)
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
        throw new ErrorObject(500, err.message)
    }
};


const createCategory = async (newCategory) => {
  try {
    return createdCategory = await Category.create(newCategory)
  } catch (err) {
    throw err
  }
};

module.exports = {
    updateCategoryById,
    createCategory
}


