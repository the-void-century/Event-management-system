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
        validForm=false
        console.log("The function is executing")
    }
    if(!firstNameMatch){
        let firstNameError=document.getElementById("FirstNameError");
        firstNameError.innerHTML="";
        firstNameError.innerHTML+="- First Name should not contain special characters or numbers";
        validForm=false
    }
    if(!lastNameMatch){
        let lastNameError=document.getElementById("LastNameError");
        lastNameError.innerHTML="";
        lastNameError.innerHTML+="Last Name should not contain special characters or numbers";
        validForm=false
    }
    if(!emailMatch){
        let emailError=document.getElementById("EmailError");
        emailError.innerHTML="";
        emailError.innerHTML+="Please enter a valid email address";
        validForm=false
    }
    if(!passwordMatch){
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
        formData.append('profilepicture',profilePicture)
        formData.append('username',username)
        formData.append('password',password)
        formData.append('firstname',first_name)
        formData.append('lastname',last_name)
        formData.append('email',email)
        formData.append('role',"admin")
        formData.append('dob',new Date())

        fetch("http://127.0.0.1:3000/create/user", {
            method: "POST",
            body: formData,
            headers: {}
            }).then((response)=>{
                alert("Great Success!");
            }).catch((error)=>{
                alert("error")
            })

    }

})  