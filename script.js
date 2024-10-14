function generateLink() {
  // Fetch user inputs
  const upiId = document.getElementById('upiId').value;
  const Merchantname  = document.getElementById('Merchantname').value;
  const mcc = document.getElementById('mcc').value;
  const orderid  = document.getElementById('orderid').value;
  const amount = document.getElementById('amount').value;
  const selectedApp = document.getElementById('app').value;
  
  // Basic UPI link format
  //const upiLink = `upi://pay?pa=${upiId}&am=${amount}&pn=YourName`;

  // hdfc upi help desk format
 const upiLink = `pa=${upiId}&pn=${Merchantname}&mc=${mcc}&tr=${orderid}&mode=04&am=${amount}&cu=INR`;

 // gpay://upi/pay?

  let appLink = '';

  // Modify UPI link based on selected app
  if (selectedApp === 'other apps') {
      appLink = `upi://pay?${upiLink}`;
  } else if (selectedApp === 'gpay') {
    appLink = `gpay://upi/pay?${upiLink}`;
    //  appLink = `upi://pay?${upiLink}`;
  } else if (selectedApp === 'amazonpay') {
      appLink = `amazonpay://upi/pay?${upiLink}`;
  }

  // Display generated link
  const result = document.getElementById('result');
  result.innerHTML = `<a href="${appLink}">Pay Now via ${selectedApp.charAt(0).toUpperCase() + selectedApp.slice(1)}</a>`;

  // Generate QR code
  generateQRCode(appLink);
}

function generateQRCode(upiLink) {
  // Clear existing QR code
  document.getElementById('qrcode').innerHTML = '';

  // Generate new QR code
  const qrcode = new QRCode(document.getElementById('qrcode'), {
      text: upiLink,
      width: 128,
      height: 128
  });
}
