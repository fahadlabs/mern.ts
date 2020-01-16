import React, { Component } from 'react';

import Header from './components/Header';

class App extends Component<IAppProps, IAppState> {
  constructor(props: IAppProps) {
    super(props);
    this.state = {
      message: null
    };
  }

  async componentDidMount() {
    try {
      let data = await fetch('/api/hello');
      let { message } = await data.json();
      this.setState({ message });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    return (
      <div>
        <Header />
        <h1>{this.state.message}!!!</h1>
      </div>
    );
  }
}

export interface IAppProps {}

export interface IAppState {
  message: string;
}

export default App;
