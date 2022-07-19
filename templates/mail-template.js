const { UserController } = require('../controllers/user');

module.exports = const template_mail = async (msg) => {
	try {
		delete msg.html;
	  msg.templateId = 'd-9c3c32b4875941d68e2bdae96442c108';
		var user = await UserController.findUserByEmail(msg.to);
		msg.dynamic_template_data = {
	    name: user.firstName,
	    city: user.lastName,
	  };
	} catch (err) {
	  console.log('an error has occurred');
	}
};