import { Injectable } from '@angular/core';
import { Agent } from '../Agent';
import { AGENTS } from '../mock-agents';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AgentService {
  private apiUrl = 'http://www.nekosaysmeow.cyou:4000/api/';
  constructor(private http: HttpClient) { }

  getAgents(): Observable<Agent[]> {
    
    return this.http.get<Agent[]>(`${this.apiUrl}agents`);
  }
}
