import { Component, OnInit, ElementRef, Input, Output , HostListener, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-refresh',
  templateUrl: './refresh.component.html',
  styleUrls: ['./refresh.component.css']
})

export class RefreshComponent implements OnInit {
  private lastScrollTop = 0;
  private isAtTop = false;
  private element: any;


  @HostListener('scroll')
  @HostListener('touchmove')
    ngOnInit() {
  }

  constructor(el: ElementRef) {
    this.element = el.nativeElement;
  }

  refresh() {

  }
  }


