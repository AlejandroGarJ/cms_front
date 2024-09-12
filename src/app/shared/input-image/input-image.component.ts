import { Component } from '@angular/core';
import { UntypedFormBuilder } from '@angular/forms';

@Component({
  selector: 'app-input-image',
  templateUrl: './input-image.component.html',
  styleUrl: './input-image.component.css',
})
export class InputImageComponent {
  editForm: any;

  constructor(private fb: UntypedFormBuilder) {
    this.editForm = this.fb.group({
      photo: [],
    });
  }

  setFileData(event: Event): void {
    const eventTarget: HTMLInputElement | null =
      event.target as HTMLInputElement | null;
    if (eventTarget?.files?.[0]) {
      const file: File = eventTarget.files[0];
      const reader = new FileReader();
      reader.addEventListener('load', () => {
        this.editForm.get('photo')?.setValue(reader.result as string);
      });
      reader.readAsDataURL(file);
    }
  }
}
