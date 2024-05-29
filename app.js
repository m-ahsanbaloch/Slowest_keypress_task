


function keyLong(event){
    var count = 1
    //  console.log(event)
    if(event.keyCode >= "65" && event.keyCode <=  "90"){
        console.log("upper")
        var length = document.getElementById('a')
        for(i = 0 ; i < length.value.length ; i++){

            count++
        }
        document.getElementById('display').innerHTML = `you press ${event.key} ${count} times`
    
}
// console.log(event)
}

document.getElementById('a').addEventListener( "keydown" ,function(){
    keyLong(event)
})




    
