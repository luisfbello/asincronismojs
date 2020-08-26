const doSomeTimeAsync= ()=>{
    return new Promise((resolve,rejetc)=>{
        (true)
        ? setTimeout(()=>{resolve('Do sometime Async')},3000)
        :rejetc(new Error("Lo sentimos A ocurrido un error"))
    })
}


const doSometime = async ()=>{
    const sometime =await doSomeTimeAsync()
    console.log(sometime)
}

console.log('Before')
doSometime()
console.log('after')


const doSometimeOther= async () =>{
    try {
        const sometime =await doSomeTimeAsync()
        console.log(sometime)
    } catch (error) {
        console.log(error)
    }
}


console.log('Before 2')
doSometimeOther()
console.log('after 2')
