import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from '@angular/core';

// this directive should toggle a class on the element once the element is clicked
// to be specific, need to attach the 'open' CSS bootstrap class

@Directive ({
  selector: '[appDropdown]'
})
export class DropdownDirective {

  // METHOD 1 (my attempt)
  constructor(private elementref: ElementRef, private renderer: Renderer2) { }
  @HostListener('click') toggleOpen() {
    this.renderer.addClass(this.elementref.nativeElement, 'open')
  }

  // METHOD 2 (solution)
  // @HostBinding('class.open') isOpen = false;
  // @HostListener('click') toggleOpen() {
  //   this.isOpen = !this.isOpen;
  // }
  
}

// CLOSING THE DROPDOWN WITH A CLICK ANYWHERE
// import {Directive, ElementRef, HostBinding, HostListener} from '@angular/core';
 
// @Directive({
//   selector: '[appDropdown]'
// })
// export class DropdownDirective {
//   @HostBinding('class.open') isOpen = false;
//   @HostListener('document:click', ['$event']) toggleOpen(event: Event) {
//     this.isOpen = this.elRef.nativeElement.contains(event.target) ? !this.isOpen : false;
//   }
//   constructor(private elRef: ElementRef) {}
// }