var PostVote = React.createClass({

  getInitialState: function() {
    return { points: this.props.post.points };
  },

  submitVote: function(endpoint) {
    $.ajax({
        url: "/posts/" + this.props.post.id + "/" + endpoint,
        type: 'POST',
        success: function() {
          console.log("vote success!")
        },
        error: function(xhr, status, err) {
          console.log(err);
        }
      });
  },

  upVote: function() {
    this.setState({ points: this.state.points + 1 });
    this.submitVote('up-vote');
  },

  downVote: function() {
    this.setState({ points: this.state.points - 1 });
    this.submitVote('down-vote');
  },

  render: function() {
    return <VotingButtons
      points={this.state.points}
      upVote={this.upVote}
      downVote={this.downVote}
      allowVote={this.props.allowVote}
    />;
  }
});
