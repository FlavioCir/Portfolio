import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-home-screen',
    templateUrl: './home-screen.component.html',
    styleUrls: ['./home-screen.component.scss']
})
export class HomeScreenComponent implements OnInit {

    hour: string | undefined;

    constructor() { }

    ngOnInit(): void {
        const date: Date = new Date();
        let hour: number = date.getHours();
        let minute: number = date.getMinutes();

        const timeString = date.toLocaleTimeString('it-IT', { hour: '2-digit', minute: '2-digit' });

        document.getElementById("hour")!.innerHTML = timeString;

        // ----- Invece di fare tutti questi if basta usare la variabile creata sopra "timeString" ------
        // if (minute < 10) {
        //     this.hour = `${hour}:0${minute}`;
        // } else {
        //     this.hour = `${hour}:${minute}`;
        // }
    }

}
