import { Component, Input } from '@angular/core';

interface RecursiveData {
  [key: string]: any;
}

@Component({
  selector: 'app-recursive',
  templateUrl: './recursive.component.html',
  styleUrl: './recursive.component.css',
})
export class RecursiveComponent {
  @Input() data: RecursiveData = {};
  ngModel = '';
  addNewObjectToArray: boolean = false;
  auxObject: any = {};
  auxArray: any[] = [];
  deleteModal: boolean = false;
  deleteModalMessage = '';
  @Input() listIsArray = false;
  displayedColumns: string[] = ['email', 'nombre', 'mensaje'];
  isVisible: { [key: string]: boolean } = {};

  isObject(value: any): boolean {
    return value && typeof value === 'object' && !Array.isArray(value);
  }

  isArray(value: any): boolean {
    return Array.isArray(value);
  }

  toggleVisibility(key: string): void {
    this.isVisible[key] = !this.isVisible[key];
  }

  createObject(object: any) {
    //Object.value is the array
    console.log(object.value[0]);
    this.auxArray = object.value;
    this.auxObject = structuredClone(object.value[0]); //Duplicate the object

    this.addNewObjectToArray = true;
  }

  createNewArrayItem() {
    console.log(this.auxObject);
    this.auxArray.push(this.auxObject);

    this.addNewObjectToArray = false;
  }
  save() {
    console.log(this.data);
  }

  trackByFn(index: any, item: any) {
    return index;
  }

  delete(item: any, index: number) {
    //Item es el array

    if (item.value.length === 1) {
      this.deleteModal = true;
      this.deleteModalMessage = 'No puedes dejar una lista de elementos vacia';
    } else {
      item.value.splice(index, 1);
      console.log(item.value[index]);
    }
  }

  onFileChange(event: any, itemKey: any) {
    console.log('Imagen antigua: ' + this.data[itemKey]);
    const fileImage = event.target.files[0];
    console.log(fileImage);

    if (fileImage) {
      const reader = new FileReader();
      reader.readAsDataURL(fileImage);
      reader.onload = () => {
        this.data[itemKey] = reader.result as string;
      };
    }
  }
}
