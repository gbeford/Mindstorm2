import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddMissionComponent } from 'app/mission/add-mission/add-mission.component';
import { AddMissionItemComponent } from 'app/mission/add-mission/add-mission-item.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    imports: [
        FormsModule,
        ReactiveFormsModule,
        CommonModule],
    exports: [],
    declarations: [AddMissionComponent, AddMissionItemComponent],
    providers: [],
})
export class MissionModule { }

