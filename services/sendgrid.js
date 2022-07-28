const { sendgridKey, senderEmail } = require(`${__dirname}/../config/config`);
const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(sendgridKey);

const sendMail = async ({
  email, subject, text, html, sandboxMode = false,
}) => {
  const msg = {
    to: email,
    from: senderEmail,
    subject,
    text,
    html,
    mail_settings: {
      sandbox_mode: {
        enable: sandboxMode,
      },
    },
    templateId,
    dynamic_template_data: template,
  };

  try {
    await sgMail.send(msg);
  } catch (err) {
    if (err.response) {
      console.log(err.response.body);
    }
  }
};

module.exports = sendMail;
