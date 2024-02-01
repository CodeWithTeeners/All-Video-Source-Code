function generateQRCode() {
  const inputUrl = document.getElementById("inputUrl").value;
  if (!inputUrl) {
    alert("Please enter a URL.");
    return;
  }

  const qrcodeDiv = document.getElementById("generated");
  qrcodeDiv.innerHTML = "";

  const qrcode = new QRCode(qrcodeDiv, {
    text: inputUrl,
    width: 200,
    height: 200,
  });
}
