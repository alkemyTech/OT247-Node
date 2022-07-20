const { sendgridKey, senderEmail } = require(__dirname + '/../config/config')
const { userController } = require(__dirname + '/../controllers/users');
const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(sendgridKey)

const sendMail = async ({ email, subject, sandboxMode = false }) => {
  try {
  	const user = await userController.findUserByEmail(email)
  	const msg = {
	    to: email,
	    from: senderEmail,
	    subject: subject,
	    mail_settings: {
	      sandbox_mode: {
	        enable: sandboxMode
	      }
	    },
	    templateId: 'd-9c3c32b4875941d68e2bdae96442c108',
	    dynamic_template_data: {
		    name: user.firstName,
		    city: user.lastName
		  }
	  }
    await sgMail.send(msg)

  } catch (err) {
    if (err.response) {
      console.log(err.response.body)
    }
  }
}

module.exports = sendMail