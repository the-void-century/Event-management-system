document.getElementById("form").addEventListener("submit", (e)=>{
    e.preventDefault();
    if(document.cookie==""){
        document.getElementById("LoginError").innerHTML ="Invalid Username or Password";
        return
    }
    let username=document.getElementById("username").value;
    let password=document.getElementById("password").value;
    let cookieObj={}
    let pairs=document.cookie.split(";")
    pairs.forEach((pair)=>{
        const [key, value]=pair.split("=");
        cookieObj[key]=value
    })
    console.log(cookieObj)
    if(cookieObj.username==username && cookieObj[" password"]==password){
        document.cookie=`token=${true}`
        window.location.replace("event_list.html");
    }
    else{
        console.log("Not matching")
            document.getElementById("LoginError").innerHTML="Invalid Login"
    }
})