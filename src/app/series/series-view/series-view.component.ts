import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Series } from 'app/series/series';

import { SeriesService } from '../series.service';
import { ReadedSeriesService } from '../readed-series.service';
import { FavoriteSeriesService } from '../favorite-series.service';
import { WantToReadSeriesService } from '../want-to-read-series.service';

@Component({
  selector: 'app-series-view',
  templateUrl: './series-view.component.html',
  styleUrls: ['./series-view.component.sass']
})
export class SeriesViewComponent implements OnInit {
    id: number;
    series: Series;
    readed: boolean;
    favorite: boolean;
    wantToRead: boolean;
    private errorMessage: any;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private service: SeriesService,
        private readedSeriesService: ReadedSeriesService,
        private favoriteSeriesService: FavoriteSeriesService,
        private wantToReadSeriesService: WantToReadSeriesService
    ) { }

    ngOnInit() {
        this.route.params.subscribe(params => {
            this.id = params['id'];
            this.service.getOneById(this.id).subscribe(
                series => this.series = series,
                error => this.errorMessage = <any>error
            );
        });
    }

    toggleReaded() {
        if (this.readed) {
            this.readedSeriesService.delete(this.id);
        } else {
            this.readedSeriesService.add(this.series);
        }

        this.readed = !this.readed;
    }

    toggleFavorite() {
        if (this.favorite) {
            this.favoriteSeriesService.delete(this.id);
        } else {
            this.favoriteSeriesService.add(this.series);
        }

        this.favorite = !this.favorite;
    }

    toggleWantToRead() {
        if (this.wantToRead) {
            this.wantToReadSeriesService.delete(this.id);
        } else {
            this.wantToReadSeriesService.add(this.series);
        }

        this.wantToRead = !this.wantToRead;
    }

    delete() {
        if (this.confirm()) {
            this.service.delete(this.id).subscribe(
                book => {
                    console.log(book);
                },
                error => this.errorMessage = error
            );
            this.router.navigate(['inicio']);
        }
    }

    confirm() {
        if (!confirm('Você quer deletar a série "' + this.series.title + '"?')) {
            return false;
        }

        return true;
    }
}
