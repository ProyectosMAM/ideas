import { Component } from '@angular/core';
import { Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { ElementRef } from '@angular/core';

// @Component({
//   selector: 'app-eye-dropper',
//   templateUrl: './eye-dropper.component.html',
//   styleUrls: ['./eye-dropper.component.scss']
// })
export class EyeDropper {
  window: any;

  constructor(@Inject(ElementRef) private readonly elementRef: ElementRef,
    @Inject(DOCUMENT) private readonly documentRef: Document) {


    this.window = this.elementRef.nativeElement

    if (!window.EyeDropper) {
      window.pre.innerHTML = "Sólo soportado en Chrome 95";
    }

    window.button.addEventListener('click', async () => {
      const eyeDropper = new EyeDropper()
      try {
        const { sRGBHex } = await eyeDropper.open()
        document.documentElement.style.setProperty("--bg-color", sRGBHex)
        window.pre.innerHTML = sRGBHex
      } catch (e) {
        window.pre.innerHTML = 'Algo no ha ido bien'
      }
    })

  }

  get isFocused(): boolean {
    return this.documentRef.activeElement === this.elementRef.nativeElement;
  }



}
