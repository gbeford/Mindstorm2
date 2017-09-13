import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '@angular/material';
import { SignaturePadModule } from 'angular2-signaturepad';

import { MatchService } from 'app/match/match.service';
import { MatchScoringComponent } from 'app/match/match-scoring.component';
import { SignatureComponent } from './signature/signature.component';


@NgModule({

    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MaterialModule,
        SignaturePadModule  ,
        // RouterModule.forChild([
        //     { path: '', component: MatchScoringComponent},

        // ])
    ],
    declarations: [SignatureComponent],

    providers: [
        MatchService,
    ]
})
export class MatchModule { }
