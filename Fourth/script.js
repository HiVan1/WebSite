document.querySelector('.b-1').addEventListener('click', ()=>{
    let dataText = document.querySelector('.i-1').value;
    document.querySelector('.out-1').innerHTML = 'Hello ' + dataText;
});

document.querySelector('.b-2').addEventListener('click', ()=>{
    let dataNumber = +document.querySelector('.i-2').value;
    document.querySelector('.out-2').innerHTML = 'You age: ' + dataNumber;
});

document.querySelector('.b-3').addEventListener('click', ()=>{
    let datacolor = document.querySelector('.i-3').value;
    // document.getElementById('#colorBlock')
    document.querySelector('.out-3').innerHTML = 'Color: ' + datacolor;
});

document.querySelector('.b-4').addEventListener('click', ()=>{
    let dataDate = document.querySelector('.i-4').value;
    document.querySelector('.out-4').innerHTML = 'Today:  ' + dataDate;
});

document.querySelector('.i-5').addEventListener('input', ()=>{
    let dataRange = document.querySelector('.i-5').value;
    document.querySelector('.out-5').innerHTML = 'Weight:  ' + dataRange;
});

document.querySelector('.b-6').addEventListener('click', ()=>{
    let dataRange = document.querySelector('.i-6').value;
    if (document.querySelector('.i-6').checked){
        document.querySelector('.out-6').innerHTML = dataRange;
    }
    else{
        document.querySelector('.out-6').innerHTML = '';
    }
});

document.querySelector('.b-7').addEventListener('click', ()=>{
    // let data = document.querySelector('.i-7').value;
    let radio = document.querySelectorAll('.i-7');
    for (let i = 0; i < radio.length; i++){
        if (radio[i].checked) {
            data = radio[i].value;
            break;
        }
    }
    document.querySelector('.out-7').innerHTML = data;
});

document.querySelector('.b-8').addEventListener('click', ()=>{
    let dataText = document.querySelector('.i-8').value;
    document.querySelector('.out-8').innerHTML = 'Your password ' + dataText;
});


document.querySelector('.b-9').addEventListener('click', ()=>{
    let dataText = document.querySelector('.select').value;
    document.querySelector('.out-9').innerHTML = 'Your answer ' + dataText;
});

// document.querySelector('.singInForm').addEventListener('submit', (event)=>{
//     event.preventDefault();
//     const form = document.querySelector('.singInForm');
//     // console.log(form.elements.myCheckbox.value);
//     let userName = form.elements.singInName.value;
//     const userPassword = form.elements.singInPassword.value;
//     document.querySelector('.outPutNameUser').innerHTML = 'Hello! ' + userName;
// });




function makeUser(name, password){
    return {
        name: name,
        password: password,
    };
}



document.querySelector('.singInForm').addEventListener('submit', (event)=>{
    event.preventDefault();
    const form = document.querySelector('.singInForm');
    // console.log(form.elements.myCheckbox.value);
    let userName = form.elements.singInName.value;
    let userPassword = form.elements.singInPassword.value;
    document.querySelector('.outPutNameUser').innerHTML = 'Hello! ' + userName;

    let user = makeUser(userName, userPassword);
    console.log('User Name = ' + user.name);
    console.log('User Pasw = ' + user.password);

});