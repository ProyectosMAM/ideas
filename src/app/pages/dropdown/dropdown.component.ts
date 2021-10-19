import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ICountry } from '../../models/model-interface';
// import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
  // providers: [DataService]
})
export class DropdownComponent implements OnInit {
  public seletedCountry: ICountry = { id: 0, name: '' };
  // public countries: ICountry[] = [];
  public countries: ICountry[] = [
    { id: 1, name: 'India' },
    { id: 2, name: 'USA' },
    { id: 3, name: 'Australia' },
    { id: 4, name: 'Canada' },
  ]

  constructor(private router: Router,) { }

  ngOnInit(): void {
    // this.countries = this.dataService.getCountries();

  }

  onSelect(id: any): void {
    switch (id.value) {
      case '1':
        this.router.navigate(['DualAxes']);
        break;

      default:
        break;
    }


  }


}
