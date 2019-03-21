import React from 'react';
import PropTypes from 'prop-types';
import ReactJson from 'react-json-view';

const LoadingStyles = {
  textAlign: "center",
  margin: "50px auto"
}

const ExampleStyles = {
  textAlign: "left",
  margin: "10px 0px",
  padding: "10px",
  position: "relative",
  borderRadius: "4px"
}

class TweetAPIExample extends React.Component {

  fetchTweet(){
    fetch("https://www.trumptweets.rest/api")
      .then(
        (res) => {
          return res.json()
        }
      )
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            tweet: result
          })
        },
        (error) => {
          isLoaded: true,
          error
        }
      )
  };

  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      tweet: {}
    };
  }

  componentDidMount() {
    console.log("Component Mount")
    this.fetchTweet()
  }

  render() {
    const { error, isLoaded, tweet } = this.state;
    if (error) {
      return (
        <div style={ ExampleStyles }>
          <div>{`${tweet.err}`}</div>
        </div>
      )
    } else if (!isLoaded) {
      return(
        <div style={ ExampleStyles }>
          <div> Example is Loading... </div>
        </div>
      )
    } else {
      return (
          <ReactJson enableClipboard={false} style={ ExampleStyles } src={tweet} theme={"summerfruit"}></ReactJson>
      )
    }
  }
}

export default TweetAPIExample;
