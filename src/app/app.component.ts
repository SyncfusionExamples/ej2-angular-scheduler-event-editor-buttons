import { Component, ViewChild } from '@angular/core';
import { DayService, WeekService, WorkWeekService, MonthService, AgendaService, DragAndDropService, ResizeService, EventSettingsModel, ScheduleComponent, PopupCloseEventArgs } from '@syncfusion/ej2-angular-schedule';

@Component({
  selector: 'app-root',
  providers: [DayService, WeekService, WorkWeekService, MonthService, AgendaService, ResizeService, DragAndDropService],
  templateUrl: 'app.component.html'
})
export class AppComponent {
@ViewChild('scheduleObj', {static: false})
public scheduleObj: ScheduleComponent;

  public data: object[] = [{
    Id: 1,
    Subject: 'The cycle of seassons',
    StartTime: new Date(2020, 2, 16, 8, 0),
    EndTime: new Date(2020, 2, 16, 12, 0)
  }, {
    Id: 2,
    Subject: 'Facts of humming birds',
    StartTime: new Date(2020, 2, 17, 8, 30),
    EndTime: new Date(2020, 2, 17, 12, 0)
  }, {
    Id: 3,
    Subject: 'Alien civilization',
    StartTime: new Date(2020, 2, 18, 9, 0),
    EndTime: new Date(2020, 2, 18, 12, 0),
  }, {
    Id: 4,
    Subject: 'Thule air crash report',
    StartTime: new Date(2020, 2, 19, 9, 30),
    EndTime: new Date(2020, 2, 19, 12, 0)
  }, {
    Id: 5,
    Subject: 'Milky way as Melting pot',
    StartTime: new Date(2020, 2, 20, 10, 0),
    EndTime: new Date(2020, 2, 20, 12, 0)
  }];

  public selectedDate: Date = new Date(2020, 2, 16);

  public eventSettings: EventSettingsModel = {
    dataSource: this.data
  }

  public onPopupClose(args: PopupCloseEventArgs) {
    if(args.type === 'Editor') {
      if(["Add", "Save", "EditSeries", "EditOccurrence"].indexOf(this.scheduleObj.currentAction) > -1) {
        // You can write down your custom code here after "save" button is clicked.
        alert("Save button clicked");
      } else if(this.scheduleObj.currentAction === null) {
        // You can write down your custom code here after "cancel" button is clicked
        alert("Cancel button clicked.");
      }
    }
  }
}