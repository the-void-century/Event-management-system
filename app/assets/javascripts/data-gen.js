import sample from "../data/event_data.js"
let data=sample()
var main=document.getElementById("events-container")
console.log(data)

 data.forEach((data)=>{
    main.innerHTML+=`<div class="event">
    <img src="../assets/conference.jpg" alt="">
    <div class="event-title">
        <p>${data["Event Title"]}</p>
    </div>
    <div class="event-details">
        <div class="event-category">
            <img src="../assets/category.png" alt="">
            <p>${data["Event Category"]}</p>
        </div>
        <div class="event-location"><img src="../assets/location.png" alt=""><p>${data["Event Location"]}</p>
        </div>
        <div class="event-date">
            <img src="../assets/date-time.png" alt=""><p>
                ${data["Event Date"]}</p>
        </div>
    </div>
    <div class="buttons">
        <a href="event_page.html">View Details</a>
        <a href="#" id="test">Register</a>
    </div>
</div>`
})

