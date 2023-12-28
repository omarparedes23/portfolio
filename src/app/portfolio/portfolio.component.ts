import { Component } from '@angular/core';
interface Project {
  title: string;
  description: string;
  link: string;
  backend?: string;
  base?: string;
  frontend?: string;
}

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss',
})
export class PortfolioComponent {
  title = 'portfolio';
  projects1: Project[] = [
    {
      title: 'EasyTable - Système de réservation de restaurant',
      description: 'Projet de fin de formation',
      backend: 'Java17, Spring boot3.2, déployé sur Apache Tomcat10/AWS',
      base: 'Mysql 8 sur AWS',
      frontend: 'Angular 17, sur AWS.',
      link: 'https://easytable.zapto.org',
    },
  ];

  projects: Project[] = [
    {
      title: 'Transformez une maquette en site web avec HTML & CSS',
      description: 'Projet 1 - HTML & CSS',
      link: 'https://omarparedes23.github.io/projet2openclassrooms/',
    },
    {
      title: 'Dynamisez une page web avec des animations CSS',
      description: 'Projet 2 - Animation CSS',
      link: 'https://omarparedes23.github.io/projet3openclassrooms/',
    },
    {
      title: 'Optimisez un site web existant',
      description: 'Projet 3 - SEO, CSS, JavaScript',
      link: 'https://omarparedes23.github.io/projet4openclassrooms/',
    },
    {
      title: 'Construisez un site e-commerce en JavaScript',
      description: 'Projet 4 - Java Script, HTML, Back-End Node JS Sur AWS',
      link: 'https://omarparedes23.github.io/projet5openclassrooms/',
    },
    {
      title:
        'Construisez une API sécurisée pour une application davis gastronomiques',
      description:
        'Projet 5 - Node JS, Java Script, MongoDB Atlas, Angular, Back-End sur AWS',
      link: 'https://omarparedes23.github.io/projet6openclassrooms/',
    },
    {
      title: 'Créez une application web de location immobilière avec React',
      description: 'Projet 6 - React, Type Script, HTML, CSS',
      link: 'https://omarparedes23.github.io/projet7/',
    },
  ];
}
