import { Component } from '@angular/core';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrl: './cv.component.scss',
})
export class CvComponent {
  name = 'Omar Paredes';
  title = 'Ingénieur Informatique';
  phoneNumber = '0641813671';
  email = 'omarparedes23@gmail.com';
  softSkills = ['Comunicación', 'Trabajo en equipo', 'Resolución de problemas'];
  hardSkills = ['JavaScript', 'Python', 'SQL'];
  languages = ['Anglais', 'Espagnol', 'Francais'];

  education =
    'BAC+5 Électronique, Énergie électrique, Automatique, Parcours Ingénierie des Systèmes Temps Réel';
  experience = 'Ingénieur Développement - Ausy Toulouse';
  // Otros datos de formación y experiencia laboral
}
