import {Directive, ElementRef, HostListener, OnInit} from '@angular/core';

@Directive({
  selector: '[ButtonEffects]'
})
export class ButtonEffectsDirective implements OnInit {
  constructor(private el: ElementRef) {

  }

  @HostListener('mouseover')
  onMouseEnter() {
    this.changeElementColor('rgb(130, 19, 40)');
  }

  @HostListener('mouseout')
  onMouseLeave() {
    this.changeElementColor('rgb(213, 7, 45)');
  }

  ngOnInit() {
    this.changeElementColor('rgb(213,7,45)');
  }

  changeElementColor(color:string) {
    this.el.nativeElement.style.background = color;
  }

}
