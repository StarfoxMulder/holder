var React = require("react"),
	Results = require("./children/Results"),
	Form = require("./children/Form"),
	Saved = require("./children.Saved"),
	helper = require("./utils/helper.js");

var Main = React.createClass({
	getInitialState: function() {

	},

	componentDidMount: function() {

	},

	componentDidUpdate: function() {

	},

	setSaved: function() {
		// May not use since this will render the article on this page by updating its state
	},

	saveNote: function() {
		helper.saveNote(newNote).then(function (response) {
      		console.log("Note successfully saved: ", response);
    	});
	},

	saveArticle: function() {
		helper.saveArticle(newArticle).then(function (response) {
      		console.log("Article successfully saved: ", response);
    	});
	},

	deleteNote: function() {

	},

	deleteArticle: function() {

	},

	render: function() {
		return (
			// JSX of layout
			<div className="container">
		    <div className="row">

          <Results
          />
          <Form
          />

        </div>
      </div>
		);
	}

});

module.exports = Main;
