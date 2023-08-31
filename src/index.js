const { readExcel } = require('./excelUtils');
const { sendWhatsAppMessage } = require('./sendMessage');
require('dotenv').config();


const fileName = process.env.EXCEL_FILE_NAME

(async () => {
  const contacts = readExcel(fileName);
  for (const contact of contacts) {
    await sendWhatsAppMessage(contact);
  }
})();