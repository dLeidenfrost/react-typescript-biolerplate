import * as React from "react";

interface IHomeProps {
  name: string;
  age: number;
}

export default class Home extends React.Component<IHomeProps, {}> {
  public render() {
    return (
      <div>This is a test {this.props.name}, an you too {this.props.age}</div>
    );
  }
}
