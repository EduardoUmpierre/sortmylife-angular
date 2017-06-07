import { Injectable } from '@angular/core';

@Injectable()
export class MovieService {

  private movie: any[] = [
    {
      id: 1,
      title: 'Admirável Mundo Novo - O FILME',
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
      title: 'O Mundo de Sofia - O FILME',
      rating: 5,
      author: 'Jostein Gaarder',
      description: 'O Mundo de Sofia (Sofies verden em norueguês) é um romance escrito por Jostein Gaarder, ' +
      'publicado em 1991. O livro foi escrito originalmente em norueguês, mas já foi traduzido para mais de 60 ' +
      'línguas, teve sua primeira edição em português em 1995, que atualmente encontra-se em sua 32ª reimpressão.',
      image: 'http://statics.livrariacultura.net.br/products/capas_lg/545/64545.jpg',
      year: 1991,
    }
  ];

  getAllMovie(){
    return this.movie;
  }

  getMovie(id: number){
    for (let i = 0; i < this.movie.length; i++){
      let movie = this.movie[i];
      if(movie.id = id){
        return movie;
      }
    }
    return null;
  }

  constructor() { }

}
