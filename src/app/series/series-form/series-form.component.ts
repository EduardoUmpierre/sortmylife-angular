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
    errorMessage: any;

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
            this.service.getOneById(this.id).subscribe(
                series => this.series = Object.assign({}, series),
                error => this.errorMessage = error
            );
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
        this.service.update(this.series).subscribe(
            series => {
                console.log(series);
            },
            error => this.errorMessage = error
        );

        this.router.navigate(['livro/' + this.series.id]);
    }

    newSeries(): void {
        this.service.create(this.series).subscribe(
            series => {
                console.log(series);
            },
            error => this.errorMessage = error
        );

        this.router.navigate(['inicio']);
    }
}