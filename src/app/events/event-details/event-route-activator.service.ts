import { ActivatedRouteSnapshot, CanActivate } from '@angular/router'
import { Injectable } from '@angular/core'
import { EventService } from '../shared/event.service'
import { Router } from '@angular/router'

@Injectable()
export class EventRouteActivator implements CanActivate {
    constructor (private eventService: EventService, private router:Router) {
    }

    // route guard, to prevent from navigating to page that does not exist
    canActivate(route:ActivatedRouteSnapshot) {
        const eventExists = !!this.eventService.getEvent(+route.params['id'])

        if (!eventExists)
            this.router.navigate(['/404'])
        return eventExists

    }


}