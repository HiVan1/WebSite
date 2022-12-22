class Student {
    constructor(){
        
    }
    get Speciality() {
        return this.speciality;
    }

    set Speciality(value) {
        if (value > 20) {
            console.log('Слишком длинное название');
        }else if (value < 2){
            console.log('Слишком короткое название');
        }else{
            this.speciality = value;
        }
    }

    get Group() {
        return this.group;
    }

    set Group(value) {
        this.group = value;
        
    }
    get Name() {
        return this.name;
    }

    set Name(value) {
        this.name = value;
    }

    get Email(){
        return this.email;
    }

    set Email(value){
        this.email = value;
    }
    
    // get Phone(){
    //     return this.phone;
    // }

    // set Phone(value){
    //     this.phone = value;
    // }

    addInfirmation(speciality, group){
        this.Speciality = speciality;
        this.Group = group;
    }
}




// document.querySelector('.singInForm').addEventListener('submit', (event) =>{
//     event.preventDefault();

//     User_Student.addInfirmation('cs', 'tr-11');

//     const form = document.querySelector('.singInForm');
//     let inputName = form.elements.singInName.value;
//     let inputPassword = form.elements.singInPassword.value; 
//     User_Student.Name = inputName;
//     User_Student.pas = inputPassword;
//     console.log('Name = ' + inputName);
//     console.log('Pass = ' + inputPassword);  
//     User_Student.showData(); 
//     // window.location.href="/Html/Task.html";
// });