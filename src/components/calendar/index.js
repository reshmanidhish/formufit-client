import React, { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import BootstrapTheme from "@fullcalendar/bootstrap";
import AppointmentModal from "components/appointment";

const Calender = props => {
    const [showModal, setShowModal] = useState(false);
    const [events, setEvents] = useState([
        {
          title: "Not Available",
          start: "2023-09-01",
        },
        {
          title: "Not Available",
          start: "2023-09-05",
        },
      ]); // Maintain a state for events
  
    const handleDateClick = (arg) => {
      // When a date is clicked on the calendar, show the modal
      setShowModal(true);
    };

    const handleSaveAppointment = (appointmentDetails) => {
        // Save the appointment and add it to the events array
        const newEvent = {
          title: appointmentDetails,
          start: new Date(), // Use the current date as an example
          allDay: true,
        };
        setEvents([...events, newEvent]);
      };
    

  const availableDates = [
    '2023-09-25',
    '2023-09-26',
    '2023-09-28',
    '2023-09-29',
    // Add more available dates as needed
  ];
  const customDayCellContent = (arg) => {
    if (availableDates.includes(arg.dateStr)) {
      return (
        <div className="green-day-cell">
          <span className="fc-day-number">{arg.dayNumberText}</span>
        </div>
      );
    }
  };


  const handleEventClick = (arg) => {

  };

  const onDrop = (info) => {
    console.log(info);
  };

  return (
    <div>
        <AppointmentModal
        show={showModal}
        handleClose={() => setShowModal(false)}
        handleSave={handleSaveAppointment}
      />
      <FullCalendar
        plugins={[BootstrapTheme, dayGridPlugin]}
        slotDuration={"00:15:00"}
        handleWindowResize={true}
        themeSystem="bootstrap"
        headerToolbar={{
          left: "prev,next today",
          center: "title",
          right: "dayGridMonth,dayGridWeek,dayGridDay",
        }}
        dateClick={handleDateClick}
        dayCellContent={customDayCellContent}
        events={events}
        editable={true}
        droppable={true}
        selectable={true}
        eventClick={handleEventClick}
        drop={onDrop}
      />
      
    </div>
  );
};

export default Calender;