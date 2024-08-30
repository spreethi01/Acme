function sumNumber(){
    let arr=[2,3,7,10,12];
    let sumnum=0;
    for(let i=0;i<arr.length;i++){
        sumnum+=arr[i];
    }
    return sumnum;
}

console.log(sumNumber());