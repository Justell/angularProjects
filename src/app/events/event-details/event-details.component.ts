import { Component } from '@angular/core'
import { EventService } from "../shared/event.service" 

@Component ({
    templateUrl: './event-details.component.html',
    styles: [`
        .container { padding-left: 20px; padding-right: 20px; }
        .event-image: { height: 100px; }
    `]

})

export class EventDetailsComponent {

    event:any
    // inject service
    constructor(private eventService:EventService) {
            
    }

    // make ajax call
    ngOnInit() {
        this.event = this.eventService.getEvent(1)
    }

}