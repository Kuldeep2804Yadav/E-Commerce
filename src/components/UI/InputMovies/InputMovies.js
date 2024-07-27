import React, { useState } from "react";
import { Form } from "react-bootstrap";

const InputMovies = (props) => {
  const [date, setDate] = useState("");
  const [title, setTitle] = useState("");
  const [director, setDirector] = useState("");
  const addMoviesFormHandler = (e) => {
    e.preventDefault();
    const NewMovieObj={
        date:date,
        title:title,
        director:director,
    }
    props.addMoviesHandler(NewMovieObj)
  };
  const dateHandler = (e) => {
    setDate(e.target.value);
  };
  const titleHandler = (e) => {
    setTitle(e.target.value);
  };
  const directorHandler = (e) => {
    setDirector(e.target.value);
  };
  return (
    <Form onSubmit={addMoviesFormHandler} className="form mt-4 mb-1 w-50 h-25  border border-4 border-secondary p-3 m-auto">
    <h1>Add Movies</h1><hr/>
      <Form.Group className="m-3">
        <Form.Label htmlFor="date">Release Date</Form.Label>
        <Form.Control type="date" id="date" value={date} onChange={dateHandler} />
      </Form.Group>
      <Form.Group className="m-3">
        <Form.Label htmlFor="title">Title</Form.Label>
        <Form.Control type="text" id="text" value={title} onChange={titleHandler} />
      </Form.Group>
      <Form.Group className="m-3">
        <Form.Label htmlFor="director">Director</Form.Label>
        <Form.Control type="text" id="director" value={director} onChange={directorHandler} />
      </Form.Group>
      <button type="submit" className="m-3 btn btn-primary">Add Movies</button>
    </Form>
  );
};

export default InputMovies;
