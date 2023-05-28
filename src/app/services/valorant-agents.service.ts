import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Agent } from '../interfaces/Agent';

@Injectable({
  providedIn: 'root',
})
export class ValorantAgentsService {
  constructor(private readonly http: HttpClient) {}

  getAgents(): Observable<Agent[]> {
    return this.http
      .get<{ status: number; data: Agent[] }>(
        `https://valorant-api.com/v1/agents`
      )
      .pipe(
        map((res) =>
          (res.status === 200 ? res.data : []).filter(
            (agents) => agents.isPlayableCharacter
          )
        )
      );
  }

  getAgentsById() {}
}
