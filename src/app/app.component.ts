import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '5 INF B 2021/22';

  // creazione lista studenti
  studentList = [
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
}
