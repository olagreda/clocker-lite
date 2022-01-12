/*
function a (){
    alert('siemna')
}
*/
$('.submit-button').on('click', function(event){
    var checkEmail = $("#check-email")
    var checkPassword = $("#check-password")
    console.log(checkEmail.val())
    let result = checkEmail.val().includes("@");
    console.log(result)

    if (checkEmail.val().length<3 || checkEmail.val().length>30 || result==false) {
        checkEmail.removeClass('correct');
        checkEmail.addClass('wrong');
        return;
    }
    checkEmail.removeClass('wrong');
    checkEmail.addClass('correct');
    if (checkPassword.val().length<7){
        checkPassword.addClass('wrong');
    }

})