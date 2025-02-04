import { Directive, HostBinding, HostListener, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective implements OnInit {
  @HostBinding('class.open') isOpen = false;
  constructor() { }
  ngOnInit() {

  }
  @HostListener('click') toggleOpen() {
    this.isOpen = !this.isOpen;
  }
}
