import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-spread',
  templateUrl: './spread.component.html',
  styleUrls: ['./spread.component.scss']
})
export class SpreadComponent implements OnInit {

  constructor() {

    const foo = {
      headerName: 'lalal',
      children: 'lolo',
      children1: 'lolo',
      children2: 'lolo',
      children3: 'lolo',
    }

    const { headerName, children, ...pepe } = foo
    console.log(pepe);
    console.log({
      algo: 'algo',
      ...pepe
    });

  }

  ngOnInit(): void {
  }

}
