import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
	selector: 'app-equipment',
	templateUrl: './equipment.component.html',
	styleUrls: ['./equipment.component.css'],
})
export class EquipmentComponent implements OnInit {
	@ViewChild('newEquipment') newEquipment;

	equipment: string[] = ['Example', 'Example 2'];
	indexBeingEdited: number;

	constructor() {}

	ngOnInit() {}

	getIndex(equipment: string): number {
		return this.equipment.indexOf(equipment);
	}

	add(equipment: string): void {
		if (this.getIndex(equipment) === -1) {
			this.equipment.push(equipment);
			this.newEquipment.nativeElement.value = '';
		}
	}

	remove(index: number): void {
		if (index < this.equipment.length) this.equipment.splice(index, 1);
	}

	edit(index: number): void {
		this.indexBeingEdited = index;
	}

	save(name: string): void {
		this.equipment[this.indexBeingEdited] = name;
		this.indexBeingEdited = null;
	}
}
