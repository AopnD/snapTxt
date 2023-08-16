const twilio = require('twilio');
const dotenv = require('dotenv');

dotenv.config();

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const twilioPhoneNumber = process.env.TWILIO_PHONE_NUMBER;

const client = twilio(accountSid, authToken);

async function sendWhatsAppMessage(contact) {
    try {
      const result = await client.messages.create({
        body: contact.message,
        from: `whatsapp:${twilioPhoneNumber}`,
        to: `whatsapp:${contact.phoneNumber}`,
      });
      console.log(`Message sent to ${contact.name}:`, result.sid);
    } catch (error) {
      console.error('Error sending message:', error);
    }
  }
  
  module.exports = { sendWhatsAppMessage };
