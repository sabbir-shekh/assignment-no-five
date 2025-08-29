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
           alert('You don’t have enough coins to make this call!');
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
        
        const targetId = this.getAttribute("data-target");
        const number = document.getElementById(targetId).textContent;

        
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
       alert('Calling: National Emergency - 999')
const data ={
    name: "জাতীয় জরুরি সেবা",
call: "999",
    date:new Date().toLocaleTimeString()
}
historyData.push(data)
})

//পুলিশ
document.getElementById("police").addEventListener('click', function(){
    alert('Calling: Police - 999')
const data ={
    name: "পুলিশ",
call: "999",
    date:new Date().toLocaleTimeString()
}
historyData.push(data)

})


//ফায়ার সার্ভিস
document.getElementById("fire").addEventListener('click', function(){
     alert('Calling:Fire Service - 999')
const data ={
    name: "ফায়ার সার্ভিস",
call: "999",
    date:new Date().toLocaleTimeString()
}
historyData.push(data)

})


   
document.getElementById("ambulance").addEventListener('click', function(){
alert('Calling:Ambulance - 1994-999999')
const data ={
    name: "অ্যাম্বুলেন্স",
call: "1994-999999",
    date:new Date().toLocaleTimeString()
}
historyData.push(data)
})


document.getElementById("helpline").addEventListener('click', function(){
    alert('Calling:Women & Child Helpline - 109')
const data ={
    name: "নারী ও শিশু সহায়তা",
call: "109",
    date:new Date().toLocaleTimeString()
}
historyData.push(data)

})



document.getElementById("anti").addEventListener('click', function(){
    alert('Calling:Women & Anti-Corruption - 106')
const data ={
    name: "দুদক",
call: "106",
    date:new Date().toLocaleTimeString()
}
historyData.push(data)

})


document.getElementById("electricity").addEventListener('click', function(){
    alert('Calling:Electricity Outage - 16216')

const data ={
    name: "বিদ্যুৎ বিভ্রাট",
call: "16216",
    date:new Date().toLocaleTimeString()
}
historyData.push(data)

})


document.getElementById("brac").addEventListener('click', function(){
    alert('Calling:Brac - 16445')
const data ={
    name: "ব্র্যাক",
call: "16445",
    date:new Date().toLocaleTimeString()
}
historyData.push(data)

})


document.getElementById("railway").addEventListener('click', function(){
     alert('Calling:Bangladesh Railway- 163')
const data ={
    name: "বাংলাদেশ রেলওয়ে",
call: "163",
    date:new Date().toLocaleTimeString()
}
historyData.push(data)

})










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



    document.getElementById("fire").addEventListener('click', function(){
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



    document.getElementById("ambulance").addEventListener('click', function(){
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



    document.getElementById("helpline").addEventListener('click', function(){
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


    document.getElementById("anti").addEventListener('click', function(){
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


    document.getElementById("electricity").addEventListener('click', function(){
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

    document.getElementById("brac").addEventListener('click', function(){
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


    document.getElementById("railway").addEventListener('click', function(){
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





 
// clear history
 document.getElementById("clearBtn").addEventListener('click', function History () { 
      document.getElementById("history-container").innerHTML = " ";
    });
    