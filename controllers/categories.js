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
        } catch(err){
            res.status(500).json({ msg: err })
        }
    }
  },
  getCategoryAsAdmin: async (req, res) => {
    try {
      const { id } = req.params;

      //Try to get a category
      const gottenCategory = await categoryService.getCategoryAsAdmin(id);

      //Server responses
      !gottenCategory
        ? res.status(404).json({ status: 404, message: 'Category not found' })
        : res.status(200).json({ status: 200, message: 'Category found', data: gottenCategory });
    } catch (err) {
      res.status(400).json({ status: 400, error: 'An error has occurred' });
    }
  },
};
