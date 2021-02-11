//for preloading data before showing the page
import { Injectable } from '@angular/core'
import { Resolve } from '@angular/router'
import { EventService } from './shared/event.service'
import { map } from 'rxjs/operators'

@Injectable()
export class EventListResolver implements Resolve<any> {

    constructor(private eventService: EventService){}
    resolve() {
        //get events returns an observable, map gives an eccess to events we`re passed in
        return this.eventService.getEvents().pipe(map(events => events))
    }
}