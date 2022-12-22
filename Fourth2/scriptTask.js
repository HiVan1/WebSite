


let userAnswerDragAndDrop = [];
function dragAndDrop(){
    let elems = document.querySelectorAll('.elem'); // Элменты которые можно перетягивать
    let parent = document.querySelector('#parent'); // Родитель в которого можно перетягивать

    elems.forEach(function(elem, index) {
        elem.addEventListener('dragstart', function(event) {
            event.dataTransfer.setData('key', index)
        });
    });

    parent.addEventListener('dragover', function(event) {
        event.preventDefault();
    });

    // Правельный порядок слов в вопросе драг энд дроп
    // let rightAnswerDragAndDrop = ['1', '0', '2'];
    let j = 0;
    parent.addEventListener('drop', function(event) {
        userAnswerDragAndDrop[j] = event.dataTransfer.getData('key')
        console.log(userAnswerDragAndDrop[j]);
        this.appendChild(elems[userAnswerDragAndDrop[j]]);
        j++
        
    });

    // // ====== Команды элемента ======
    // dragstart - отслеживание начала действия
    // dragend - отслеживание конца действия
    // drag - работает во время самого перетягивания

    // // ====== Команды родителя ======
    // dragenter - срабатывает когда курсор зашел на родителя с удержанным элементом
    // dragleave - срабатывает когда элемент покидает родителя
    // dragover - работает пока курсор находиться в родителе
    // drop - отслеживает момент отпуска элемента должен быть обязательно (parent.addEventListener('dragover', function(event) { event.preventDefault();});)
}

document.addEventListener('DOMContentLoaded', function () {
    dragAndDrop();
    let student_user = new Succed();
    student_user.addInfirmation('CS', 'TR-11');

    const formTest = document.querySelector('.formTest');
    formTest.addEventListener('submit', formSend);


    async function formSend(event){
        event.preventDefault();
        // console.log('=========================  ' + dragAndDropGo);

        let er = formValidate(formTest);

        checkCorrectAnswers(formTest);

        let formData = new FormData(formTest);

        if (er === 0){
            alert('Все поля заполнены');
            student_user.showData();
            outputRatingForUser();
        }else{
            alert('Заполните обязательные поля');
        }
    }


    // ==================== Verify required fields ====================

    function formValidate(formTest){
        let er = 0;
        let formReq = document.querySelectorAll('._req');

        for(let i = 0; i < formReq.length; i++){
            const input = formReq[i];
            formRemoveError(input);

            if (input.classList.contains('_email')) {
                if (validationEmailInput(input)) {
                    formAddError(input);
                    er++;
                }else{
                    student_user.Email = input.value;
                }
            }else if (input.classList.contains('_name')){
                if (validationNameInput(input)) {
                    formAddError(input);
                    er++;
                }else{
                    student_user.Name = input.value;
                }
            }
            else{
                if (input.value === '') {
                    formAddError(input);
                    er++;
                }
            }
        }
        return er;
    }
    function formAddError(input) {
        input.parentElement.classList.add('_error');
        input.classList.add('_error');
    }
    function formRemoveError(input) {
        input.parentElement.classList.remove('_error');
        input.classList.remove('_error');
    }

    function validationEmailInput(email){
        return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value)
    }

    function validationNameInput(name){
        return !/^[a-zA-Z0-9_]{4,15}$/.test(name.value)
    }

    // function validationPhoneInput(phone){
    //     let phoneformat = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
    //     if (phoneformat.test(phone)) {
    //         return true;
    //     }else{
    //         return false;
    //     }
    // }


    // ==================== Check correct answers ====================    
    let rating = 0;
    function checkCorrectAnswers(form){
        let section = form.querySelectorAll('.section');
        let i = 0;
        
    // Далее в каждой секции считываем что ввел пользователь путем взятия из elements значение по name
        let userAnswer = form.elements.radioQ1.value;
        outputRating(section[i++].dataset.right, userAnswer);

        userAnswer = form.elements.radioQ2.value;
        outputRating(section[i++].dataset.right, userAnswer);

        userAnswer = form.elements.radioQ3.value;
        outputRating(section[i++].dataset.right, userAnswer);
    
        userAnswer = form.elements.radioQ4.value;
        outputRating(section[i++].dataset.right, userAnswer);

        userAnswer = form.elements.radioQ5.value;
        outputRating(section[i++].dataset.right, userAnswer);

        userAnswer = form.elements.myselect1.value;
        outputRating(section[i++].dataset.right, userAnswer);

        userAnswer = form.elements.myselect2.value;
        outputRating(section[i++].dataset.right, userAnswer);

        userAnswer = form.elements.myselect3.value;
        outputRating(section[i++].dataset.right, userAnswer);

        // В data- у секции которая текущая по счету, считываем данные в который записано клличество правильных ответов
        let datasetCheckbox = section[i].dataset.right;
        // Считываем кол-во отмеченных боксов.
        let checkBoxUser = section[i].querySelectorAll('input[type="checkbox"]:checked');
        // Считываем кол-во всех боксов.
        let lengthCheckbox = section[i++].querySelectorAll('input[type="checkbox"]').length;
        outputRatingCheckbox(datasetCheckbox, checkBoxUser, lengthCheckbox);


        datasetCheckbox = section[i].dataset.right;
        checkBoxUser = section[i].querySelectorAll('input[type="checkbox"]:checked');
        lengthCheckbox = section[i++].querySelectorAll('input[type="checkbox"]').length;
        outputRatingCheckbox(datasetCheckbox, checkBoxUser, lengthCheckbox);

        if (JSON.stringify(userAnswerDragAndDrop) == JSON.stringify(['1', '0', '2'])) {
            console.log('ok ok ok ok ok ok ok ok ')
            rating ++;
        }
        student_user.addPoint(rating);
        // form.reset();
        rating = 0;
    }


    function outputRatingCheckbox (datasetCheckbox, checkBoxUsers, lengthCheckbox) {
        // Метод для выявление балла в checkboxs
        let result = 0;
        let point = 1 / datasetCheckbox; // стоимость одного правильного ответа
        // Если отмечены все боксы то пользователь получит 0 баллов за это задание
        if (checkBoxUsers.length !== lengthCheckbox) {
            for (let i = 0; i < checkBoxUsers.length; i++) {
                // Сравнивание data- из отмеченных боксов с value этого же бокса
                if (checkBoxUsers[i].dataset.right == checkBoxUsers[i].value) {
                    result += point;
                }else{
                    if ((result - point) >= 0) {
                        result -= point;
                    }
                }
            }
            rating += result;
        }
    }
    
    function outputRating (correct, user) {
        if (correct == user) {
            rating++;
        }
    }
    
    function outputRatingForUser () {
        // Метод для вывода результата теста в div
        let out = document.querySelector('.uotputRatingUsers');
        out.classList.add('uotputRatingUser')
    
        document.querySelector('.yourRating').innerHTML = 'Your rating: ' + student_user.Point.toFixed(1);
        document.querySelector('.GPA').innerHTML = 'Your GPA: ' + student_user.GPA;
    }
});