import { Directive, HostBinding, HostListener } from '@angular/core';
import { Event } from '@angular/router';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  @HostBinding('class.open')isOpen=false;
  @HostListener('click')toggle(eventData:Event){
    this.isOpen=!this.isOpen;
    console.log(this.isOpen);
  }


  // @HostBinding('class.open') isOpen = false;
  // @HostListener('document:click', ['$event']) toggleOpen(eventData: Event) {
  //    this.isOpen = this.elRef.nativeElement.contains(eventData.target) ? !this.isOpen : false;
  //    console.log(this.isOpen);

  // }
  constructor() {}
}


