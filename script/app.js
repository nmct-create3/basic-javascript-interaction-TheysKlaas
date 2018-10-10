document.addEventListener( 'DOMContentLoaded', function() {

    console.log( '!Script loaded!' );

handleFloatingLabel();
});

function handleFloatingLabel (){
    let input = document.querySelector(".js-name-input");
        label = document.querySelector(".js-floating-label");
        console.log("label" + label);
        console.log("input" + input)
    input.addEventListener('blur',function(){
        if(input.value)
        {
            label.classList.add('is-floating')
        }
        else
        {
            label.classList.remove('is-floating')
        }
    })
}

function handlePasswordSwitcher(){
    var passwordInput = document.querySelector(".js-password-input");
    //var passwordToggle = document.querySelector(".js-password-toggle-checkbox");

    if (passwordInput.type === "password") {
        passwordInput.type = "text";
    } else {
        passwordInput.type = "password";
    }
}
