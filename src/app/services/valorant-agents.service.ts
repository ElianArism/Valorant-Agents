import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Agent } from '../interfaces/Agent';

@Injectable({
  providedIn: 'root',
})
export class ValorantAgentsService {
  private readonly url: string = 'https://valorant-api.com/v1/';
  constructor(private readonly http: HttpClient) {}

  getAgents(): Observable<Agent[]> {
    return this.http
      .get<{ status: number; data: Agent[] }>(`${this.url}agents`)
      .pipe(
        map((res) =>
          (res.status === 200 ? res.data : []).filter(
            (agents) => agents.isPlayableCharacter
          )
        )
      );
  }

  getAgentsById(id: string): Observable<Agent | null> {
    return this.http
      .get<{ status: number; data: Agent }>(`${this.url}agents/${id}`)
      .pipe(map((res) => (res.status === 200 ? res.data : null)));
  }
}
