import { Injectable } from '@angular/core';

import { Series } from './series';

@Injectable()
export class FavoriteSeriesService {
    favoriteSeries: Series[] = [];

    constructor() { }

    getAll() {
        return this.favoriteSeries;
    }

    hasOneById(id: number) {
        for (const i in this.favoriteSeries) {
            if (this.favoriteSeries[i].id == id) {
                return true;
            }
        }

        return false;
    }

    add(series: Series) {
        this.favoriteSeries.unshift(series);
    }

    delete(id: number) {
        for (const i in this.favoriteSeries) {
            if (this.favoriteSeries[i].id == id) {
                this.favoriteSeries.splice(parseInt(i, 0), 1);
            }
        }
    }
}
