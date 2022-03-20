import { Injectable } from '@angular/core';

import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})
export class KvStorageService {

  constructor(
    private storage: Storage
  ) { 
    this.init();
  }

  async init() {
    const storage = await this.storage.create();
    this.storage = storage;
  }

  // get an item
  async get(key: string): Promise<any> {
    const value = await this.storage.get(key);

    return value;
  }
  
  // set an item
  async set(key: string, value: any): Promise<void> {
    await this.storage.set(key, value);
  }

  // remove an item
  async remove(key: string): Promise<any> {
    const value = await this.storage.remove(key);
    return value;
  }

  // ARRAY METHODS

  // push an item an array
  async push(key: string, value: any): Promise<void> {
    // init array if is needed
    await this.initArray(key);
    // get array
    let values = await this.get(key);
    if (values == null) return;
    // push new item
    values.push(value);
    // set the new array
    await this.set(key, values);
  }

  // unshift an item an array
  async unshift(key: string, value: any): Promise<void> {
    // init array if is needed
    await this.initArray(key);
    // get array
    let values = await this.get(key);
    if (values == null) return;
    // unshift new item
    values.unshift(value);
    // set the new array
    await this.set(key, values);
  }  

  // remove an item an array
  async splice(key: string, value: any): Promise<any> {
    // get array
    let values = await this.get(key);
    if (values == null) return;
    // get index 
    const index = values.indexOf(value);
    const valueDeleted = values[index];
    values.splice(index, 1);
    // set array
    await this.set(key, values);

    return valueDeleted;
  }

  private async initArray(key: string): Promise<void> {
    const list = await this.get(key);

    if (list) return;

    await this.set(key, []);
  }
}
