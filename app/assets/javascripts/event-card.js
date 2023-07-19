// document.addEventListener("DOMContentLoaded", ()=>{
    document.getElementById("events-container").addEventListener("click", (e)=>{
        console.log("registering")
        if (e.target && e.target.matches("a.classA")) {
            console.log("Anchor element clicked!");
            }
        if(e.target && e.target.tagName=="A"){
            let url = e.target.id+"/"+e.target.getAttribute("event")
            let flag=false
            if(e.target.id=="register"){
                e.target.style="background-color: gray";
                e.target.id="unregister"
                e.target.innerHTML="Registered"
                flag=true
            }
            else if(e.target.id=="unregister"){
                e.target.style="background-color:#743dee";
                e.target.id="register"
                e.target.innerHTML="Register"
                flag=true
            }
            console.log(url)
            if(flag){
                fetch(url, {
                    method: "GET",
                    headers: {}
                    }).then((response)=>{
                        console.log(response);
                    }).catch((error)=>{
                        alert("error")
                    })
            }
            
        }
    })
// })