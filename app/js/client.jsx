//client.jsx

'use strict';

var React = require('react');
var ajax = require('jquery').ajax;

var notesData = [{noteBody: 'hello world', _id: 1 }, {noteBody: 'goodbye world', _id: 2}];

var NoteForm = React.createClass({
  getInitialState: function() {
    return {newNote: {noteBody: ''}};
  },

  handleChange: function(event) {
   this.setState({newNote: {noteBody: event.target.value}});
  },

  render: function() {
    return (
      <form>
        <label htmlFor="newnote">New Note</label>
        <input id="newnote" type="text" value={this.state.newNote.notesBody} onChange={this.handleChange} />
        <button type="submit">Create New Note</button>
      </form>
    )
  }
});

var Note = React.createClass({
  render: function() {
    return <li> key={this.props.data._id}>{this.props.data.noteBody}</li>
  }
});

var NoteList = React.createClass({
  render: function() {
    var notes = this.props.data.map(function(note) { //props are "100% unchangeable" data
      return <Note data = {note} key={note._id} />
    });
    return (
      <section>
        <h1>Hello from React, muthafucka!</h1>
        <ul>
          {notes}
        </ul>
      </section>
    )
  }
});

var App = React.createClass({
  getInitialState: function() { //puts it in state, instead of hard-coded into props
    return {notesData: notesData};
  },

  onNewNote: function(note) {
    note._id = this.state.notesData.length + 1;
    var notesDataCopy = this.state.notesData;
    notesDataCopy.push(note);
    this.setSTate({notesData: {notesDataCopy}});
  },

  render: function () {    //will return JS for rendering an element, or JSX
    return (
      <main>
        <Notelist data={this.state.notesData} />
      </main>
    )
  }
});

React.render(<App />, document.body);
