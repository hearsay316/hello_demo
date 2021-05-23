export function getlist(){
    return new Promise((resolve) => {
        setTimeout(function (){
            resolve({data:[1,2,3,6,]})
        })
    })
}
