const adviceText = document.querySelector("p");
const adviceId = document.querySelector("span")
const button = document.querySelector("#iconBackground")

axios.default.headers = {
  'Cache-Control': 'no-cache',
  'Pragma': 'no-cache',
  'Expires': '0',
  'Access-Control-Allow-Origin': '*',
};


button.addEventListener("click", function (event){
  event.preventDefault(); 
axios
  .get("https://api.adviceslip.com/advice")
  .then((response) => 
  {
    console.log(response.data.slip.advice);
    adviceText.innerHTML = response.data.slip.advice;
    adviceId.innerHTML = response.data.slip.id;
  })
  
  .catch(e => {
    console.log("ERROR!:", e.message)
  })
});

