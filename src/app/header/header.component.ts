import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  missionName: string = "Mars 2030";
  rocketName: string = "Plasma Max";
  editingMission: boolean = false;
  editingRocket: boolean = false;
  
  constructor() { }

  ngOnInit() {
  }

  updateMission(updatedName: string): void {
    this.missionName = updatedName;
    this.editingMission = false;
  }

  updateRocket(updatedName: string): void {
    this.rocketName = updatedName;
    this.editingRocket = false;
  }

}
