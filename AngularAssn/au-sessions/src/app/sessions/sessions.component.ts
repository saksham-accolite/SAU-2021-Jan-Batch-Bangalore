import { Component, OnInit } from '@angular/core';
import { Session } from '../session';
import { SESSIONS } from '../mock-sessions';
import { SessionService } from '../session.service';

@Component({
  selector: 'app-sessions',
  templateUrl: './sessions.component.html',
  styleUrls: ['./sessions.component.scss']
})
export class SessionsComponent implements OnInit {



  sessions: Session[];

  selectedSession: Session;

  onSelect(session: Session): void {
    this.selectedSession = session;
  }

  getSessions(): void {
    this.sessionService.getSessions()
      .subscribe(sessions => this.sessions = sessions);
  }

  addSession(): Session {
    let session: Session = {name: '', trainer: '', date: new Date()};
    this.sessions.push(session);
    return session;
  }

  deleteSession(selectedSession: Session) {
    this.sessions.forEach((session, index)=>{
      if(session === selectedSession) this.sessions.splice(index,1);
   });
  }

  constructor(private sessionService: SessionService) { }

  ngOnInit(): void {
    this.getSessions();
  }

}
