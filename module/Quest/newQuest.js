

document.addEventListener("DOMContentLoaded",function(){

    let newQuestForm=document.getElementById("formNewQuest")
let BtnSubmit=document.getElementsByClassName("newQuestSubmit")
let Radio=document.getElementsByClassName("PrizeRadio")
let inputPrize=newQuestForm.PrizeIput




   /* BtnSubmit.addEventListener("click",function(event){
          const warn = "preventDefault() won't let you check this!\n";
        event.preventDefault()
        console.log(BtnSubmit)
        //add the check for the form
    })
    */

    newQuestForm.PrizeType.forEach(radio => radio.addEventListener("input", function(event){
        inputPrize.classList.remove("hidden")
        inputPrize.classList.add("show")
        console.log(inputPrize)
        if(newQuestForm.PrizeType.value==="Token")
        {
            inputPrize.value=""
            inputPrize.type="number"
            inputPrize.placeholder="98"
            console.log("token")
        }
        else if(newQuestForm.PrizeType.value==="Reward")
        {
            inputPrize.value=""
            inputPrize.type="text"
            inputPrize.placeholder="Diner"
            console.log("Reward")
        }

    }))

})