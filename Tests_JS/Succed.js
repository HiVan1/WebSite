class Succed extends Student{

    get Point(){
        return this.point;
    }

    set Point(value) {
        // if (this.point !== 0) {
        //     this.GPA = (this.GPA + value) / 2;
        // }else{
        //     this.GPA = value;
        // }
        // this.GPA = value;
        this.point = value;
    }

    #gpa = 0;
    get GPA(){
        return this.#gpa;
    }

    set GPA(value) {
        if (this.#gpa == 0) {
            this.#gpa = value;
        }else{
            this.#gpa = ((this.#gpa + value) / 2).toFixed(2);
        }
    }

    get StartDate(){
        return this.startDate;
    }

    set StartDate(vlaue){
        this.startDate = value;
    }

    addPoint(value){
        this.Point = value;
        this.GPA = value;
    }


    showData() {
        console.log('======= DATA CLASS =======');
        console.log('Name = ' + this.Name);
        console.log('Email = ' + this.Email);
        // console.log('Phone = ' + this.Phone);
        console.log('Speciality = ' + this.Speciality);
        console.log('Group = ' + this.Group);
        console.log('Point = ' + this.Point);
        console.log('GPA = ' + this.GPA);
    }
}


// let succedC = new SuccedC();
// succedC.Name = 'Ivan Zhuravlev';
// succedC.addInfirmation('CS', 'TR-11')

// succedC.addPoint(10);
// succedC.showData();
// succedC.addPoint(5);
// succedC.showData();
// succedC.addPoint(9);
// succedC.showData();