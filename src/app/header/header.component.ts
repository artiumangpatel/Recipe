import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
 //@Output() featureselected = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }
  // onSelect(feature:string): void{
    
  //   this.featureselected.emit(feature);
  //   console.log("featureSelected  :"+this.featureselected);
  // }

}
