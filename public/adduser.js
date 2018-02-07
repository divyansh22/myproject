function addUser (firstname, lastname, username, password,done) {
    console.log("hi")
    $.post('/routes/users', {
        
        firstname: firstname,
        lastname: lastname,
        username: username,
        password: password
    }, function (data) {
        done(data)
    })
}