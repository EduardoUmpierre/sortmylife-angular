import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { Series } from './series';

@Injectable()
export class SeriesService {

    series: Series[] = [
        {
            id: 1,
            title: 'Admirável Mundo Novo',
            rating: 5,
            author: 'Aldous Huxley',
            description: 'Admirável Mundo Novo (Brave New World na versão original em língua inglesa) é um romance ' +
            'distópico escrito por Aldous Huxley e publicado em 1932 que narra um hipotético futuro onde as pessoas são ' +
            'pré-condicionadas biologicamente e condicionadas psicologicamente a viverem em harmonia com as leis e regras ' +
            'sociais, dentro de uma sociedade organizada por castas.',
            image: 'https://amnprojeto.files.wordpress.com/2011/11/aldous.jpg',
            year: 1932,
        },
        {
            id: 2,
            title: 'O Mundo de Sofia',
            rating: 5,
            author: 'Jostein Gaarder',
            description: 'O Mundo de Sofia (Sofies verden em norueguês) é um romance escrito por Jostein Gaarder, ' +
            'publicado em 1991. O livro foi escrito originalmente em norueguês, mas já foi traduzido para mais de 60 ' +
            'línguas, teve sua primeira edição em português em 1995, que atualmente encontra-se em sua 32ª reimpressão.',
            image: 'http://statics.livrariacultura.net.br/products/capas_lg/545/64545.jpg',
            year: 1991,
        }
    ];

    constructor(
        private router: Router
    ) { }

    getAll() {
        return this.series;
    }

    getTotalItems() {
        return this.series.length;
    }

    getOneById(id: number) {
        for (const i in this.series) {
            if (this.series[i].id == id) {
                return this.series[i];
            }
        }

        this.router.navigate(['inicio']);
    }

    add(series: Series) {
        series.id = this.getTotalItems() + 1;
        this.series.unshift(series);
    }

    update(series: Series) {
        for (const i in this.series) {
            if (this.series[i].id == series.id) {
                this.series[i] = series;
            }
        }
    }

    delete(id: number) {
        for (const i in this.series) {
            if (this.series[i].id == id) {
                this.series.splice(parseInt(i, 0), 1);
            }
        }
    }
}
