import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LastNotePage } from './last-note';

@NgModule({
  declarations: [
    LastNotePage,
  ],
  imports: [
    IonicPageModule.forChild(LastNotePage),
  ],
})
export class LastNotePageModule {}
