import { Component, OnInit } from '@angular/core';
import { IServices } from 'src/app/interfaces/i-services';
import { ITeam } from 'src/app/interfaces/i-team';
import { ServicesService } from 'src/app/services/services.service';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent  implements OnInit{
  public team  : ITeam[] = [];
  public services  : IServices[] = [];

  constructor(private _navTeam: TeamService, private _navService: ServicesService) { }

  ngOnInit(): void {
    this._navTeam.getTeam().subscribe(data => this.team = data);
    this._navService.getServices().subscribe(data => this.services = data);
  }
}
