//map-excutes callback for each array element and returns new array

let priceUsd=[20,25,30]
let priceInr=priceUsd.map(x=>x*83)


priceInr=priceUsd.map(convert)

function convert(val){
    return val*83
}

console.log(priceInr)

const input = [{name:'john',age:15},
                {name:'Radha',age:45},
                {name:'Kaushik',age:12},
                {name:'Anu',age:21},
                {name:'Divya',age:26}]

const ages=input.map(x=>x.age)
console.log(ages)


//filter-returns new array by checking each value of original arr using call back fn

let cost = [35,234,14,34,54,123]

let lessthan100=cost.filter(x=> x<100)
console.log(lessthan100)

//reduce-excutes reducer callback and returns accumlated result
cost = [35,234,34,54,123]
let carttot=cost.reduce((total,el)=>total+el)
console.log(carttot)

arr2d=[
        ['a','b','c'],
        ['c','d','f'],
        ['d','f','g'],
    ]

//result={a:1,b:2.....}
let count=arr2d.flat().reduce(
    (accumulator,currval)=>{
        if(accumulator[currval])
            accumulator[currval]++
        else
            accumulator[currval]=1
        return accumulator
    },{});
    console.log(count)

    //Returning functions and closure
    let a = 100

    function func1(){
        console.log('a is ',a)
    }
    func1()
    a = 300
    func1()

    //example
    function outer(name1){
        let outervariable = 'Bread'
        function inner(){
            let innerVariable='Butter'
            console.log('inner Variable ',innerVariable)
            console.log('outer variable ',outervariable)
            console.log('hi ',name1)
        }
        return inner
    }
    
    let call1=outer('deepa')
    call1()

    let call2=outer('naveen')
    call2()
    

    //make adder
    function makeAdder(x){
        return function(y){
            return x+y
        }
    }
    let add5=makeAdder(5)
    console.log(add5(24))

    let add50=makeAdder(100)
    console.log(add50(23))

    //set - store only unique values
    let arr=[1,1,2,3,4,4,5,5,5,6,6,7,7]
    let setarr=new Set(arr)
    console.log(setarr)

    let myset

    //Map
    let map1 = new Map
    map1.set('a',1)
    map1.set('b',2)
    map1.set('a',3)
    console.log(map1)

//synchronous
/*console.log("hi")
function sync() {
    console.log('step 1')
    console.log('step 2')
    console.log('step 3')
}
sync()

setTimeout(()=>console.log('step 1'),4000)
setTimeout(()=>console.log('step 2'),2000)
setTimeout(()=>console.log('step 3'),1000)   

for(let i=0;i<=6;i++){
    console.log(i)
}*/

const tatkalBook = new Promise((resolve,reject)=>{
    let bookingSuccess = true
    if(bookingSuccess)
    resolve(850)
    else
    reject()
})



tatkalBook.then((amt)=>console.log(`thanks i Hve transfered Rs.${amt}`))
.catch(()=>console.log("thanks"))


function tosscoin(){
    return new Promise((resolve,reject) =>{
        const rand=Math.floor(Math.random()*2)
        if(rand==0)
        resolve()
        else
        reject()
    })
}

// tosscoin().then(()=>console.log("congratz its head"))
// .catch(()=>console.log("it tail"))

let reachA = new Promise((resolve,reject)=>{
    const reached =true
    if(reached)
    setTimeout(resolve,3000,'reached')
    else
    reject('not reached')
})
let reachB = new Promise((resolve,reject)=>{
    const reached =true
    if(reached)
    setTimeout(resolve,2000,'B reached')
    else
    reject('B not reached')
})

// Promise.all([reachA,reachB])
// .then((message)=>console.log(message))
// .catch((message)=>console.log)

//Error handling



//Exception Handling
try{
    // num = prompt("enter a number")
    if(isNaN(num))
    throw "Enter a valid number"
    console.log(num**2)
}
catch(error){
    console.log(error)
}

//async & await

// async function fb(){
//     return 'Hi'
// }

// console.log(fb())

//fb().then((msg)=>console.log(msg))

// async function asyncstatus(){
//     console.log('Hi....')
//     res=await reachA
//     console.log(res)
//     console.log('bye')
//}

//asyncstatus()

//json-javascript object notation
let json6=`[
    {

        "stock":"tcs",
        "price":234
    },
    {
        "stock":"cts",
        "price":324
    }
]`
let parsed=JSON.parse(json6)
console.log(parsed)
console.log(JSON.stringify(parsed))

//API-Application Programming Interface
/*fetch('https://official-joke-api.appspot.com/jokes/programming/random')
.then((res)=>res.json())
.then((msg)=>console.log(msg[0].setup,msg[0].punchline))
.catch((err)=>console.log(err))*/

fetch('https://api-thirukkural.vercel.app/api?num=45',{
    method:'POST'
})
.then(res=>(res.json()))
.then(msg=>console.log(msg.line1,msg.line2,msg.tam_exp))
.catch(err=>console.log(err))