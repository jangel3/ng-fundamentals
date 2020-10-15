import { Time } from '@angular/common';
import { ILocation } from './ilocation';
import { ISession } from './isession';

export interface IEvent {
  id: number;
  name: string;
  date: string;
  time: string;
  price: number;
  imageUrl: string;
  location: ILocation;
  sessions: ISession[];
}
