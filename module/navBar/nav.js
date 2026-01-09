let body= document.querySelector("body")
let mainContainer= document.querySelector(".mainContainer")
const pages=["home.html","shop.html", "quest.html"]
//console.log(body)


//Function to make it UpperCase only the first Letter
function capitalize(val){
    return val.charAt(0).toUpperCase() + val.slice(1)
}

//Main
document.addEventListener("DOMContentLoaded",function(){
    let navBar=document.createElement("div")
        navBar.classList.add("navBar")
    for(link of pages) //For each page
        {
        let newAnchor=document.createElement("a")
        newAnchor.href=link
        newAnchor.innerHTML=capitalize(link).substring(0,link.length-5)
        newAnchor.classList.add("nav_Anchors")
        navBar.appendChild(newAnchor)
        //console.log(link)
    }
    let newAnchor=document.createElement("a")
    newAnchor.href="index.html"
    newAnchor.innerHTML="Sign out"
    newAnchor.classList.add("nav_Anchors")
    newAnchor.classList.add("signOut")
    navBar.appendChild(newAnchor)
    
    body.insertBefore(navBar,mainContainer)
    console.log(navBar)
    


})