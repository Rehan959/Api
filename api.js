const Loading = document.querySelector("span");
function FetchRequest() {
  Loading.classList.add("visual");
  Loading.classList.remove("invisual");
  fetch("https://dog.ceo/api/breeds/image/random/20")
    .then((res) => res.json())
    .then((result) => {
      console.log(result);
      Loading.classList.add("invisual");
      Loading.classList.remove("visual");
    })
    .catch((error) => {
      console.log(error);
      Loading.classList.add("invisual");
      Loading.classList.remove("visual");
    });
}
FetchRequest();
