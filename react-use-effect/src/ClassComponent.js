import { Component } from "react";

class ClassComponent extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // useeffect with  empty dependencies
    console.log("ComponentDidMount ClassComponent runs after first render");
  }

  componentDidUpdate(prevProps) {
    // useeffect with no empty dependencies
  }

  componentWillUnmount() {
    //useEffect with cleanup function
  }

  render() {
    console.log("Render in ClassComponent runs");
    return (
      <div>
        <h1>This is Class component</h1>
      </div>
    );
  }
}

export default ClassComponent;
