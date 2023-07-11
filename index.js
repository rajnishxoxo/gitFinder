const submitButton = document.getElementById("btn");

const inputBar = document.getElementById("searchBar");

const userdisplay = document.querySelector(".div");

const displayUserImage = document.querySelector(".img");

const userName = document.querySelector('.userName');
const profilePara = document.querySelector('.userProfileInfo');
const userFollowers = document.querySelector('.followers');
const userFollowing = document.querySelector('.following');
const repoCount = document.querySelector('.repo');
const profileLink = document.querySelector('.link');

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
      console.log(result)
      let imageURl= result.avatar_url;
      userName.textContent = result.name;
      profilePara.innerHTML =result.bio;
      displayUserImage.src = imageURl;
      userFollowers.innerHTML= `Followers : ${result.followers}`;
      userFollowing.innerHTML =`Following : ${result.following}`;
      repoCount.innerHTML =`Repo : ${result.public_repos}`
   
      console.log(result.html_url)

      let profilelinks = result.html_url;
      profileLink.href = profilelinks;
    } catch (error) {
        console.log(error)
    }
    
  };

  getResult();
});
