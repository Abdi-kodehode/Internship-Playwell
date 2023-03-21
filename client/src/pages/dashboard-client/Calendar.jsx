import React, { useState, useCallback } from "react";

//React Big Calendar
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
//Date Library
import format from "date-fns/format";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay";
//Ecents from Data
import { events } from "../../data/Data";
import Test from "./Test";
//Axios
import axios from "axios";

//Localizer
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
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [formOpen, setFormOpen] = useState(false);
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
  const handleEventSelect = (event) => {
    // Open the event form with the selected event data
    setSelectedEvent(event);
    setFormOpen(true);
  };
  const handleFormClose = () => {
    // Close the event form
    setSelectedEvent(null);
    setFormOpen(false);
  };
  const handleEventUpdate = (event) => {
    // Update an existing event
    axios.put(`/api/events/${event.id}`, event).then(() => {
      // Refresh the events list
      axios.get("/api/events").then((response) => {
        setEvents(response.data);
      });
    });
  };

  const handleEventDelete = (eventId) => {
    // Delete an existing event
    axios.delete(`/api/events/${eventId}`).then(() => {
      // Refresh the events list
      axios.get("/api/events").then((response) => {
        setEvents(response.data);
      });
    });
  };

  return (
    <div className="bg-zinc-900 backdrop-blur-xl  w-full h-[200vh] rounded-b-xl  overflow-hidden relative pb-20 tablet:mt-1 mobile:pb-0">
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
          onSelectEvent={handleEventSelect}
          onSelectSlot={handleEventSelect}
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
        {formOpen && (
          <Test
            event={selectedEvent}
            onClose={handleFormClose}
            onCreate={handleSelectEvent}
            onUpdate={handleEventUpdate}
            onDelete={handleEventDelete}
          />
        )}
      </div>
    </div>
  );
};

export default DashboardCalendar;

/*
  return (
    <div className="flex pt-[6rem] mobile:pt-[4rem] ">
      <DashboardMenu />
      <div className="flex flex-col w-full overflow-hidden ">
        <DashboardHero />
        <div className="bg-zinc-900 backdrop-blur-xl  w-full  rounded-xl mt-5  overflow-hidden relative">
          <div className="w-[600px] h-[600px] rounded-full bg-red-500/20 blur-2xl  absolute top-10 right-0"></div>
          <div className="w-[600px] h-[600px] rounded-full bg-purple-500/20 blur-2xl  absolute bottom-10 left-0"></div>
          <div className="py-20 h-[100vh]  bg-zinc-900 w-[98%] m-auto overflow:hidden mobile:w-full">
            <Calendar
              localizer={localizer}
              events={events}
              startAccessor="start"
              endAccessor="end"
              resizable
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
      </div>
    </div>
  );*/
