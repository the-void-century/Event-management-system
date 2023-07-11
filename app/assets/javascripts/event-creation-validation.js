document.getElementById("EventCreationForm").addEventListener("submit", (e)=>{
    e.preventDefault();
    const eventTitle =document.getElementById("EventTitle");
    const eventCategory=document.getElementById("EventCategory");
    const eventLocation = document.getElementById("EventLocation");
    const eventImage = document.getElementById("EventImage");
    const eventDescription = document.getElementById("EventDescription");
    const eventDate=document.getElementById("EventDate");

    const titlePattern=/^[A-Za-z]+$/g;
    const categoryPattern=/^[A-Za-z]+$/g;
    const locationPattern=/[a-zA-Z0-9,\s]+/g;
    
    const titleMatch= titlePattern.match(eventTitle);
    const categoryMatch= categoryPattern.match(eventCategory);
    const locationMatch= locationPattern.match(eventLocation);

    if(!titleMatch){
        
    }
});
