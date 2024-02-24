const myImage = document.querySelector("img");

myImage.onclick = () => {
    const mySrc = myImage.getAttribute("src");
    if (mySrc === "images/gojira.jpeg") {
        myImage.setAttribute("src", "images/gojira2.jpeg");
    }
    else {
        myImage.setAttribute("src", "images/gojira.jpeg");
    }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    const myName = prompt("Please enter your name.");
    if (!myName) {
      setUserName();
    } else {
      localStorage.setItem("name", myName);
      myHeading.textContent = `Gojira is cool, ${myName}`;
    }
  }  

  if (!localStorage.getItem("name")) {
    setUserName();
  } else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Gojira is cool, ${storedName}`;
  }  

myButton.onclick = () => {
    setUserName();
};


