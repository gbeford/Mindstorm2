import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import {SignaturePad} from 'angular2-signaturepad/signature-pad';

@Component({
  selector: 'app-signature',
  templateUrl: './signature.component.html',
  styleUrls: ['./signature.component.css'],
})

export class SignatureComponent implements OnInit, AfterViewInit {

  @ViewChild(SignaturePad) public signaturePad: SignaturePad;

    public signaturePadOptions: Object = {
      'minWidth': 2,
      'canvasWidth': 440,
      'canvasHeight': 100
    };

    public signatureImage: string;

  ngOnInit() {}

  public drawBegin(): void {
    console.log('Begin Drawing');
  }

  public drawComplete() {
    this.signatureImage = this.signaturePad.toDataURL();
    console.log(this.signatureImage);
  // this.signature = this.signaturePad.toDataURL('image/jpeg', 0.5);
  }

  public drawClear() {
    this.signaturePad.clear();
    // this.signatureImage = '';
  }

  canvasResize() {
    const canvas = document.querySelector('canvas');
    this.signaturePad.set('minWidth', 1);
    this.signaturePad.set('canvasWidth', canvas.offsetWidth);
    this.signaturePad.set('canvasHeight', canvas.offsetHeight);
  }

ngAfterViewInit() {
      this.signaturePad.clear();
      this.canvasResize();
}

}
