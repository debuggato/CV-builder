import React, { Component } from 'react';

type State = {
	hasError: boolean;
}

class ErrorBoundary extends Component<{}, State> {
	readonly state = { hasError: false }

	componentDidCatch(error: any, errorInfo: any) {
		this.setState({
			hasError: true
		});
		console.log(error, errorInfo);
	}

	render() {
		const { hasError } = this.state;

		if (hasError) return <h3>Something went wrong.</h3>;

		return this.props.children;
	}
}

export default ErrorBoundary;