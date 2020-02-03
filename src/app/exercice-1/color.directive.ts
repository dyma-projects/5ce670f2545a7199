import { Directive, HostListener, Input,Renderer2, ElementRef } from '@angular/core';

@Directive({
  selector: '[appColor]'
})
export class ColorDirective {
@Input() public color:string;


  @HostListener('window:keyup', ['$event']) windowClick($event) {
    if($event.key=='ArrowRight'){
 		this.changeColor('blue')
     }
	if($event.key=='ArrowDown'){
		this.changeColor('green')
	}
	if($event.key=='ArrowUp'){
 		this.changeColor('red')
     }
	if($event.key=='ArrowLeft'){
 		this.changeColor('orange')
     }
   }


  constructor(private el: ElementRef, private renderer: Renderer2) {
  	this.renderer.setStyle(this.el.nativeElement, 'color', 'black');
   }

   private changeColor(color: string){
 	this.renderer.setStyle(this.el.nativeElement, 'color', color);
   }


}
