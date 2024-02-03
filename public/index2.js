let i=-1;
arr=["General Topics"]
sessionStorage.setItem("userdata",JSON.stringify({_id:"123",status:{solved:["2"]}}))
const userdata=JSON.parse(sessionStorage.getItem("userdata"))
const questionsouter =[[{_id:"1",title:"Count Digits",qlink:"https://www.codingninjas.com/studio/problems/count-digits_8416387?utm_source=striver&utm_medium=website&utm_campaign=a_zcoursetuf",sollink:"",difficulty:"easy",description:"we should count the no of digits basic problem",},
{_id:"2",title:"Reverse A Number",qlink:"https://www.codingninjas.com/studio/problems/reverse-bits_2181102?utm_source=striver&utm_medium=website&utm_campaign=a_zcoursetuf",sollink:"",difficulty:"easy",description:"we should reverse the no of digits ",},
{_id:"3",title:"Check Palindrome",qlink:"https://www.codingninjas.com/studio/problems/palindrome-number_624662?utm_source=striver&utm_medium=website&utm_campaign=a_zcoursetuf",sollink:"",difficulty:"easy",description:"check whether the given input is palindrome or not",}
]]

const result=questionsouter.map((item)=>{i=i+1;return `<h3>${arr[i]}</h3><div class="container1">`+ item.map((item)=>{
    let s=`<div id=${item._id+"m"} class="markbtn btn but-outline-success  ">Mark as solved</div>`

    if (userdata.status.solved.includes(item._id)){
        s=`<div id=${item._id+"m"} class="markbtn btn but-outline-success btn-primary disabled" >solved</div>`
    }
    
    return ( `<div class="menu-item ">
        <div class="card shadow-lg p-2 mb-5 bg-white rounded">
          <div class="card-body">
            <h5 class="card-title text-success">${item.title}</h5>
            <p class="card-text text-danger">${item.description}</p>
            <button id=${item._id+"q"} type="button" class="d-flex qbtn btn btn-primary q"> <span class="btn-coding-ninjas me-2"></span><div>Solve</div></button>
            <div class="sbtn btn btn-danger btn-outline-success " >
                 Solution
                    </div><br/>
            ${s}
            <p class="card-text">Difficulty: ${item.difficulty}</p>
          </div>
        </div>
      </div>`);}).join(" ")+"</div>"
      
})

const htmlCode=result.join(" ")
document.getElementById("containermain").innerHTML = htmlCode;
console.log(result)

console.log("attaching")
questionsouter.map((item)=>{ item.map((item)=>{
document.getElementById(item._id+"q").addEventListener("click",function (){
    window.location.href=item.qlink
        })
document.getElementById(item._id+"m").addEventListener("click",function (){
            mark(item._id)
        })

    });})
console.log("attachment complete")

const mark=(item)=>{
    document.getElementById(item+"m").classList.add("btn-primary","disabled")
    document.getElementById(item+"m").innerHTML="Solved"
    userdata.status.solved.push(item)
    sessionStorage.setItem("userdata",JSON.stringify(userdata))
    console.log(userdata.status)
    document.getElementById("myalerttext").innerHTML="marked as solved keep solving"
    document.getElementById("myAlert").classList.add("fixed-top")
    document.getElementById("myAlert").classList.remove("d-none")
}

console.log(htmlCode)


console.log("js linked")
function dismissAlert() {
    document.getElementById("myAlert").classList.add("d-none")
  
}
console.log(userdata.status)


