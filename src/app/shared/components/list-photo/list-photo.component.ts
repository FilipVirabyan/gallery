import {Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModule} from "../../shared.module";

@Component({
  selector: 'app-list-photo',
  standalone: true,
  imports: [CommonModule, SharedModule],
  templateUrl: './list-photo.component.html',
  styleUrls: ['./list-photo.component.scss']
})
export class ListPhotoComponent {
  @Input() photoId!: string;

}
