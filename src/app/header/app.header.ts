import { Component, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './app.header.html'
})
export class HeaderComponent {
    collapsed = true;
    @Output() featureSelected = new EventEmitter<string>();
    onSelect(clicked: string) {
        this.featureSelected.emit(clicked);
    }
}