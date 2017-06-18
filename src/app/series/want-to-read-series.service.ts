import { Injectable } from '@angular/core';

import { Series } from './series';

@Injectable()
export class WantToReadSeriesService {
    wantToReadSeries: Series[] = [];

    constructor() { }

    getAll() {
        return this.wantToReadSeries;
    }

    hasOneById(id: number) {
        for (const i in this.wantToReadSeries) {
            if (this.wantToReadSeries[i].id == id) {
                return true;
            }
        }

        return false;
    }

    add(series: Series) {
        this.wantToReadSeries.unshift(series);
    }

    delete(id: number) {
        for (const i in this.wantToReadSeries) {
            if (this.wantToReadSeries[i].id == id) {
                this.wantToReadSeries.splice(parseInt(i, 0), 1);
            }
        }
    }
}
