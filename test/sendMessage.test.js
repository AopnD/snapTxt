const { sendWhatsAppMessage } = require('../src/sendMessage');

jest.mock('twilio', () => {
  return jest.fn().mockImplementation(() => ({
    messages: {
      create: jest.fn(() => Promise.resolve({ sid: 'mocked_sid' })),
    },
  }));
});

describe('sendWhatsAppMessage', () => {
  test('sends WhatsApp message', async () => {
    const result = await sendWhatsAppMessage('1234567890', 'Test message');
    expect(result).toBe(undefined);
  });
});
