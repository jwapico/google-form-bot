

function getNumber(){
    const num = Math.floor(1000000000 + Math.random() * 9000000000)
    // console.log(num);
    return String(num);
}

export{getNumber};