let i=-1;
arr=["General Topics","Sorting","Arrays","Strings"]
sessionStorage.setItem("userdata",JSON.stringify({_id:"123",name:"murali",rollnum:"160122737060",password:"admin",status:{solved:["2"],score:0}}))
const userdata=JSON.parse(sessionStorage.getItem("userdata"))
const questionsouter =[[{_id:"1",title:"Count Digits",qlink:"https://www.codingninjas.com/studio/problems/count-digits_8416387?utm_source=striver&utm_medium=website&utm_campaign=a_zcoursetuf",sollink:"",difficulty:"easy",description:"we should count the no of digits basic problem",},
{_id:"2",title:"Reverse A Number",qlink:"https://www.codingninjas.com/studio/problems/reverse-bits_2181102?utm_source=striver&utm_medium=website&utm_campaign=a_zcoursetuf",sollink:"",difficulty:"easy",description:"we should reverse the no of digits ",},
{_id:"3",title:"Check Palindrome",qlink:"https://www.codingninjas.com/studio/problems/palindrome-number_624662?utm_source=striver&utm_medium=website&utm_campaign=a_zcoursetuf",sollink:"",difficulty:"easy",description:"check whether the given input is palindrome or not",},
{_id:"4",title:"Find Character Case",qlink:"https://www.codingninjas.com/studio/problems/find-character-case_58513?utm_source=striver&utm_medium=website&utm_campaign=a_zcoursetuf",solink:"",difficulty:"easy",description:"Find charecter case by following given rules",},
{_id:"5",title:"Data Type",qlink:"https://www.codingninjas.com/studio/problems/data-type_8357232?utm_source=striver&utm_medium=website&utm_campaign=a_zcoursetuf",solink:"",difficulty:"easy",description:"Print given datatype size in bytes",},                       
{_id:"6",title:"GCD or HCF",qlink:"https://www.codingninjas.com/studio/problems/hcf-and-lcm_840448?utm_source=striver&utm_medium=website&utm_campaign=a_zcoursetuf",solink:"",difficulty:"moderate",description:"Calculate the gcd without libraries",},
{_id:"7",title:"Sum of all divisors",qlink:"https://www.codingninjas.com/studio/problems/sum-of-all-divisors_8360720?utm_source=striver&utm_medium=website&utm_campaign=a_zcoursetuf",solink:"",difficulty:"easy",description:"find given number is ",},
{_id:"8",title:"Check Armstrong",qlink:"https://www.codingninjas.com/studio/problems/check-armstrong_589?utm_source=striver&utm_medium=website&utm_campaign=a_zcoursetuf",solink:"",difficulty:"moderate",description:"find given number is Armstrong",},
{_id:"9",title:"Check Prime",qlink:"https://www.codingninjas.com/studio/problems/check-prime_624934?utm_source=striver&utm_medium=website&utm_campaign=a_zcoursetuf",solink:"",difficulty:"easy",description:"Find out whether 'n' is prime or not",},
{_id:"10",title:"Count Frequency in a range",qlink:"https://www.codingninjas.com/studio/problems/count-frequency-in-a-range_8365446?utm_source=striver&utm_medium=website&utm_campaign=a_zcoursetuf",solink:"",difficulty:"easy",description:"to count frequency of all elements from 1 to n",},                        
{_id:"11",title:"Highest/Lowest Frequency Elements",qlink:"https://www.codingninjas.com/studio/problems/k-most-occurrent-numbers_625382?utm_source=striver&utm_medium=website&utm_campaign=a_zcoursetuf",solink:"",difficulty:"moderate",description:"find the highest and lowest frequency elements in an array",}, 
],
   [
{_id:"12",title:"Selection Sort",qlink:"https://www.codingninjas.com/studio/problems/selection-sort_624469?utm_source=striver&utm_medium=website&utm_campaign=a_zcoursetuf",solink:"",difficulty:"easy",description:"Sort given unsorted array in non-decreasing order by selection sort",}, 
{_id:"13",title:"Bubble Sort",qlink:"https://www.codingninjas.com/studio/problems/bubble-sort_624380?utm_source=striver&utm_medium=website&utm_campaign=a_zcoursetuf",solink:"",difficulty:"easy",description:"Sort using array by bubble sort",}, 
{_id:"14",title:"Merge Sort",qlink:"https://www.codingninjas.com/studio/problems/merge-sort_5846?utm_source=striver&utm_medium=website&utm_campaign=a_zcoursetuf",solink:"",difficulty:"moderate",description:"Sort the array upto the given element number by mergsort",}, 
{_id:"15",title:"Bubble Sort",qlink:"https://www.codingninjas.com/studio/problems/bubble-sort_624380?utm_source=striver&utm_medium=website&utm_campaign=a_zcoursetuf",solink:"",difficulty:"easy",description:"sort array using Bubble Sort Change the input array itself",}, 
{_id:"16",title:"Insertion Sort",qlink:"https://www.codingninjas.com/studio/problems/insertion-sort_624381?utm_source=striver&utm_medium=website&utm_campaign=a_zcoursetuf",solink:"",difficulty:"moderate",description:"sort array using insetion Sort Change the input array itself",},
{_id:"17",title:"Quick Sort",qlink:"https://www.codingninjas.com/studio/problems/quick-sort_5844?utm_source=striver&utm_medium=website&utm_campaign=a_zcoursetuf",solink:"",difficulty:"moderate",description:"sort the elements between start and end using quick sort",}, 
   ],
      [
{_id:"18",title:"Largest Element in the Array",qlink:"https://www.codingninjas.com/studio/problems/largest-element-in-the-array-largest-element-in-the-array_5026279?utm_source=striver&utm_medium=website&utm_campaign=a_zcoursetuf",solink:"",difficulty:"easy",description:"find the largest element in the array",},
{_id:"19",title:"Second Largest Number",qlink:"https://www.codingninjas.com/studio/problems/ninja-and-the-second-order-elements_6581960?utm_source=striver&utm_medium=website&utm_campaign=a_zcoursetuf",solink:"",difficulty:"easy",description:"Find second largest and smallest element from array",},
{_id:"20",title:"Check Sorted Array",qlink:"https://www.codingninjas.com/studio/problems/ninja-and-the-sorted-check_6581957?utm_source=striver&utm_medium=website&utm_campaign=a_zcoursetuf",solink:"",difficulty:"easy",description:"return 1 if the given array is sorted Else return 0",},
{_id:"21",title:"Remove Duplicates in Array",qlink:"https://www.codingninjas.com/studio/problems/remove-duplicates-from-sorted-array_1102307?utm_source=striver&utm_medium=website&utm_campaign=a_zcoursetuf",solink:"",difficulty:"easy",description:"remove duplicates from array",},
{_id:"22",title:"Left Rotate an Array by One",qlink:"https://www.codingninjas.com/studio/problems/left-rotate-an-array-by-one_5026278?utm_source=striver&utm_medium=website&utm_campaign=a_zcoursetuf",solink:"",difficulty:"easy",description:"Rotate array shift all elements left,move first element to last position",},
{_id:"23",title:"Rotate array",qlink:"https://www.codingninjas.com/studio/problems/rotate-array_1230543?utm_source=striver&utm_medium=website&utm_campaign=a_zcoursetuf",solink:"",difficulty:"easy",description:"rotate the array to the left'k'steps",},
{_id:"24",title:"Move Zero's to End",qlink:"https://www.codingninjas.com/studio/problems/ninja-and-the-zero-s_6581958?utm_source=striver&utm_medium=website&utm_campaign=a_zcoursetuf",solink:"",difficulty:"easy",description:"move all zeros to end of the array",},
{_id:"25",title:"Linear Search",qlink:"https://www.codingninjas.com/studio/problems/linear-search_6922070?utm_source=striver&utm_medium=website&utm_campaign=a_zcoursetuf",solink:"",difficulty:"easy",description:"find whether num is present in array",},
{_id:"26",title:"Merge 2 Sorted Array",qlink:"https://www.codingninjas.com/studio/problems/sorted-array_6613259?utm_source=striver&utm_medium=website&utm_campaign=a_zcoursetuf",solink:"",difficulty:"easy",description:"Combine two sorted arrays and elements are union",},
{_id:"27",title:"Traffic",qlink:"https://www.codingninjas.com/studio/problems/traffic_6682625?utm_source=striver&utm_medium=website&utm_campaign=a_zcoursetuf",solink:"",difficulty:"moderate",description:"Return maximum possible length of consecutive vehicles",},
{_id:"28",title:"Find The Single Element",qlink:"https://www.codingninjas.com/studio/problems/find-the-single-element_6680465?utm_source=striver&utm_medium=website&utm_campaign=a_zcoursetuf",solink:"",difficulty:"easy",description:"Find number that occurs once in array",},
{_id:"29",title:"Longest Subarray With Sum K",qlink:"https://www.codingninjas.com/studio/problems/longest-subarray-with-sum-k_6682399?utm_source=striver&utm_medium=website&utm_campaign=a_zcoursetuf",solink:"",difficulty:"easy",description:"Find length of longest subarray whose sum is equals k",},
{_id:"30",title:"Longest of Subarray With Sum K",qlink:"https://www.codingninjas.com/studio/problems/longest-subarray-with-sum-k_5713505?utm_source=striver&utm_medium=website&utm_campaign=a_zcoursetuf",solink:"",difficulty:"moderate",description:"Find length of longest subarray in which sum of elements is equals K",},
      ],
                        [
{_id:"31",title:"Minimum Cost To Make String Valid",qlink:"https://www.codingninjas.com/studio/problems/minimum-cost-to-make-string-valid_1115770?utm_source=striver&utm_medium=website&utm_campaign=a_zcoursetuf",solink:"",difficulty:"moderate",description:"determine the minimum cost to make ‘STR’ valid",},    
{_id:"32",title:"Look-And-Say Sequence",qlink:"https://www.codingninjas.com/studio/problems/look-and-say-sequence_668478?utm_source=striver&utm_medium=website&utm_campaign=a_zcoursetuf",solink:"",difficulty:"easy",description:"integer N, find the Nth term of the sequence",},
{_id:"33",title:"First Occurence of a Pattern in a Text",qlink:"https://www.codingninjas.com/studio/problems/first-occurence-of-a-pattern-in-a-text_8416393?utm_source=striver&utm_medium=website&utm_campaign=a_zcoursetuf",solink:"",difficulty:"moderate",description:"Find first index of text where pat matches a substring of text",},
{_id:"34",title:"Search Pattern",qlink:"https://www.codingninjas.com/studio/problems/stringmatch-rabincarp_1115738?utm_source=striver&utm_medium=website&utm_campaign=a_zcoursetuf",solink:"",difficulty:"moderate",description:"Find all the occurrences of the string ‘pattern’ in ‘text’",},
{_id:"35",title:"Pattern Searching by Z-Algorithm",qlink:"https://www.codingninjas.com/studio/problems/pattern-searching-using-z-algorithm_8395752?utm_source=striver&utm_medium=website&utm_campaign=a_zcoursetuf",solink:"",difficulty:"moderate",description:"return all the indices in sorted order",},
{_id:"36",title:"Search Pattern KMP-Algorithm",qlink:"https://www.codingninjas.com/studio/problems/search-pattern-kmp-algorithm_8416386?utm_source=striver&utm_medium=website&utm_campaign=a_zcoursetuf",solink:"",difficulty:"moderate",description:"Find all occurrences of string ‘pattern’ in ‘text’",},
{_id:"37",title:" Minimum Characters For Palindrome",qlink:"https://www.codingninjas.com/studio/problems/minimum-characters-for-palindrome_893000?utm_source=striver&utm_medium=website&utm_campaign=a_zcoursetuf",solink:"",difficulty:"hard",description:"count of minimum characters to add at front to make string palindrome",},
{_id:"38",title:"Longest Prefix Which is Suffix",qlink:"https://www.codingninjas.com/studio/problems/longest-prefix-which-is-suffix_3146849?utm_source=striver&utm_medium=website&utm_campaign=a_zcoursetuf",solink:"",difficulty:"moderate",description:"Find longest prefix in string which also suffix of string",},
{_id:"39",title:"Count Palindromic Subsequences",qlink:"https://www.codingninjas.com/studio/problems/count-palindromic-subsequences_1062696?utm_source=striver&utm_medium=website&utm_campaign=a_zcoursetuf",solink:"",difficulty:"hard",description:"Find number of non-empty palindromic subsequences",},                        
                      ]]
const totalquestions=()=>{i=0;
        questionsouter.map((item)=>{i=i+item.length});return i}


const result=questionsouter.map((item)=>{i=i+1;return `<div class="border border-primary cream-background container"><h3 class="text-center">${arr[i]}</h3><div class="container1">`+ item.map((item)=>{
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
            <div class="sbtn btn btn-danger btn-outline-success " >
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
document.getElementById(item._id+"q").addEventListener("click",function (){
    window.location.href=item.qlink
        })
document.getElementById(item._id+"m").addEventListener("click",function (){
            mark(item._id)
        })

    });})
console.log("attachment complete")

const mark=(item)=>{
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
    console.log(userdata.status)
    document.getElementById("myalerttext").innerHTML="marked as solved keep solving"
    document.getElementById("myAlert").classList.add("fixed-top")
    document.getElementById("myAlert").classList.remove("d-none")
    mainstatus()
    document.getElementById(item+"c").classList.remove("unsolved-filter")
    document.getElementById(item+"c").classList.add("solved-filter")
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
document.getElementById("signout").addEventListener('click',function (){
    sessionStorage.setItem("isLogin",false)
})


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
