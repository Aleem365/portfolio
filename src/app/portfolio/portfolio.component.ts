import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css'],
})
export class PortfolioComponent implements OnInit {
  potArr = [
    {
      name: 'Web Design',
      dis: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, ipsum.',
      image: './assets/portfolio1.jpg',
    },
    {
      name: 'GraPhic Design',
      dis: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, ipsum.',
      image: './assets/portfolio2.jpg',
    },
    {
      name: 'Web Development',
      dis: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, ipsum.',
      image: './assets/portfolio3.jpg',
    },
    {
      name: 'Networking',
      dis: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, ipsum.',
      image: './assets/portfolio4.jpg',
    },
    {
      name: 'Mobile App Development',
      dis: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, ipsum.',
      image: './assets/portfolio5.jpg',
    },
    {
      name: 'Network Marketing',
      dis: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, ipsum.',
      image: './assets/portfolio6.jpg',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
