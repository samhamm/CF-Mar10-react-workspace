//client.jsx

'use strict';

var React = require('react');

var notesData = [{noteBody: 'hello world', _id: 1 }, {noteBody: 'goodbye world', _id: 2}];

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

  render: function () {    //will return JS for rendering an element, or JSX
    return (
      <main>
        <Notelist data={this.state.notesData} />
      </main>
    )
  }
});

React.render(<App />, document.body);
