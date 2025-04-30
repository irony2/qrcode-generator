let qr;

function generateQRCode() {
  const inputText = document.getElementById("text").value.trim();
  const qrDiv = document.getElementById("qrcode");
  qrDiv.innerHTML = "";

  if (!inputText) {
    alert("텍스트를 입력해주세요.");
    return;
  }

  qr = new QRCode(qrDiv, {
    text: inputText,
    width: 200,
    height: 200,
  });
}

function downloadQRCode() {
  const qrDiv = document.getElementById("qrcode");
  const img = qrDiv.querySelector("img");
  if (img) {
    const link = document.createElement("a");
    link.href = img.src;
    link.download = "qrcode.png";
    link.click();
    return;
  }

  const canvas = qrDiv.querySelector("canvas");
  if (canvas) {
    const link = document.createElement("a");
    link.href = canvas.toDataURL("image/png");
    link.download = "qrcode.png";
    link.click();
  }
}
