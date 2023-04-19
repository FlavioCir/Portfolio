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

        if (minute < 10) {
            this.hour = `${hour}:0${minute}`;
        } else {
            this.hour = `${hour}:${minute}`;
        }
    }

}
