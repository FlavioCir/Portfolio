import { Component, OnInit } from '@angular/core';
import { HotObservable } from 'rxjs/internal/testing/HotObservable';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
        const date: Date = new Date();
        let hour: number = date.getHours();
        let minute: number = date.getMinutes();
        let second: number = date.getSeconds();

        const timeString = date.toLocaleTimeString('it-IT', { hour: '2-digit', minute: '2-digit' });

        const months: string[] = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        let month: number = date.getMonth() + 1;
        let day: number = date.getDate();
        const days: string[] = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

        document.getElementById("hour")!.innerHTML = timeString;

        // ----- Invece di fare tutti questi if basta usare la variabile creata sopra "timeString" ------
        // if (hour === 0) {
        //     document.getElementById("hour")!.innerHTML = `00:${minute}`;
        // } else if (minute < 10) {
        //     document.getElementById("hour")!.innerHTML = `${hour}:0${minute}`;
        // } else {
        //     document.getElementById("hour")!.innerHTML = `${hour}:${minute}`;
        // }

        document.getElementById("data")!.innerHTML = `${days[date.getDay()]}, ${months[date.getMonth()]} ${day}`;
    }



}
