const { Category } = require('../models');
const { endpointResponse } = require('../helpers/success')

const categoryService = require('../services/category')

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
        } catch(err){
            res.status(500).json({ msg: err })
        }
    }
}
