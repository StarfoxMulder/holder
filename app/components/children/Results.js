var React = require("react");

var Results = React.createClass({
	// How do I use the helper to pull mongoDB documents and loop them through in a way that the articles render within this framework?

	render: function() {
	  return (

			<div className="col-xs-6 col-xs-offset-1">
				<div id="articleContainer">
				  <div id="articles">
				  <ul>
				  {{#each found}}
				    <li>
				      <div className='media'>
				        <div className='media-left'>
				          <img className='media-object' src='{{this.image}}'>
				        </div>
				        <div className='media-body'>
				          <a href='{{this.link}}'>
				          <h4 className='media-heading'>{{this.title}}</h4>
				          </a>{{this.source}}
				        </div>
				        <div className='media-right'>
				          <form>
				            <button type='submit' className='btn btn-info noteBtn' data-id='{{this._id}}' href='/{{this._id}}'>
				            <span className='glyphicon glyphicon-comment' aria-hidden='true'></span> Note
				            </button>
				            <button type='submit' className='btn btn-warning disabled' data-id='{{this._id}}' href='/save/{{this._id}}'>
				            <span className='glyphicon glyphicon-pushpin' aria-hidden='true'></span> Save
				            </button>
				          </form>
				        </div>
				      </div>
				    </li>
				  {{/each}}
				  </ul>
				  </div>
				</div>
			</div>

	  );
	}
});

module.exports = Results;
