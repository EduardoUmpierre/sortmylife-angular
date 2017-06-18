import { Component, OnInit } from '@angular/core';
import { Series } from 'app/series/series';
import { SeriesService } from 'app/series/series.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-series-form',
    templateUrl: './series-form.component.html',
    styleUrls: ['./series-form.component.sass']
})
export class SeriesFormComponent implements OnInit {
    editing = false;
    id: number;
    series: Series;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private service: SeriesService
    ) { }

    ngOnInit() {
        this.id = this.route.snapshot.params['id'];

        if (isNaN(this.id)) {
            this.series = new Series();
        } else {
            this.editing = true;
            this.series = Object.assign({}, this.service.getOneById(this.id));
        }
    }

    onSubmit() {
        if (this.editing) {
            this.updateSeries();

            this.editing = false;
        } else {
            this.newSeries();
        }
    }

    updateSeries() {
        this.service.update(this.series);

        this.router.navigate(['inicio']);
    }

    newSeries() {
        this.service.add(this.series);

        this.router.navigate(['inicio']);
    }
}