document.getElementById("EventCreationForm").addEventListener("submit", (e)=>{
    e.preventDefault();
    const eventTitle =document.getElementById("EventTitle").value;
    const eventCategory=document.getElementById("EventCategory").value;
    const eventLocation = document.getElementById("EventLocation").value;
    const eventImage = document.getElementById("EventImage").files[0];
    const eventDescription = document.getElementById("EventDescription").value;
    const eventDate=document.getElementById("EventDate").value;
    const eventFees =document.getElementById("EventFees").value;
    const eventSeat= document.getElementById("EventSeats").value;

    const titlePattern=/^[A-Za-z ]+$/g;
    const categoryPattern=/^[A-Za-z ]+$/g;
    const locationPattern=/[a-zA-Z0-9 ,\s]+/g;
    const feesPattern=/^-?\d+(\.\d+)?$/g;
    
    const titleMatch= titlePattern.test(eventTitle);
    const categoryMatch= categoryPattern.test(eventCategory);
    const locationMatch= locationPattern.test(eventLocation);
    const feesMatch= feesPattern.test(eventFees);

    let validEvent= true;

    if(!titleMatch){
        let titleError=document.getElementById("TitleError");
        titleError.innerHTML="Invalid title"
        validEvent= false;
    }
    if(!categoryMatch){
        let categoryError=document.getElementById("CategoryError");
        categoryError.innerHTML="Invalid category"
        validEvent=false
    }
    if(!locationMatch){
        let locationError=document.getElementById("LocationError")
        locationError.innerHTML="Invalid location"
        validEvent=false
    }
    if(!feesMatch){
        let feesError=document.getElementById("FeesError")
        feesError.innerHTML="Please enter a valid amount"
        validEvent=false
    }
    if(validEvent){
        const formData= new FormData()
        const csrfToken = document.querySelector("meta[name='csrf-token']").getAttribute("content");
        formData.append("title",eventTitle)
        formData.append("category",eventCategory)
        formData.append("location",eventLocation)
        formData.append("eventposter",eventImage)
        formData.append("description",eventDescription)
        formData.append("date",eventDate)
        formData.append("fees",eventFees)
        formData.append("seat",eventSeat)
        formData.append("authenticity_token",csrfToken)
        console.log(formData.toString)
        fetch("/event/create", {
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
                window.location.replace("/");
            }).catch((error)=>{
                alert("error")
            })
    }
});
