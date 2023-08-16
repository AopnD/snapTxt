const { readExcel } = require('../src/excelUtils');

describe('readExcel', () => {
  test('reads Excel file and returns data', async () => {
    const data = await readExcel('contacts.xlsx');
    expect(data).toEqual([
      { name: 'John Doe', phoneNumber: 1234567890, message: 'You are welcome to our wedding!' },
      { name: 'Jane Smith', phoneNumber: 9876543210, message: 'You are welcome to our wedding!' },
    ]);
  });
});
