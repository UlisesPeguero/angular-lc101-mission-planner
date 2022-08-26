import { Component, OnInit } from '@angular/core';

type CrewMember = {
  name: string;
  firstMission: boolean;
};
@Component({
  selector: 'app-crew',
  templateUrl: './crew.component.html',
  styleUrls: ['./crew.component.css']
})
export class CrewComponent implements OnInit {

  crew: CrewMember [] = [
    {name: "Eileen Collins", firstMission: false},
    {name: "Mae Jemison", firstMission: false},
    {name: "Ellen Ochoa", firstMission: true}
  ];
  memberBeingEdited: CrewMember;

  constructor() { }

  ngOnInit() {
  }

  add(memberName: string, isFirst: boolean): void {
    if(!this.existsInCrew(memberName)) this.crew.push({name: memberName, firstMission: isFirst});
  }

  remove(member: CrewMember): void {
    let index = this.crew.indexOf(member);
    this.crew.splice(index, 1);
  }

  edit(member: CrewMember): void  {
    this.memberBeingEdited = member;
  }
  
  save(name: string, member: CrewMember) {
    member['name'] = name;
    this.memberBeingEdited = null;
  }

  existsInCrew(name: string): boolean {
    return this.crew.find(member => member.name === name) !== undefined;
  }
}
