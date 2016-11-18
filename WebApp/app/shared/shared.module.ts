import { NgModule }  from '@angular/core';
import { MyComponent } from './my/my.component';

@NgModule({
    declarations: [
        MyComponent
    ],
    exports: [
        MyComponent
    ]
})
export class SharedModule { }
