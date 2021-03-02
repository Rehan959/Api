function sendRequest2() {
  let xmlObj = new XMLHttpRequest();
  xmlObj.open("GET", "https://dog.ceo/api/breeds/image/random/20", true);
  xmlObj.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
      console.log("Yay, successful");
      let section = document.querySelector("section");
      const imageArray = JSON.parse(this.responseText).message;
      document.getElementById("status").innerHTML = JSON.parse(
        this.responseText
      ).status;
      imageArray.forEach((image) => {
        section.innerHTML += `
              <img src=${image} alt="dog_image"/>
              `;
      });
    } else {
      console.log("Nay, unsuccessful");
    }
  };
  xmlObj.send();
}
sendRequest2();