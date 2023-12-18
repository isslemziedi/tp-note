import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})

export class AppComponent {
  title = 'extp';
  note: string = '';
  notes: { text: string; color: string }[] = [];

  addNote() {
    if (this.note) {
      this.notes.push({ text: this.note, color: '' });
      this.note = '';
    }
  }

  deleteNote(index: number) {
    if (index >= 0 && index < this.notes.length) {
      this.notes.splice(index, 1);
    }
  }

  deleteAllNotes() {
    this.notes = [];
  }

  getColor(index: number): string {
    const colors = ['red', 'green', 'blue'];
    return colors[index % colors.length];
  }
}