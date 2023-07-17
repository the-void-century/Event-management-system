
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
    let minAmount=document.getElementById("MinAmount").value
    let maxAmount=document.getElementById("MaxAmount").value
    let formData=new URLSearchParams;
    formData.append("sort",sortValue);
    console.log(sortValue);
    formData.append("filter",filterValue);
    formData.append("search",searchTerm);
    formData.append("minimum",minAmount);
    formData.append("maximum",maxAmount);
    formData.append("isSearching",true);
    
    fetch(`/?${formData.toString()}`, {
        method: "GET",
        headers: {}
        }).then((response)=>{
           return response.text()
        }).then((html)=>{
            document.getElementById("events-container").innerHTML=html
        })
        .catch((error)=>{
            alert("error")
        })

})

