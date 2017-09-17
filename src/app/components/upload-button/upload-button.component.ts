// TODO: Set up functionality for multiple files.
// TODO: Set up default functionality that simply shows the basic file upload dialog.

import {
  Component,
  ElementRef,
  Input,
  OnInit,
  ViewChild
} from '@angular/core';
import { StorageService } from '../../shared/services/storage.service';

@Component({
  selector: 'app-upload-button',
  templateUrl: './upload-button.component.html',
  styleUrls: ['./upload-button.component.scss']
})
export class UploadButtonComponent implements OnInit {

  @Input('showDefault') showDefault = false;
  @Input('acceptsArray') acceptsArray: string[] = [];
  @ViewChild('input') input: ElementRef;
  @ViewChild('image') image: ElementRef;

  private showImage (file: File) {
    const reader = new FileReader();
    reader.onload = () => this.image.nativeElement.src = reader.result;
    reader.readAsDataURL(file);
  }

  private fileChanged (event) {
    const file = event.target.files[0];
    this.showImage(file);
    this.uploadFile(file);
  }

  private uploadFile (file: File) {
    const fileRef = this.storageService.storage.child(file.name);
    fileRef.put(file);
  }

  /**
   * Simulates the click of the input[type="file"]. Necessary, so that
   * I can hide the input field from the DOM.
   *
   * @param {any} fileInput
   * @memberof UploadButtonComponent
   */
  public buttonClicked (fileInput) {
    if (this.showDefault) { return false; };
    fileInput.click();
  }

  constructor(private storageService: StorageService) {}

  ngOnInit() {}

}
