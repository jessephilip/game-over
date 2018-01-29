import { ModalService } from 'app/shared/services/modal.service';
import {
  Component,
  ElementRef,
  OnInit,
  ViewChild
} from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  @ViewChild('image') image: ElementRef;

  constructor(private modalService: ModalService) {}

  ngOnInit() {}

  public urlListener(event) {
    this.image.nativeElement.src = event;
  }

  public createExercise () {

  }

}
