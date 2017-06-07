import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

const moviesRoutes = [


];

@NgModule({

    declarations: [

    ],
    imports: [
        RouterModule.forChild(moviesRoutes)
    ],
    exports: [
        RouterModule
    ],
    providers: [

    ]

})
export class MovieRoutingModule{


}