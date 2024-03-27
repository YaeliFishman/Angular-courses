import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[highLightColor]',
  standalone: true
})
export class CourseDirective {

  @Input()
  public highLightColor = 'red'

  constructor(private element: ElementRef) { }

  @HostListener('')
  onThisWeek(){
    this.element.nativeElement.style.color = this.highLightColor;
  }


  // @HostListener('mouseout')
  // onMouseOut() {
  //   this.element.nativeElement.style.color = 'blue';
  // }

}
