// heart counter function
let count = 0;
let coins = 100;

    function increaseCount() {
      count++; 
      document.getElementById("counter").textContent = count; 
    }
  //  heart counter function off



//  coin er coun
   
    const coinDisplay = document.getElementById("coinCount");

    
    const btn = document.querySelectorAll(".buyBtn");

   
    for (let button of btn) {
      button.addEventListener("click", function() {
        if (coins >= 20) {
          coins -= 20; 
          coinDisplay.textContent = coins;
        } else {
          alert("Not enough coins!");
        }
      });
    }
    // coin counnt function off


// copy function is onn
 let copyCount = 0;
    const copyDisplay = document.getElementById("copyCount");
    const buttons = document.querySelectorAll(".copyBtn");

    for (let button of buttons) {
      button.addEventListener("click", function() {
        // data-target থেকে p এর id পেলাম
        const targetId = this.getAttribute("data-target");
        const number = document.getElementById(targetId).textContent;

        // নাম্বার কপি করো
        navigator.clipboard.writeText(number)
          .then(() => {
            copyCount++;
            copyDisplay.textContent = copyCount;
            alert("Number copied: " + number);
          })
          .catch(err => {
            console.error("Failed to copy: ", err);
          });
      });
    }

    //copy function is off


    //জাতীয় জরুরি সেবা
document.getElementById("call-btn").addEventListener('click', function(){

const data ={
    name: "জাতীয় জরুরি সেবা",
call: "999",
    date:new Date().toLocaleTimeString()
}
historyData.push(data)
})


document.getElementById("police").addEventListener('click', function(){
const data ={
    name: "পুলিশ",
call: "999",
    date:new Date().toLocaleTimeString()
}
historyData.push(data)

})




//  function addCall() {
//       const now = new Date();
//       const time = now.toLocaleTimeString();
    

//       const card = document.createElement("div");
//       card.innerHTML = `
//          <div class="flex justify-between  p-2 bg-[#F2F2F2] px-3 items-center rounded-[10px] m-[15px] ">
// <div>
//     <h1 class="text-[14px]">জাতীয় জরুরি সেবা</h1>
//         <p class="text-[#5C5C5C]">999</p>
// </div>


// <div>
//     <p>${data.date}</p>
// </div>

//         </div>
//       `;
//       document.getElementById("callHistory").appendChild(card);
//     }

//     function clearHistory() {
//       document.getElementById("callHistory").innerHTML = "";
//     }







const historyData = []

// history function
    document.getElementById("call-btn").addEventListener('click', function(){
    const historyContainer = document.getElementById("history-container")
historyContainer.innerText =""


    for ( const data of historyData){
        const div = document.createElement("div")
        div.innerHTML = `

<div class="flex justify-between  p-2 bg-[#F2F2F2] px-3 items-center rounded-[10px] m-[15px] ">
 <div>
     <h1 class="text-[14px]">${data.name}</h1>
         <p class="text-[#5C5C5C]">${data.call}</p>
</div>


 <div>
     <p>${data.date}</p>
 </div>
       </div>   `
        historyContainer.appendChild(div)
             
    }
    
})



    document.getElementById("police").addEventListener('click', function(){
    const historyContainer = document.getElementById("history-container")
historyContainer.innerText =""


    for ( const data of historyData){
        const div = document.createElement("div")
        div.innerHTML = `

<div class="flex justify-between  p-2 bg-[#F2F2F2] px-3 items-center rounded-[10px] m-[15px] ">
 <div>
     <h1 class="text-[14px]">${data.name}</h1>
         <p class="text-[#5C5C5C]">${data.call}</p>
</div>


 <div>
     <p>${data.date}</p>
 </div>
       </div>   `
        historyContainer.appendChild(div)
             
    }
    
})











//     document.getElementById("transjection-button").addEventListener('click', function(){
//     const transactionContainer = document.getElementById("transaction-container")
// transactionContainer.innerText =""


//     for ( const data of transactionData){
//         const div = document.createElement("div")
//         div.innerHTML = ``




//         }
    
// })
