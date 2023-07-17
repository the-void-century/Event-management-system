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
    let url="create"
    let x=document.getElementById("update")
    if(x){
        url=x.getAttribute("data")
        if(!feesMatch && eventTitle==""){
            validEvent=true
        }
        else{
            validEvent=false
        }
        if(!locationMatch && eventLocation==""){
            validEvent=true
        }
        else{
            validEvent=false
        }
        if(!categoryMatch && eventCategory==""){
            validEvent=true
        }
        else{
            validEvent=false
        }
        if(!titleMatch && eventTitle==""){
            validEvent=true
        }
        else{
            validEvent=false
        }        
    }
    if(validEvent){
        const formData= new FormData()
        formData.append("title",eventTitle)
        if(eventTitle==""){
            formData.delete("title")
        }
        formData.append("category",eventCategory)
        if(eventCategory==""){
            formData.delete("category")
        }
        formData.append("location",eventLocation)
        if(eventLocation==""){
            formData.delete("location")
        }
        formData.append("eventposter",eventImage)
        if(eventImage==undefined){
            formData.delete("eventposter")
        }
        formData.append("description",eventDescription)
        if(eventDescription==""){
            formData.delete("description")
        }
        formData.append("date",eventDate)
        if(eventDate==""){
            formData.delete("date")
        }
        formData.append("fees",eventFees)
        if(eventFees==""){
            formData.delete("fees")
        }
        formData.append("seat",eventSeat)
        if(eventSeat==""){
            formData.delete("seat")
        }
        console.log(formData.toString)
        fetch(url, {
            method: "POST",
            body: formData,
            headers: {}
            }).then((response)=>{
                alert("Great Success!");
                window.location.replace("/");
            }).catch((error)=>{
                alert("error")
            })
    }
});
