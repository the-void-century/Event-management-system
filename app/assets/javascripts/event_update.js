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
    const seatMatch= feesPattern.test(eventSeat);

    let validEvent= true;

    if(!titleMatch && eventTitle!=""){
        let titleError=document.getElementById("TitleError");
        titleError.innerHTML="Invalid title"
        validEvent= false;
    }
    if(!categoryMatch & eventCategory!=""){
        let categoryError=document.getElementById("CategoryError");
        categoryError.innerHTML="Invalid category"
        validEvent=false
    }
    if(!locationMatch && eventLocation!=""){
        let locationError=document.getElementById("LocationError")
        locationError.innerHTML="Invalid location"
        validEvent=false
    }
    if(!feesMatch && eventFees!=""){
        let feesError=document.getElementById("FeesError")
        feesError.innerHTML="Please enter a valid amount"
        validEvent=false
    }
    if(!seatMatch && eventSeat!=""){
        let seatError=document.getElementById("SeatsError")
        seatError.innerHTML="Please enter a valid number"
        validEvent=false
    }
    if(validEvent){
        const formData= new FormData()
        if(eventTitle!=""){
            formData.append("title",eventTitle)
        }        
        
        if(eventCategory!=""){
            formData.append("category",eventCategory)
        }
        
        if(eventLocation!=""){
            formData.append("location",eventLocation)
        }
        
        if(eventImage!=undefined){
            formData.append("eventposter",eventImage)
        }
        
        if(eventDescription!=""){
            formData.append("description",eventDescription)
        }
        
        if(eventDate!=""){
            formData.append("date",eventDate)
        }
        
        if(eventFees!=""){
            formData.append("fees",eventFees)
        }
        
        if(eventSeat!=""){
            formData.append("seat",eventSeat)
        }
        let eventId= document.getElementById("EventCreationForm").getAttribute("x")
        const csrfToken = document.querySelector("meta[name='csrf-token']").getAttribute("content");
        formData.append("authenticity_token",csrfToken)
        console.log(formData.toString)
        let url="/event/update/"+eventId
        console.log(url)
        fetch(url, {
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
