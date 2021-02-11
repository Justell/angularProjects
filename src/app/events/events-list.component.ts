import { toBase64String } from '@angular/compiler/src/output/source_map'
import { Component } from '@angular/core'
import { EventService } from './shared/event.service'
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router'

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
    
    events:any
    constructor(private eventService: EventService, private route: ActivatedRoute){
        this.events = this.eventService.getEvents()
    }

    ngOnInit() {
        // this.eventService.getEvents().subscribe(events => { this.events = events})
        this.events = this.route.snapshot.data['events']
    }

    handleThumbnailClick(eventName:any){
        toastr.success(eventName)

    }


}

