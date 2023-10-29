async function advice() {
    const response = await fetch("https://api.adviceslip.com/advice");
    const advice = await response.json();
    console.log(advice);
  }