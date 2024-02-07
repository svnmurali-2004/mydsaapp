
//let arr
//arr=["General Topics","Sorting","Arrays","Strings"]
//sessionStorage.setItem("userdata",JSON.stringify({_id:"123",name:"murali",rollnum:"160122737060",password:"admin",status:{solved:["2"],score:0}}))
let userdata=JSON.parse(sessionStorage.getItem("userdata"))
console.log(userdata)

console.log("running")
let i=-1;


console.log(questionsouter,"logging questions")
const totalquestions=()=>{i=0;
        questionsouter.map((item)=>{i=i+item.length});return i}


const result=questionsouter.map((item)=>{i=i+1;return `<div class="p-3 border border-primary cream-background container"><h3 class="text-center">${arr[i]}</h3><div class="progress">
<div id=${"substatus"+i} class="progress-bar" role="progressbar" style="width: 0%;" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">0%</div>
</div><div class="container1">`+ item.map((item)=>{
    let s=`<div id=${item._id+"m"} class="markbtn btn but-outline-success  ">Mark as solved</div>`
    let p="unsolved-filter"

    if (userdata.status.solved.includes(item._id)){
        s=`<div id=${item._id+"m"} class="markbtn btn but-outline-success btn-primary disabled" >solved</div>`
        p="solved-filter"
    }
    
    return ( `<div id=${item._id + "c"} class="menu-item ${p}">
        <div class="menu-card card shadow-lg p-2 mb-5 bg-white rounded">
          <div class="card-body">
            <h5 class="card-title text-success">${item.title}</h5>
            <p class="card-text text-danger">${item.description}</p>
            <button id=${item._id+"q"} type="button" class="d-flex qbtn btn btn-primary q"> <span class="btn-coding-ninjas me-2"></span><div>Solve</div></button>
            <div id=${item._id+"s"} class="sbtn btn btn-danger btn-outline-success " >
                 Solution
                    </div><br/>
            ${s}
            <p  class="card-text">Difficulty: <span id=${item._id+"d"}>${item.difficulty}</span></p>
          </div>
        </div>
      </div>`);}).join(" ")+"</div></div> <br/>"
      
})

const htmlCode=result.join(" ")
document.getElementById("containermain").innerHTML = htmlCode;
console.log(result)

console.log("attaching")
questionsouter.map((item)=>{ item.map((item)=>{
document.getElementById(item._id+"s").addEventListener('click',function (){window.location.href="/solutions/"+item._id})
document.getElementById(item._id+"q").addEventListener("click",function (){
    window.location.href=item.qlink
        })
document.getElementById(item._id+"m").addEventListener("click",function (){
            mark(item._id)
        })

    });})
console.log("attachment complete")

const mark=async(item)=>{
    console.log("marking started")
    document.getElementById(item+"m").classList.add("btn-primary","disabled")
    document.getElementById(item+"m").innerHTML="Solved"
    userdata.status.solved.push(item)
    console.log(document.getElementById(item+"d").textContent)
    if(document.getElementById(item+"d").textContent=="easy"){
        userdata.status.score=parseInt(userdata.status.score)+10
    }else if(document.getElementById(item+"d").textContent=="medium"){
        userdata.status.score=parseInt(userdata.status.score)+30
    }
    else{
        userdata.status.score=parseInt(userdata.status.score)+50
    }
    sessionStorage.setItem("userdata",JSON.stringify(userdata))
    console.log(userdata.status,"from the mark function")
    document.getElementById("myalerttext").innerHTML="marked as solved keep solving"
    document.getElementById("myAlert").classList.add("fixed-top")
    document.getElementById("myAlert").classList.remove("d-none")
    mainstatus()
    document.getElementById(item+"c").classList.remove("unsolved-filter")
    document.getElementById(item+"c").classList.add("solved-filter")
    let tempi=0
    console.log(sections," sections from mark")
   for(const element of sections){

    if (element.includes(item)){
        console.log("sections update executed")
        userdata.status.sections[tempi].push(item);
        break;
    }
    tempi=tempi+1
   }
    subprogressbar()
    updateuser()
    console.log("marking executed successfully")
}

console.log(htmlCode)


console.log("js linked")
function dismissAlert() {
    document.getElementById("myAlert").classList.add("d-none")
  
}
console.log(userdata.status)
console.log(sessionStorage.getItem("userdata"))

  
///main status bar updatation
const mainstatus=()=>{
    let totalquestion=totalquestions()
    console.log((Math.ceil(((userdata.status.solved.length)/totalquestion)*100)).toString()+"%")
document.getElementById("mainstatusheader").innerHTML="Solved :"+(userdata.status.solved.length).toString()+"/"+totalquestion
document.getElementById("mainstatus").innerHTML=(Math.ceil(((userdata.status.solved.length)/totalquestion)*100)).toString()+"%"
document.getElementById("mainstatus").style.width=(Math.ceil(((userdata.status.solved.length)/totalquestion)*100)).toString()+"%"}
mainstatus()
console.log("mainstatus executing")

//document.getElementById("signout").addEventListener('click',function (){
 //   sessionStorage.setItem("isLogin",false)
//})


//to handle the solved criteria
function solvedfilter(){
    console.log("solvedfilter started")
    const solvedlist=Array.from(document.getElementsByClassName("solved-filter"))
    console.log(solvedlist)
    const unsolvedlist=Array.from(document.getElementsByClassName("unsolved-filter"))
    solvedlist.map((item)=>{
        item.classList.remove("d-none");
    })
    unsolvedlist.map((item)=>{
        item.classList.add("d-none")
    })
    document.getElementById("myAlert").classList.remove("d-none")
    document.getElementById("myalerttext").innerHTML="filter solved applied"
    document.getElementById("navbar-toggler-button").click();//to close the nav bar after clicking button
    console.log("solved filter executed")
}

function unsolvedfilter(){
    const solvedlist=Array.from(document.getElementsByClassName("solved-filter"))
    const unsolvedlist=Array.from(document.getElementsByClassName("unsolved-filter"))
    solvedlist.map((item)=>{
        item.classList.add("d-none")
        
    })
    unsolvedlist.map((item)=>{
        item.classList.remove("d-none");
    })
    document.getElementById("myAlert").classList.remove("d-none")
    document.getElementById("myalerttext").innerHTML="filter unsolved applied"
    document.getElementById("navbar-toggler-button").click();//to close the nav bar after clicking button
    console.log("solved filter executed")
}
//solvedfilter()
console.log("script end 2")
function signout(){
    sessionStorage.setItem("userdata",null);
    sessionStorage.setItem("isLogin","false");
    window.location.href="/signin.html"
}
function leaderboard(){
    window.location.href="/leaderboard.html"
}
//sub progress bar
const subprogressbar=()=>{
    let tempid=0
    console.log("subprogress executing")
    sections.map((item)=>{
        console.log(item,userdata.status.sections[tempid])
        let percent=(userdata.status.sections[tempid].length/item.length)*100
        document.getElementById("substatus"+tempid).style.width=Math.ceil(percent)+"%"
        document.getElementById("substatus"+tempid).innerHTML=Math.ceil(percent)+"%"
        tempid=tempid+1
        
    })
    console.log('subprogress executed')
}
subprogressbar()//updating sub progress bars
console.log(questionsouter)

//userupdate function to update users
const updateuser=async()=>{
    const response=await axios.post("/userupdate",userdata);
    console.log(response.data,"from updateuser")
    if (response.data.acknowledged==false){
        alert("mydsa app crashed please contact owner")
    }else if(response.data.acknowledged==true){
        console.log(response.data)
        console.log("userupdate successfull")
    }
}

setInterval(async()=>{
    try{
    let response=await axios.post("/get/user",{rollnum:userdata.rollnum})
    userdata=response.data}catch(err){
        console.log(err)
    }finally{
    console.log("userupdator executed")}
},10000)