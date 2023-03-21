import React, { useState } from 'react';

function Test({ event, onClose, onCreate, onUpdate, onDelete }) {
  const [title, setTitle] = useState(event ? event.title : '');
  const [start, setStart] = useState(event ? event.start : '');
  const [end, setEnd] = useState(event ? event.end : '');

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleStartChange = (e) => {
    setStart(e.target.value);
  };

  const handleEndChange = (e) => {
    setEnd(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create a new event or update an existing one
    if (event) {
      onUpdate({ ...event, title, start, end });
    } else {
      onCreate({ title, start, end });
    }

    onClose();
  };

  const handleDelete = () => {
    // Delete an existing event
    onDelete(event.id);
    onClose();
  };

  return (
    <form className="event-form" onSubmit={handleSubmit}>
      <label htmlFor="title">Title</label>
      <input
        type="text"
        id="title"
        value={title}
        onChange={handleTitleChange}
      />
      <label htmlFor="start">Start</label>
      <input type="text" id="start" value={start} onChange={handleStartChange} />
      <label htmlFor="end">End</label>
      <input type="text" id="end" value={end} onChange={handleEndChange} />
      <div className="event-form-actions">
        {event && (
          <button type="button" onClick={handleDelete}>
            Delete
          </button>
        )}
        <button type="button" onClick={onClose}>
          Cancel
        </button>
        <button type="submit" onClick={handleSubmit}>Save</button>
      </div>
    </form>
  );
}

export default Test;