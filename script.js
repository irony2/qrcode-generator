let qr;

function generateQRCode() {
  const text = document.getElementById("text").value.trim();
  const size = parseInt(document.getElementById("size").value);
  const fgColor = document.getElementById("fgColor").value;
  const bgColor = document.getElementById("bgColor").value;
  const qrDiv = document.getElementById("qrcode");

  qrDiv.innerHTML = "";

  if (!text) {
    alert("텍스트를 입력해주세요.");
    return;
  }

  qr = new QRCode(qrDiv, {
    text: text,
    width: size,
    height: size,
    colorDark: fgColor,
    colorLight: bgColor,
  });
}

function downloadQRCode() {
  const qrDiv = document.getElementById("qrcode");
  const text = document.getElementById("text").value.trim();
  const fileName = text ? `${text.substring(0, 10)}.png` : "qrcode.png";

  const img = qrDiv.querySelector("img");
  if (img) {
    const link = document.createElement("a");
    link.href = img.src;
    link.download = fileName;
    link.click();
    return;
  }

  const canvas = qrDiv.querySelector("canvas");
  if (canvas) {
    const link = document.createElement("a");
    link.href = canvas.toDataURL("image/png");
    link.download = fileName;
    link.click();
  }
}
