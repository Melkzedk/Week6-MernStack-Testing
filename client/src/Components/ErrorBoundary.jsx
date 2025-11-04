import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error("ErrorBoundary caught", error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="alert alert-danger mt-3" role="alert">
          Something went wrong. Please try refreshing the page.
        </div>
      );
    }

    return this.props.children;
  }
}
