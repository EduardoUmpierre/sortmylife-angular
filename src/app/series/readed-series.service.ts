import { Injectable } from '@angular/core';

import { Series } from './series';

@Injectable()
export class ReadedSeriesService {
    readedSeries: Series[] = [];

    constructor() { }

    getAll() {
        return this.readedSeries;
    }

    hasOneById(id: number) {
        for (const i in this.readedSeries) {
            if (this.readedSeries[i].id == id) {
                return true;
            }
        }

        return false;
    }

    add(series: Series) {
        this.readedSeries.unshift(series);
    }

    delete(id: number) {
        for (const i in this.readedSeries) {
            if (this.readedSeries[i].id == id) {
                this.readedSeries.splice(parseInt(i, 0), 1);
            }
        }
    }
}
