import { Component } from "@angular/core";


@Component({
    selector: 'app-heroe',
    templateUrl: 'heroe.component.html'
})
export class HeroeComponent {

    nombre: string = 'Fatman';
    edad: number = 34;

    get nombreCapitalizado():string {
        return this.nombre.toUpperCase();
    }

    getName(): string {
        return `${this.nombre} - ${this.edad}`;
    }

    cambiarNombre():void {
        this.nombre = 'GrossMan';
    }

    cambiarEdad():void {
        this.edad = 99;
    }

}