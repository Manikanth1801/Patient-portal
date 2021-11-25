import * as React from "react";
import * as ReactDOM from "react-dom";
import '@progress/kendo-date-math/tz/Asia/Hong_Kong';
import { displayDate, sampleData } from "./event-utc";
import {
  Scheduler,
  TimelineView,
  DayView,
  MonthView
} from "@progress/kendo-react-scheduler";
import { guid } from "@progress/kendo-react-common";

export class TaskScheduler extends React.Component {
  state = {
    data: sampleData.slice(0)
  };

  handleDataChange = ({ created, updated, deleted }) => {
    this.setState({
      data: this.state.data
        // Filter the deleted items
        .filter(
          (item) =>
            deleted.find((current) => current.id === item.id) === undefined
        )
        // Find and replace the updated items
        .map(
          (item) => updated.find((current) => current.id === item.id) || item
        )
        // Add the newly created items and assign an `id`.
        .concat(created.map((item) => Object.assign({}, item, { id: guid() })))
    });
  };
  render() {
    return (
      <Scheduler
        data={this.state.data}
        onDataChange={this.handleDataChange}
        timezone={"Asia/Hong_Kong"}
        editable={{
          add: true,
          remove: true,
          drag: true,
          resize: true,
          edit: true
        }}
        defaultDate={displayDate}
        footer={(props) => <React.Fragment />}
      >
        <TimelineView showWorkHours={false} />
        <DayView numberOfDays={3} showWorkHours={false} />
        <MonthView />
      </Scheduler>
    );
  }
}
