import { toBase64String } from '@angular/compiler/src/output/source_map'
import { Component } from '@angular/core'
import { EventService } from './shared/event.service'

declare let toastr:any

@Component({
    
    template:` 
    <div>
        <h1>Upcoming Angular Events</h1>
        <hr/>
        <div class="row">
            <div *ngFor="let event of events" class="col-md-5">
                <event-thumbnail (click)="handleThumbnailClick(event.name)" [event] = "event"></event-thumbnail>
            </div>
        </div>
    </div>
    `
  
})
export class EventsListComponent {
    events:any[]
    constructor(private eventService: EventService){
        this.events = this.eventService.getEvents()
    }

    handleThumbnailClick(eventName:any){
        toastr.success(eventName)

    }

}

