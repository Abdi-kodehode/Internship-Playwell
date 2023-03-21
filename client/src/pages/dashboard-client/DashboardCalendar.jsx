import React, { useState, useCallback } from "react";
//Big Calendar
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
//Date Library
import format from "date-fns/format";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay";
//Events Data
import { events } from "../../data/Data";

const locales = {
  "en-GB": require("date-fns/locale/en-GB"),
};
const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

const DashboardCalendar = () => {
  const [myEvents, setEvents] = useState(events);

  const handleSelectSlot = useCallback(
    ({ start, end }) => {
      const title = window.prompt("New Event name");
      if (title) {
        setEvents((prev) => [...prev, { start, end, title }]);
      }
    },
    [setEvents]
  );

  const handleSelectEvent = useCallback(
    (event) => window.alert(event.title),
    []
  );

  return (
    <div className="bg-zinc-900 backdrop-blur-xl  w-full  rounded-b-xl  overflow-hidden relative pb-20 tablet:mt-1 mobile:pb-0">
      <div className="w-[600px] h-[600px] rounded-full bg-red-500/20 blur-2xl  absolute top-10 right-0"></div>
      <div className="w-[600px] h-[600px] rounded-full bg-purple-500/20 blur-2xl  absolute bottom-10 left-0"></div>
      <div className=" h-[100vh]  bg-zinc-900 w-[98%] m-auto overflow:hidden mobile:w-full pb-40">
        <h2 className="text-7xl text-center py-8 screen:text-5xl mobile:text-4xl ">
          Kurs Kalendar
        </h2>
        <Calendar
          localizer={localizer}
          events={myEvents}
          startAccessor="start"
          endAccessor="end"
          onSelectEvent={handleSelectEvent}
          onSelectSlot={handleSelectSlot}
          resizable
          selectable
          eventPropGetter={(events) => {
            const backgroundColor = events.colorEvent
              ? events.colorEvent
              : "red";
            const color = events.color ? events.color : "white";
            return { style: { backgroundColor, color } };
          }}
        />
      </div>
    </div>
  );
};

export default DashboardCalendar;
