import React from "react";
import marqueeData from "./marquee.json";
import "./marquee.css";

const ConferenceMarquee = () => {
  const { importantDates, submission, conference, contact, settings } =
    marqueeData;

  const formatDates = (dates) => {
    return dates.map((date, index) => (
      <span key={index}>
        {date.event}:{" "}
        {date.newDate ? (
          <>
            <span className="strikethrough">{date.date1}</span> → 
            <span className="strikethrough">{date.date2}</span> → {date.newDate}
          </>
        ) : (
          date.date
        )}
        {index < dates.length - 1 && " | "}
      </span>
    ));
  };

  return (
    <div className="marquee-container">
      <div className="scrolling-text">
        <span className="highlight-text">
          {importantDates.icon} {importantDates.title}:
        </span>{" "}
        {formatDates(importantDates.dates)}
        <span className="separator">{settings.separator}</span>
        <span className="highlight-text">
          {submission.icon} {submission.title}:
        </span>{" "}
        <a
          href={submission.url}
          className="link-text"
          target="_blank"
          rel="noopener noreferrer"
        >
          {submission.displayText}
        </a>
        <span className="separator">{settings.separator}</span>
        <span className="highlight-text">
          {conference.icon} {conference.title}:
        </span>{" "}
        {conference.date} | {conference.venue}
        <span className="separator">{settings.separator}</span>
        <span className="highlight-text">
          {contact.icon} {contact.title}:
        </span>{" "}
        {contact.email} | {contact.phone}
      </div>
    </div>
  );
};

export default ConferenceMarquee;
