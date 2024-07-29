let imgBox = document.getElementById("imgBox");
let qrImg = document.getElementById("qrImg");
let url = document.getElementById("url");

let btnclicked = document.querySelector(".btnclicked");

btnclicked.addEventListener("click", generateQr);

function generateQr() {
  let inputurl = url.value.trim();
  if (inputurl != "") {
    qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputurl}`;
    imgBox.classList.add("show-img");
  } else {
    url.classList.add("inputempty");
    setTimeout(() => {
      url.classList.remove("inputempty");
    }, 1000);
  }
}

document.querySelector(".deletetxt").addEventListener("click", () => {
  url.value = "";
  qrImg.src = "";
  imgBox.classList.remove("show-img");
});
