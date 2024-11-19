function displayJoke(response) {
  new Typewriter("#joke", {
    strings: response.data.answer,
    autoStart: true,
    cursor: null,
    delay: 40,
  });
}

function tellJoke(event) {
  event.preventDefault();
  let apiKey = "4t7d303d7c1ea2908b8dfea4coaff2b4";
  let prompt = "Tell me a unique and funny joke ";
  let context = "You are a funny AI with lots of funny dad jokes";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
  let jokeElement = document.querySelector("#joke");
  jokeElement.innerHTML = "Creating a unique joke for you...";
  axios.get(apiUrl).then(displayJoke);
}
let buttonElement = document.querySelector("#tell-joke");
buttonElement.addEventListener("click", tellJoke);
