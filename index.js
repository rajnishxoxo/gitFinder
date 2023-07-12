const submitButton = document.getElementById("btn");

const inputBar = document.getElementById("searchBar");

const userdisplay = document.querySelector(".userDetail");

const displayUserImage = document.querySelector(".img");

let noUserExists = document.querySelector('noUserFound');



const userName = document.querySelector('.userName');
const profilePara = document.querySelector('.userProfileInfo');
const userFollowers = document.querySelector('.followers');
const userFollowing = document.querySelector('.following');
const repoCount = document.querySelector('.repo');
const profileLinkpara = document.querySelector('.link');
const linkToProfile = document.querySelector('.redirectLink');

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

      // if(result.message=='Not Found'){
      //  console.log('no user exists') 
      // }


      let imageURl= result.avatar_url;
      userName.textContent = result.name;
      profilePara.innerHTML =result.bio;
      displayUserImage.src = imageURl;
      userFollowers.innerHTML= `Followers : ${result.followers}`;
      userFollowing.innerHTML =`Following : ${result.following}`;
      repoCount.innerHTML =`Public Repo : ${result.public_repos}`
   
      let link =result.html_url;
      linkToProfile.href = link;
     




     
    } catch (error) {
      if (result.message ==='Not Found') {
        console.log("Not found")
      }
    }
    
  };

  getResult();
});
