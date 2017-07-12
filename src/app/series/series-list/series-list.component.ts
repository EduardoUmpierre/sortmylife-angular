import { Component, OnInit, Input } from '@angular/core';
import { SeriesService } from 'app/series/series.service';
import { FavoriteSeriesService } from 'app/series/favorite-series.service';
import { ReadedSeriesService } from 'app/series/readed-series.service';
import { WantToReadSeriesService } from 'app/series/want-to-read-series.service';
import { Series } from 'app/series/series';

@Component({
    selector: 'app-series-list',
    templateUrl: './series-list.component.html',
    styleUrls: ['./series-list.component.sass']
})
export class SeriesListComponent implements OnInit {
    @Input() title: string;
    @Input() type: string;

    errorMessage: any;
    service: any;
    series: Series[];

    constructor (
        private seriesService: SeriesService,
        private favoriteSeriesService: FavoriteSeriesService,
        private readedSeriesService: ReadedSeriesService,
        private wantToReadSeriesService: WantToReadSeriesService
    ) {}

    ngOnInit() {
        switch (this.type) {
            case 'favorite': {
                this.service = this.favoriteSeriesService;
                break;
            }
            case 'readed': {
                this.service = this.readedSeriesService;
                break;
            }
            case 'wantToRead': {
                this.service = this.wantToReadSeriesService;
                break;
            }
            default: {
                this.service = this.seriesService;
            }
        }

        this.service.getAll().subscribe(
            series => this.series = series,
            error => this.errorMessage = <any>error
        );
    }
}
