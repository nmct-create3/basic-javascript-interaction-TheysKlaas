document.addEventListener( 'DOMContentLoaded', function() {

    console.log( '!Script loaded!' );

handleFloatingLabel();
handleQualityRange(); 
handleDropdownButton();
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

function handleQualityRange (){

    var qualityInput = document.querySelector(".js-quality-input");
    var inputValue = qualityInput.value;
    var rangeHolder = document.querySelector(".js-range-holder");

    //console.log("input: " + qualityInput + ", inputvalue" + inputValue + ", rangeholder: " + rangeHolder);

    qualityInput.addEventListener('input',function(e){
        rangeHolder.style.marginLeft = e.target.value + "%";
        console.log(e.target);
        rangeHolder.setAttribute("data-value", e.target.value);
        //rangeHolder.innerHTML = (e.target.value);
    })

}
function handleDropdownButton() {
    let button = document.querySelector(".js-dropdown-headbutton")



    button.addEventListener("click", function (e) {
        //toogle container
        let container = e.target.nextElementSibling;
        container.classList.toggle("c-dropdown-buttons--visible");

        //verander icon
        e.target.firstElementChild.classList.toggle("c-button-icon--rotate")

    });

}
// function handleDropdownButton (){

//     let button = document.querySelector(".js-button-dd")
//     let buttonlist = document.querySelector(".js-dropdown-list")
//     let ddbutton = document.querySelectorAll(".c-button-dd")
//     ddbutton = Array.from(ddbutton);
//     button.addEventListener("click",function(event){
//         event.preventDefault();
//         // buttonlist.style.display = "block"
//         buttonlist.classList.toggle('c-dropdown-list__open');
        
//     })
//     console.log(ddbutton)
//     console.log("map"+ddbutton.map)
//     ddbutton.map(b=> b.addEventListener("click", function(e){
//         e.preventDefault();
//     }))
    
// }