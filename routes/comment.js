const router = require('express').Router();

const controller = require('../controllers/comments');
const { isAdmin } = require('../middlewares/isAdmin');

const { schemaValidator } = require('../middlewares/validator');
const { comment } = require('../schemas/comment');
const { existComment } = require('../helpers/existComment');

router
  .use(isAdmin)
  .get('/', controller.getCommentsControllers)
  .delete('/:id', controller.deleteCommentById)
  .put('/:id', existComment, schemaValidator(comment), controller.updateCommentById);

module.exports = router;
