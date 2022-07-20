const { sendgridKey, senderEmail } = require(__dirname + '/../config/config')
const { mailWelcomeTemplate } = require(__dirname + '/../mail-templates/mail-welcome-template');
const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(sendgridKey)

const sendMail = async ({ template, templateId, user, email, subject, sandboxMode = false }) => {
	const msg = {
    to: email,
    from: senderEmail,
    subject: subject,
    mail_settings: {
      sandbox_mode: {
        enable: sandboxMode
      }
    },
    templateId: templateId,
    dynamic_template_data: template
  }
  try {
    await sgMail.send(msg)

  } catch (err) {
    if (err.response) {
      console.log(err.response.body)
    }
  }
}

module.exports = sendMail
