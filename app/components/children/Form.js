var React = require("react");
var helpers = require("./utils/helper.js")

var Form = React.createClass({
  // How do I use the helper to pull mongoDB documents and loop them through in a way that the notes render within this framework? Or have an alert that there are no notes if none are associated with selected article


  render: function() {
    return (
      <div className="col-xs-4">
        <form id="noteForm">
          <div className="form-group">
            <label for="noteBody">Leave a Note</label>
            <textarea id="noteBody" className="form-control" rows="4"></textarea>
          </div>
          <button id="submitNote" type="submit" className="btn btn-info" data-id="584dab027dbc902e7c264fa6">Submit</button>
        </form>
        <div id="notesContainer">
          <ul id="notesUL">
          </ul>
        </div>
      </div>
    );
  }
});

module.exports = Form;
