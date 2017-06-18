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
            this.series = this.service.getOneById(this.id);
            this.readed = this.readedSeriesService.hasOneById(this.id);
            this.favorite = this.favoriteSeriesService.hasOneById(this.id);
            this.wantToRead = this.wantToReadSeriesService.hasOneById(this.id);
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
            this.service.delete(this.id);
            this.readedSeriesService.delete(this.id);
            this.favoriteSeriesService.delete(this.id);
            this.wantToReadSeriesService.delete(this.id);

            this.router.navigate(['inicio']);
        }
    }

    confirm() {
        if (!confirm('Você quer deletar o livro "' + this.series.title + '"?')) {
            return false;
        }

        return true;
    }
}
