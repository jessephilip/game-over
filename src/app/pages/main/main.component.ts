import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { StorageService } from '../../shared/services/storage.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

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
    this.uploadImage(file);
  }

  public uploadImage (file: File) {
    const imageRef = this.storageService.storage.child(file.name);
    imageRef.put(file);
  }

  constructor(private storageService: StorageService) {}

  ngOnInit() {}

}
