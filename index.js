const submitButton = document.getElementById("btn");

const inputBar = document.getElementById("searchBar");

<<<<<<< HEAD
const userdisplay = document.querySelector(".userDetail");

const displayUserImage = document.querySelector(".img");

let noUserExists = document.querySelector('noUserFound');



=======
const userdisplay = document.querySelector(".div");

const displayUserImage = document.querySelector(".img");

>>>>>>> fe8aad1d909e883cf29b97f69d3ecc6003dbb2aa
const userName = document.querySelector('.userName');
const profilePara = document.querySelector('.userProfileInfo');
const userFollowers = document.querySelector('.followers');
const userFollowing = document.querySelector('.following');
const repoCount = document.querySelector('.repo');
<<<<<<< HEAD
const profileLinkpara = document.querySelector('.link');
const linkToProfile = document.querySelector('.redirectLink');
=======
const profileLink = document.querySelector('.link');
>>>>>>> fe8aad1d909e883cf29b97f69d3ecc6003dbb2aa

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
<<<<<<< HEAD

      // if(result.message=='Not Found'){
      //  console.log('no user exists') 
      // }


=======
      console.log(result)
>>>>>>> fe8aad1d909e883cf29b97f69d3ecc6003dbb2aa
      let imageURl= result.avatar_url;
      userName.textContent = result.name;
      profilePara.innerHTML =result.bio;
      displayUserImage.src = imageURl;
      userFollowers.innerHTML= `Followers : ${result.followers}`;
      userFollowing.innerHTML =`Following : ${result.following}`;
<<<<<<< HEAD
      repoCount.innerHTML =`Public Repo : ${result.public_repos}`
   
      let link =result.html_url;
      linkToProfile.href = link;
     




     
    } catch (error) {
      if (result.message ==='Not Found') {
        console.log("Not found")
      }
=======
      repoCount.innerHTML =`Repo : ${result.public_repos}`
   
      console.log(result.html_url)

      let profilelinks = result.html_url;
      profileLink.href = profilelinks;
    } catch (error) {
        console.log(error)
>>>>>>> fe8aad1d909e883cf29b97f69d3ecc6003dbb2aa
    }
    
  };

  getResult();
});
