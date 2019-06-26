import { Component, OnInit } from '@angular/core';
import { RouteMapper } from './parammap.helper';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

    title = 'repro-app';

    constructor(
        private route: ActivatedRoute,
    ) { }

    ngOnInit() {
        if (this.route) {
            this.route.paramMap
                .subscribe(params => {
                    new RouteMapper(params).do();
                });
        }
    }
}
