import { Component, Input, OnInit } from '@angular/core';
import { ITeam } from 'src/app/interfaces/i-team';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent{
  @Input() teamData: ITeam;
}
