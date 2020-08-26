const someTimesWillHappend= ()=>{
    return new Promise((resolve, reject)=>{
        if (true) {
            resolve('Se logro')
        }else{
            reject('Lo siento')
        }
    })
}

someTimesWillHappend()
 .then(response=> console.log(response))
 .catch(err =>console.log(err))


const someTimesWillHappend2= ()=>{
    return new Promise((resolve,reject)=>{
        if (true) {
            setTimeout(()=>{
                resolve(true)
            },2000)
        }else{
            const error=new Error('Lo siento algo anda mal--intenta mas tarde')
            reject(error)
        }
    })
}


someTimesWillHappend2()
.then(response=>console.log(response))
.catch(err=>console.error(err))


Promise.all([someTimesWillHappend(),someTimesWillHappend2()])
.then(response=>{
    console.log("Array result",response)
})
.catch(err =>{
    console.error(err)
})