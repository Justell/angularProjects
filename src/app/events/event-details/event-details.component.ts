import { Component } from '@angular/core'
import { EventService } from "../shared/event.service" 
import { ActivatedRoute } from '@angular/router'

@Component ({
    templateUrl: './event-details.component.html',
    styles: [`
        .container { padding-left: 20px; padding-right: 20px; }
        .event-image { height: 100px; }
    `]

})

export class EventDetailsComponent {

    event:any
    // inject service, a.k.a. define types of injectables, like setting variables
    constructor(private eventService:EventService, private route:ActivatedRoute) {
            
    }

    // make ajax call
    ngOnInit() {
        //+ means getting this as a number
        this.event = this.eventService.getEvent(+this.route.snapshot.params['id'])
    }

}