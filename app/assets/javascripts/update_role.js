document.getElementById("container").addEventListener("submit", (e) => {
    e.preventDefault();
    if(e.target)
    {
        const form = e.target.closest("form"); // Find the closest form element to the target
    const role = form.querySelector("input[name='Role']:checked").value;
    const userId = form.querySelector("input[name='Role']:checked").getAttribute("x");
    const formData= new FormData();
    formData.append("userid",userId);
    formData.append("role",role);
    fetch("role/update", {
        method: "POST",
        body: formData,
        headers: {}
        }).then((response)=>{
            console.log(response);
            if(response.status==201){
                console.log("reponse")
                let snack=document.getElementById("snackbar")
                snack.classList.add("show")
                setTimeout(()=>{snack.classList.remove("show")},2000)
            }
        }).catch((error)=>{
            alert("error");
        })
    }
  });