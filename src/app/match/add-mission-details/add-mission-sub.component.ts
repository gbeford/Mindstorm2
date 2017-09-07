import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-mission-sub',
  templateUrl: './add-mission-sub.component.html'
})

export class AddMissionSubComponent{
  @Input() missionEditForm: FormGroup; // This component is passed a FormGroup from the base component template
}
