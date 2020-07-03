import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {

  constructor() { }

  public async store(name: string, value: any) {
    try {
      return await localStorage.setItem(name, JSON.stringify(value));
    } catch (error) {
        console.log(error);
    }
  }

  public async get(key: any) {
    try {
        const item = await localStorage.getItem(key);
        if (!item) {
            return false;
        } else {
            return JSON.parse(item);
        }
    } catch (error) {
        console.log(error);
        return false;
    }
}
}
