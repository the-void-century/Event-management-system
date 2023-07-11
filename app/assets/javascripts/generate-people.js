import sample from "../data/people_data.js"
let data=sample()

var main=document.getElementById("main-container")

data.forEach(element => {
    var profileContainer=document.createElement("div")
    var profileImageContainer=document.createElement("div")
    var profileImage=document.createElement("img")
    var profileNameContainer=document.createElement("div")
    var profileName=document.createElement("p")
    var mainLink=document.createElement("a")

    profileContainer.classList.add("profile-container")
    profileImageContainer.classList.add("profile-image")
    profileNameContainer.classList.add("profile-name")
    
   
    profileImage.src="../assets/default_profile.jpg"
    profileName.innerText=element["First Name"]+" "+element["Last Name"]
    mainLink.href="homepage.html"

    profileImageContainer.appendChild(profileImage)
    profileNameContainer.appendChild(profileName)
    profileContainer.appendChild(profileImageContainer)
    profileContainer.appendChild(profileNameContainer)
    profileContainer.appendChild(mainLink)
    main.appendChild(profileContainer)
});