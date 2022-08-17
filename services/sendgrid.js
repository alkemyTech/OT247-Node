const { sendgridKey, senderEmail } = require(`${__dirname}/../config/config`);
const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(sendgridKey);

const sendMail = async ({
  email, subject, title, text, templateId, sandboxMode = false,
}) => {
  const msg = {
    to: email,
    from: senderEmail,
    mail_settings: {
      sandbox_mode: {
        enable: sandboxMode,
      },
    },
    templateId,
    dynamic_template_data: {
      subject,
      title,
      text,
    },
  };

  try {
    await sgMail.send(msg);
  } catch (err) {
    if (err.response) {
      // eslint-disable-next-line
      console.log(err.response.body);
    }
  }
};

module.exports = sendMail;
