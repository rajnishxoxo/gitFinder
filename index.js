const submitButton = document.getElementById("btn");

const inputBar = document.getElementById("searchBar");

const userdisplay = document.querySelector(".resultdisplay");

const displayUserImage = document.querySelector(".img");

submitButton.addEventListener("click", () => {
  let getResult = async function () {
    if (inputBar.value == "") {
      alert("please enter the UserName");
    } else {
      userdisplay.style.display = "block";
    }

    try {
      let result = await fetch(
        `https://api.github.com/users/${inputBar.value}`
      );
      result = await result.json();
      let imageURL = result.avatar_url;
      displayUserImage.src = imageURL;
    } catch (error) {}

    // console.log(result)
    // console.log(result.avatar_url)
  };

  getResult();
});
