import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
	selector: 'app-experiments',
	templateUrl: './experiments.component.html',
	styleUrls: ['./experiments.component.css'],
})
export class ExperimentsComponent implements OnInit {
	@ViewChild('newExperiment') newExperiment;

	experiments: string[] = [];
	indexBeingEdited: number;

	constructor() {}

	ngOnInit() {}

	getIndex(name: string): number {
		return this.experiments.indexOf(name);
	}

	add(name: string): void {
		if (this.getIndex(name) !== -1) return;
		this.experiments.push(name);
		this.newExperiment.nativeElement.value = '';
	}

	remove(index: number): void {
		this.experiments.splice(index, 1);
	}

	edit(index: number): void {
		this.indexBeingEdited = index;
	}

	save(name: string): void {
		if (this.indexBeingEdited >= this.experiments.length) return;
		this.experiments[this.indexBeingEdited] = name;
		this.indexBeingEdited = null;
	}
}
