import { Component, OnInit } from "@angular/core";

@Component({
    selector: "Home",
    moduleId: module.id,
    templateUrl: "./home.component.html"
})
export class HomeComponent implements OnInit {

    counter:number = 0;

    ngOnInit(): void {
    }

    increment(){
        this.counter++;
    }
    decrement(){
        this.counter--;
    }
}
