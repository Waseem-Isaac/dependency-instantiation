import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StatelessService {

  private _counter: number = 0;
  constructor() { }


  
  public set counter(v : number) {
    this._counter = v;
  }

  public get counter() : number {
    return this._counter;
  }
  
}
