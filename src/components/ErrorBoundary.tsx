import React, { Component } from 'react';

class ErrorBoundary extends Component {
  state = { hasError: false }

  componentDidCatch(error: any, errorInfo: any) {
    this.setState({
      hasError: true
    });
    console.log(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;