window.addEventListener('load',(e)=>{
    let cookieData=document.cookie.split(';')[2];
    let check=cookieData.split('=')[1]
    console.log(check);
    if(check=="true"){
        let login=document.getElementById("login");
        let signup=document.getElementById("signup");
        let logout=document.getElementById("logout");
        let loginOverlay=document.getElementById("login-overlay");
        let signupOverlay=document.getElementById("signup-overlay");
        let logoutOverlay=document.getElementById("logout-overlay");
        login.style.display="none";
        signup.style.display="none";
        logout.style.display="flex";
        loginOverlay.style.display="none";
        signupOverlay.style.display="none";
        logoutOverlay.style.display="flex";
    }
})
document.getElementById("logout").addEventListener("click",(e)=>{
    document.cookie=`token=${false}`
    window.location.replace("login.html")
})
document.getElementById("logout-overlay").addEventListener("click",(e)=>{
    document.cookie=`token=${false}`
    console.log("Yes")
    window.location.replace("login.html")
})