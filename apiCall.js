 //Get Call 
// $.ajax({
//   url:'https://jsonplaceholder.typicode.com/posts',
//   success: function apiHandle(res) {
//     $('#services').html(JSON.stringify(res));   
//   }
// })
// js Object

let profileDetails = {
  name:'ankit',
  Enroll:'157044680',
  per:'60%'
}

//post call

$.ajax({
  type:'post',
  url:'https://reqres.in/api/users',
  data:profileDetails ,
  success:apiHandle
}
)
function apiHandle(data) {
  $('#services').html(JSON.stringify(data));   
}

 