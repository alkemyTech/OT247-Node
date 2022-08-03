const slidesService = require("../services/slides");
const { endpointResponse } = require("../helpers/success");
const { ErrorObject } = require("../helpers/error");
const createHttpError = require("http-errors");

module.exports = {
    deleteSlideById: async (req, res) => {
        try {
            const { id } = req.params;

            await slidesService.deleteSlideById(id);

            return endpointResponse({
                res,
                message: "Slide deleted successfully",
            });
        } catch (err) {
            const error = new ErrorObject(
                err.message,
                err.statusCode || 400,
                err.errors || err.stack
            );
            res.json(error);
        }
    },

    getSlideById: async (req, res, next) => {
        try {
            const { id } = req.params;
            const slide = await slidesService.getSlideById(id);

            endpointResponse({
                res,
                message: "Slides found successfully",
                body: slide,
            });
        } catch (error) {
            const httpError = createHttpError(
                error.statusCode,
                `[Error finding slide] - [Slide - GET]: ${error.message}`
            );
            next(httpError);
        }
    },
};
