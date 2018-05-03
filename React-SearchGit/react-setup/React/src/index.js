import React from "react";
import ReactDOM from "react-dom";
import { tailsSelector, headsSelector} from "./selectors";

const Results = (props) => (
  <div>
      <p>Heads: {props.heads}</p>
      <p>Tails: {props.tails}</p>
  </div>
)

const mapStateToProps = state => ({
  heads: headsSelector(state),
  tails: tailsSelector(state)
})

export default connect(mapStateToProps, null)(Results);

class Balance extends React.Component {
  componentWillReceiveProps(nextProps) {
    if (nextProps.balance !== this.props.balance) {
      this.setState({
        balance: nextProps.balance
      });
      console.log("Changed");
    }
  }

  render() {
    return <h3>Account Balance: ${this.props.balance}</h3>;
  }
}