"use client"

import React from "react";
import ErrorPage from "../error";

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | undefined;
}

export default class StandardErrorBoundary extends React.Component<{}, ErrorBoundaryState> {
  constructor( public props: any) {
    super(props);

    this.state = {
      hasError: false,
      error: undefined
    };
  }

  static getDerivedStateFromError(error: any) {
    return {
      hasError: true,
      error: error
    };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.log("Error caught!");
    console.error(error);
    console.error(errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <ErrorPage />;
    } else {
      return this.props.children;
    }
  }
}
