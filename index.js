const submitButton = document.getElementById("btn");

const inputBar = document.getElementById("searchBar");


// const userdisplay = document.querySelector(".userDetail");







const userdisplay = document.querySelector(".div");


let noUserDisplay = document.querySelector('.noUserFound')
const displayUserImage = document.querySelector(".img");

const userName = document.querySelector('.userName');
const profilePara = document.querySelector('.userProfileInfo');
const userFollowers = document.querySelector('.followers');
const userFollowing = document.querySelector('.following');
const repoCount = document.querySelector('.repo');
const profileLinkpara = document.querySelector('.link');
const linkToProfile = document.querySelector('.redirectLink');

const profileLink = document.querySelector('.link');


submitButton.addEventListener("click", () => {
  let getResult = async function () {
    if (inputBar.value == "") {
      alert("please enter the UserName");
    } 

    try {
      let result = await fetch(
        `https://api.github.com/users/${inputBar.value}`
      );
      result = await result.json();

      if(result.message=='Not Found'){
        console.log("User Not found")
        userdisplay.style.display = "none";
        noUserDisplay.style.display='block'
        
      }else{

      
       userdisplay.style.display = "block";
       noUserDisplay.style.display='none'
      console.log(result)
      let imageURl= result.avatar_url;
      userName.textContent = result.name;
      profilePara.innerHTML =result.bio;
      displayUserImage.src = imageURl;
      userFollowers.innerHTML= `Followers : ${result.followers}`;
      userFollowing.innerHTML =`Following : ${result.following}`;

      repoCount.innerHTML =`Public Repo : ${result.public_repos}`
   
      let link =result.html_url;
      linkToProfile.href = link;
      repoCount.innerHTML =`Repo : ${result.public_repos}`
   
      console.log(result.html_url)

      let profilelinks = result.html_url;
      profileLink.href = profilelinks;
     
      }
     
    } catch (error) {
      console.log(error)
      }

      
    } 
    getResult();
  
  });


