// function keyLong(event) {
//   var count = 1;
//   if (event.keyCode) {
//     var length = document.getElementById("a");
//     for (i = 0; i < length.value.length; i++) {
//       count++;
//     }
//     document.getElementById(
//       "display"
//     ).innerHTML = `You Pressed <b>(${event.key})</b> ${count} times`;
//   }
// }
// function abc(event) {
//   document.getElementById("a").value = "";
// }

// document.getElementById("a").addEventListener("keydown", function () {
//   keyLong(event);
// });
// ========================
// ========================

  var username = document.getElementById('userName')
  var email = document.getElementById('email')
  var password = document.getElementById('password')

  function submit(event){
    var user = {
      name: username.value,
      email: email.value,
      password: password.value

    }
    console.log(user)
    saveItems()
    function saveItems(event){
      localStorage.setItem("data",JSON.stringify(user))
      // console.log(username.value , password.value ,email.value)
      // localStorage.setItem("data",username.value)
      // localStorage.setItem("data1",password.value)
      // localStorage.setItem("data2",email.value)
      getItems()
    }
  }
  function getItems(event){
    JSON.parse(localStorage.getItem("data"))
    // console.log(localStorage.getItem('data'))
    console.log("test")
  }