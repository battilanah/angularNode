import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from 'app/main/main.component';

export const appRouteList: Routes = [
    {
        path: 'landing',
        component: MainComponent,
   
    },
    {
        path: '**',
        redirectTo: 'landing'
    }
];

@NgModule({
    exports: [
        RouterModule
    ],
    imports: [
        RouterModule.forRoot(appRouteList)
    ]
})
export class AppRoutingModule {
}