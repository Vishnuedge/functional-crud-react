import React from 'react';

export default function Form({
  handleSubmit,
  userId,
  title,
  body,
  handleChange
}) {
  return (
    <div className="container">
      <form>
        <div class="mb-3">
          <label class="form-label">
            <b>USER ID : </b>
          </label>
          <input
            type="text"
            class="form-control"
            value={userId}
            onChange={handleChange}
            name="userId"
          />
        </div>
        <div class="mb-3">
          <label class="form-label">
            <b>TITLE : </b>
          </label>
          <input
            type="text"
            class="form-control"
            value={title}
            onChange={handleChange}
            name="title"
          />
        </div>
        <div class="mb-3">
          <label class="form-label">
            <b>BODY : </b>
          </label>
          <input
            type="text"
            class="form-control"
            value={body}
            onChange={handleChange}
            name="body"
          />
        </div>
        <div>
          <button type="button" class="btn btn-primary" onClick={handleSubmit}>
            SUBMIT
          </button>
        </div>
      </form>
      <br />
    </div>
  );
}
