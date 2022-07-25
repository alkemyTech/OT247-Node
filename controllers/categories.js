const { Category } = require('../models');
const { endpointResponse } = require('../helpers/success')

const categoryService = require('../services/category')

module.exports = {
    getCategories: async(req, res, next) => {
        try{
            const allCategories = await Category.findAll();
            res.status(200).json(allCategories);
        }catch(err){
            next(err)
        }
    },
    createCategory: async(req, res, next) => {
        try{
            const { name, description, image } = req.body
        
            const newCategory = { name, description, image }
            const createdCategory = await categoryService.createCategory(newCategory)

            endpointResponse({
                res,
                message: 'Category created successfully',
                body: createdCategory 
            })
        }catch(err){
            next(err)
        }
    },
    deleteCategoryById: async(req, res, next) => {
        try{
            const { id } = req.params

            await categoryService.deleteCategoryById(id)

            endpointResponse({
                res,
                message: 'Category deleted successfully'
            })
        }catch(err){
            next(err)
        }
    }
}
