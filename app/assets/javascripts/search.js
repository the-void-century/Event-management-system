import sample from "../data/event_data.js"
let data=sample()
var main=document.getElementById("events-container")
console.log(data)
function compare(searchTarget,searchTerm,empty){
    if(empty==true){
        return true
    }
    else{
        return data[searchTarget].includes(searchTerm)
    }
}
document.getElementById("SearchForm").addEventListener("submit",(e)=>{
    e.preventDefault()
    let sortValue=document.getElementById("sort").value
    let filterValue=document.getElementById("filter").value
    let searchTerm=document.getElementById("Search").value
    let searchTarget
    let filterTarget
    if(filterValue=="Title"){
        searchTarget="Event Title"
    }
    else if(filterValue=="Category"){
        searchTarget="Event Category"
    }
    if(sortValue=="Latest"){
        data.sort((firstValue,secondValue)=>{
            return new Date(secondValue["Event Date"])-new Date(firstValue["Event Date"]);
        })
    }
    else if(sortValue=="Oldest"){
        data.sort((firstValue,secondValue)=>{
            return new Date(firstValue["Event Date"])-new Date(secondValue["Event Date"]);
        })
    }
    console.log(filterValue)
    main.innerHTML=""
    data.forEach((data)=>{
        if(data[searchTarget].includes(searchTerm)){
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
        }
    })
})

