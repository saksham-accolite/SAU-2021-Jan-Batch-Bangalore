import { Injectable } from '@angular/core';
import { Session } from './session';
import { SESSIONS } from './mock-sessions';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor() { }

  getSessions(): Observable<Session[]> {
    return of(SESSIONS);
  }

  getSession(name: string): Observable<Session> {
    return of(SESSIONS.find(session => session.name === name));
  }
}
