import { Component } from '@angular/core';
import { IAboutFood } from 'src/app/interfaces/i-about-food';
import { IPet } from 'src/app/interfaces/i-pets';
import { AboutFoodService } from 'src/app/services/about-food.service';
import { PetService } from 'src/app/services/pet.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  public animals: IPet[]=[];
  public abouts: IAboutFood[]=[];

  constructor(private _petService: PetService, private _aboutfoodService: AboutFoodService) { }

  ngOnInit(): void{
    this._petService.getPets().subscribe(data => this.animals = data);
    this._aboutfoodService.getAbouts().subscribe(data => this.abouts = data);
  }
}
