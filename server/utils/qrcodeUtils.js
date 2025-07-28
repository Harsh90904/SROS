// Utility functions for QR code generation and related tasks will be added here.


const QRCode = require('qrcode');
const fs = require('fs');
const path = require('path');

const QRCodeUtils = {
  generateQRCode: async (text, filePath) => {
    try {
      const qrCodeData = await QRCode.toDataURL(text);
      const base64Data = qrCodeData.replace(/^data:image\/png;base64,/, '');
      fs.writeFileSync(filePath, base64Data, 'base64');
      console.log(`QR code saved to ${filePath}`);
    } catch (error) {
      console.error('Error generating QR code:', error);
    }
  },

  generateQRCodeBuffer: async (text) => {
    try {
      const buffer = await QRCode.toBuffer(text);
      return buffer;
    } catch (error) {
      console.error('Error generating QR code buffer:', error);
      throw error;
    }
  },

  getQRCodeFilePath: (userId) => {
    const dir = path.join(__dirname, '../..', 'public', 'qrcodes');
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    return path.join(dir, `qrcode_${userId}.png`);
  },
};

module.exports = QRCodeUtils;
