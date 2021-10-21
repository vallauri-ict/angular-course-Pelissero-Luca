import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild("txtName") txtName!: ElementRef;

  title = '5 INF B 2021/22';

  // creazione lista studenti
  studentRepository = [
    { name: 'Ettore Esposito', hobby: 'Karate', gender: 'M', isPro: false },
    { name: 'Luca Pelissero', hobby: 'Arrampicata', gender: 'M', isPro: false },
    { name: 'Bianca Teleman', hobby: 'Volley', gender: 'F', isPro: false },
    { name: 'Paolo Giordano', hobby: 'Volley', gender: 'M', isPro: false },
    { name: 'Michele Ghisolfi', hobby: 'Judo', gender: 'M', isPro: false },
    { name: 'Veronico Galvagno', hobby: 'Paddle', gender: 'F', isPro: false },
    { name: 'Chiara Pelissero', hobby: 'Paddle', gender: 'F', isPro: false },
    { name: 'Federico Mameli', hobby: 'Danza', gender: 'M', isPro: false },
    { name: 'Lorenzo Cravero', hobby: 'Calcio', gender: 'M', isPro: false },
    { name: 'Marta Baudracco', hobby: 'Volley', gender: 'F', isPro: false },
    { name: 'Edoardo Ababei', hobby: 'Palestra', gender: 'M', isPro: false },
    { name: 'Ivan Anjelovski', hobby: 'Palestra', gender: 'M', isPro: false }
  ]

  hobbies = ['Karate', 'Paddle', 'Volley', 'Tennis', 'Soccer'];

  studentList: any[] = [];

  studentName: string = "";
  studentGender: string = "F";
  studentHobbie: string = "";

  constructor() {
    for (let i = 0; i < 4; i++) {
      let num = Math.floor(Math.random() * this.studentRepository.length)
      let dummyStudent = this.studentRepository[num];
      this.studentList.push(dummyStudent);
      this.studentRepository.splice(num, 1);
    }
  }

  onAddStudent() {
    let newStudent = { name: this.studentName, hobby: this.studentHobbie, gender: this.studentGender, isPro: false }
    this.studentList.push(newStudent);
    this.studentName = "";
    this.txtName.nativeElement.focus();
  }
}
