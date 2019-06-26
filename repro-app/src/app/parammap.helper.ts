// "export 'ParamMap' was not found in '@angular/router'

import { ParamMap } from '@angular/router';

export class RouteMapper {
    constructor(public paramMap: ParamMap) {
    }

    do() {
        console.log(this.paramMap);
    }
}
