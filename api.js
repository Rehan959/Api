
function sendRequest() {
  let xmlObj = new XMLHttpRequest();
  xmlObj.open("GET", "https://dog.ceo/api/breeds/image/random/20", true);
  xmlObj.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
      console.log("Yay, successful");
      const div = document.getElementById("info");
      const imageArray = JSON.parse(this.responseText).message;
      document.getElementById("status").innerHTML = JSON.parse(
        this.responseText
      ).status;
      imageArray.forEach((image) => {
        div.innerHTML += `
                <img src=${image} alt="dog_image"/>
                `;
      });
    } else {
      console.log("Nay, unsuccessful");
    }
  };
  xmlObj.send();
}
sendRequest();