const adviceText = document.querySelector("p");
const adviceId = document.querySelector("span")
const button = document.querySelector("#iconBackground")

addEventListener("load", () => {
updateData();
});

button.addEventListener("click", () => {
  updateData()
});

function updateData() {
  const getData = fetch("https://api.adviceslip.com/advice", { cache: "no-store" })
.then((res) => {
  return res.json();
})
.then((data) => {
  console.log(data.slip);
  adviceText.innerText = data.slip.advice;
  adviceId.innerText = data.slip.id;
})
.catch((e) => {
  console.log("error!", e)
});
}




