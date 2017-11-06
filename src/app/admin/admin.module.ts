import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminSharedComponent } from './admin-shared/admin-shared.component';

@NgModule({

    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        // RouterModule.forChild([
        //     { path: '', component: MatchScoringComponent},

        // ])
    ],
    declarations: [AdminSharedComponent],

    providers: [ ]
})
export class AdniModule { }
