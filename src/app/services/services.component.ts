import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css'],
})
export class ServicesComponent implements OnInit {
  serArr = [
    {
      name: 'Web Development',
      dis: `Lorem ipsum dolor sit, amet consectetur adipisicing elit.
       Omnis numquam assumenda rerum, cumque hic ad dolore? Voluptas ipsa consequatur earum.`,
      icon: 'bx-code-alt',
    },
    {
      name: 'Graphic Design',
      dis: `Lorem ipsum dolor sit, amet consectetur adipisicing elit.
       Omnis numquam assumenda rerum, cumque hic ad dolore? Voluptas ipsa consequatur earum.`,
      icon: 'bxs-paint',
    },
    {
      name: 'Bologger',
      dis: `Lorem ipsum dolor sit, amet consectetur adipisicing elit.
       Omnis numquam assumenda rerum, cumque hic ad dolore? Voluptas ipsa consequatur earum.`,
      icon: ' bxs-book',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
