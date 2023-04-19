import { Component, OnInit } from '@angular/core';

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

        const months: string[] = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        let month: number = date.getMonth() + 1;
        let day: number = date.getDate();
        const days: string[] = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

        if (minute < 10) {
            document.getElementById("hour")!.innerHTML = `${hour}:0${minute}`;
        } else {
            document.getElementById("hour")!.innerHTML = `${hour}:${minute}`;
        }
        document.getElementById("data")!.innerHTML = `${days[date.getDay() - 1]}, ${months[date.getMonth()]} ${day}`;
    }



}
