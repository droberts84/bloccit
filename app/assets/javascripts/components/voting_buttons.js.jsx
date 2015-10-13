var VotingButtons = React.createClass({

  voteButtons: function() {
    if (this.props.allowVote) {
      return [
        <i key="up" className="glyphicon glyphicon-chevron-up" onClick={this.props.upVote} />,
        <div key="points"><strong>{this.props.points}</strong></div>,
        <i key="down" className="glyphicon glyphicon-chevron-down" onClick={this.props.downVote} />
      ]
    }
    else {
      return <div className="glyphicon glyphicon-ban-circle" />
    }
  },

  render: function() {
    return (
      <div className="pull-left vote-arrows">
        {this.voteButtons()}
      </div>
    )
  }
});
