document.getElementById("form").addEventListener("submit", (e)=>{
    e.preventDefault();
    const username=document.getElementById("username").value
    const password=document.getElementById("password").value
    const csrfToken = document.querySelector("meta[name='csrf-token']").getAttribute("content");
    let formData= new FormData()
    formData.append('username', username)
    formData.append('password', password)
    formData.append('authenticity_token', csrfToken)
    fetch("/login", {
            method: "POST",
            body: formData,
            headers: {}
            }).then((response)=>{
                let loginError=document.getElementById("LoginError");
                loginError.innerHTML="";
                if(response.status==401){
                    loginError.innerHTML="Invalid username or password"
                }
                else if(response.status==200){
                    window.location.replace("/")
                }
            }).catch((error)=>{
                alert("error")
            })
})