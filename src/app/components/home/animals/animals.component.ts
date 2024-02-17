import { Component, Input, OnInit } from '@angular/core';
import { IPet } from 'src/app/interfaces/i-pets';

@Component({
  selector: 'app-animals',
  templateUrl: './animals.component.html',
  styleUrls: ['./animals.component.css']
})
export class AnimalsComponent{
  @Input() animalData: IPet;
}
