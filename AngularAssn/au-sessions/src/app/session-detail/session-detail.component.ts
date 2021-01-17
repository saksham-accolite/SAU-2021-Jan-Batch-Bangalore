import { Component, OnInit, Input } from '@angular/core';
import { Session } from '../session';

@Component({
  selector: 'app-session-detail',
  templateUrl: './session-detail.component.html',
  styleUrls: ['./session-detail.component.scss']
})
export class SessionDetailComponent implements OnInit {

  

  @Input() selectedSession: Session;

  constructor() { }

  ngOnInit(): void {
  }

}
