const { Category } = require('../models');

const createHttpError = require('http-errors')
const { endpointResponse } = require('../helpers/success')
const { catchAsync } = require('../helpers/catchAsync')

const { updateCategoryById } = require('../services/category')
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
    updateCategoryById: catchAsync(async (req, res, next) => {
        try {
        const { id } = req.params;
        const integerId = parseInt(id, 10);
        const { body } = req;
        
          const category = await updateCategoryById(integerId, body)
          endpointResponse({
            res,
            message: 'Category updated successfully',
            body: category,
          }) 
        
          
        } catch (error) {
          const httpError = createHttpError(
            error.statusCode,
            `[Error updating category] - [Category - POST]: ${error.message}`,
          );
          next(httpError) 
        }
      }),
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
    }
}
