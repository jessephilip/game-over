// TODO: Set up functionality for multiple files.

/**
 * Creates a custom file upload button
 *
 *  @param acceptsArray: string[]
 *    @default []
 *    Will only allow the user to upload files matching the provided extension
 *    or extensions in the array. An empty array allows all extensions.
 *  @param showDefault: boolean
 *    @default false
 *    When true, will display as the browsers default file upload button.
 */

import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
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
  @Output('urlEmitter') urlEmitter: EventEmitter<string> = new EventEmitter<string>();
  @ViewChild('input') input: ElementRef;

  constructor(private storageService: StorageService) {}

  ngOnInit() {}

  private fileChanged (event) {
    const file = event.target.files[0];
    this.uploadFile(file);
  }

  private uploadFile (file: File) {
    this.storageService.uploadFile(file)
      .then(result => {
        this.urlEmitter.emit(result.downloadURL);
      });
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

}
