import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ComponentsModule } from '../components/components.module';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { AlertComponent } from './alert/alert.component';
import { AlertConfirmComponent } from './alert-confirm/alert-confirm.component';

@NgModule({
    imports: [
        IonicModule,
        RouterModule,
        CommonModule,
        FormsModule,
        LazyLoadImageModule,
        ReactiveFormsModule,
        ComponentsModule,
    ],
    declarations: [AlertComponent, AlertConfirmComponent],
    exports: [AlertComponent, AlertConfirmComponent],
})
export class AlertModule { }
