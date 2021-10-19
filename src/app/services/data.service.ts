import { Injectable } from '@angular/core';
import { ICountry } from '../models/model-interface';

@Injectable()
export class DataService {
  private countries: ICountry[] = [
    { id: 1, name: 'India' },
    { id: 2, name: 'USA' },
    { id: 3, name: 'Australia' },
    { id: 4, name: 'Canada' },
  ]

  getCountries(): ICountry[] {
    return this.countries;
  }

  constructor() { }
}

