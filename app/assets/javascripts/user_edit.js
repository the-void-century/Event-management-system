document.getElementById("main_form").addEventListener("submit",(e)=>{
    e.preventDefault();
    const username=document.getElementsByName("username")[0].value.trim();
    const first_name=document.getElementsByName("first_name")[0].value.trim();
    const last_name=document.getElementsByName("last_name")[0].value.trim();
    const email=document.getElementsByName("email")[0].value.trim();
    const password=document.getElementsByName("password")[0].value.trim();
    const repeatPassword=document.getElementsByName("repeat_password")[0].value.trim();
    const profilePicture=document.getElementsByName("profilepicture")[0].files[0]

    const userPattern = /^[a-z][a-z0-9]{7,29}$/;
    const namePattern=/^[A-Za-z]+$/;
    const emailPattern=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()\-=_+{}[\]:;'"|\\<>,./?]).{8,30}$/;
    
    const userMatch=userPattern.test(username);
    const passwordMatch=passwordPattern.test(password);
    const firstNameMatch=namePattern.test(first_name);
    const lastNameMatch=namePattern.test(last_name);
    const emailMatch=emailPattern.test(email);
    // console.log(username);
    console.log(last_name);
    let validForm=true;
    if(!userMatch){
        let userError=document.getElementById("UserError");
        userError.innerHTML="";
        userError.innerHTML+="- The username should be atleast 8 characters long";
        userError.innerHTML+="- The username should not start with a number <br>";
        userError.innerHTML+="- The username should not have spaces or special characters<br>";
        userError.innerHTML+="- The username should be atleast 8 characters long";
        validForm=falseec
        console.log("The function is executing")
    }
    if(!firstNameMatch && first_name!=""){
        let firstNameError=document.getElementById("FirstNameError");
        firstNameError.innerHTML="";
        firstNameError.innerHTML+="- First Name should not contain special characters or numbers";
        validForm=false
    }
    if(!lastNameMatch && last_name!=""){
        let lastNameError=document.getElementById("LastNameError");
        lastNameError.innerHTML="";
        lastNameError.innerHTML+="Last Name should not contain special characters or numbers";
        validForm=false
    }
    if(!emailMatch && email!=""){
        let emailError=document.getElementById("EmailError");
        emailError.innerHTML="";
        emailError.innerHTML+="Please enter a valid email address";
        validForm=false
    }
    if(!passwordMatch && password!=""){
        let passwordError=document.getElementById("PasswordError");
        passwordError.innerHTML="";
        passwordError.innerHTML+="- Passwords should be atleast 8 characters long<br>";
        passwordError.innerHTML+="Password must contain atleast:<br>";
        passwordError.innerHTML+="&emsp; - One special character<br>";
        passwordError.innerHTML+="&emsp; - One Uppercase character<br>";
        passwordError.innerHTML+="&emsp; - One lowercase character<br>";
        passwordError.innerHTML+="&emsp; - One numeric character";
        validForm=false
    }
    console.log(password,repeatPassword);
    if(password!=repeatPassword){
        console.log("password comparison")
        let repeatPasswordError = document.getElementById("RepeatPasswordError");
        repeatPasswordError.innerHTML="";
        repeatPasswordError.innerHTML+="Passwords do not match";
        validForm=false
    }
    if(validForm){
        // document.cookie = `username=${username}`; 
        // document.cookie = `password=${password}`;
        // document.cookie = `token=${false}`;
        const formData= new FormData();
        if(profilePicture){
            formData.append('profilepicture',profilePicture)
        }
        if(username!=""){
            formData.append('username',username)
        }
        if(password!=""){
            formData.append('password',password)
        }
        if(first_name!=""){
            formData.append('firstname',first_name)
        }
        if(last_name!=""){
            formData.append('lastname',last_name)
        }
        if(email!=""){
            formData.append('email',email)
        }
        const csrfToken = document.querySelector("meta[name='csrf-token']").getAttribute("content");
        formData.append("authenticity_token",csrfToken)
            fetch("/user/update", {
                method: "POST",
                body: formData,
                headers: {}
                }).then((response)=>{
                    if(response.status==201){
                        console.log("reponse")
                        let snack=document.getElementById("snackbar")
                        snack.classList.add("show")
                        setTimeout(()=>{snack.classList.remove("show")},2000)
                    }
                    window.location.replace("/login");
                }).catch((error)=>{
                    console.log("error")
                })

    }

})  