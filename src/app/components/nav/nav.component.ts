import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  
  visible:boolean = false;
  buttonTitle:string = "Hide";
  
  constructor() { }

  ngOnInit(): void {
  }

  showhideUtility(){
    this.visible = this.visible?false:true;
    this.buttonTitle = this.visible?"Hide":"Show";
  }

}
