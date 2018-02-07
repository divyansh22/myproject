$(function () {
    let firstname = $('#firstname')
    let lastname = $('#lastname')
    let username = $('#username')
    let password=$('#password')
  
    $('#submit').click(function (e) {
      	  e.preventDefault();
        addUser(
            firstname.val(),
            lastname.val(),
            username.val(),
            password.val(),
            function (user) {
                window.alert("Added " + user.firstname + " to Database")
            }
        )


    })

})
