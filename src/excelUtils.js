const XLSX = require('xlsx');

function readExcel(filePath) {
  const workbook = XLSX.readFile(filePath);
  const sheetName = workbook.SheetNames[0];
  const sheet = workbook.Sheets[sheetName];
  const data = XLSX.utils.sheet_to_json(sheet, { header: 1 });

  const headers = data[0];
  const nameColumnIndex = headers.indexOf('Name');
  const phoneNumberColumnIndex = headers.indexOf('Phone Number');

  const mappedData = [];
  for (let i = 1; i < data.length; i++) {
    const row = data[i];
    mappedData.push({
      name: row[nameColumnIndex],
      phoneNumber: row[phoneNumberColumnIndex],
      message: 'You are welcome to our wedding!',
    });
  }

  return mappedData;
}

module.exports = { readExcel };
