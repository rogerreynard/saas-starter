'use client';

import { Component, type ReactNode } from 'react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback ?? (
        <div className="flex min-h-[400px] flex-col items-center justify-center p-8">
          <h2 className="mb-4 text-xl font-semibold text-gray-900">Something went wrong</h2>
          <p className="mb-4 text-gray-600">We&apos;re sorry, but something unexpected happened.</p>
          <button
            onClick={() => this.setState({ hasError: false, error: undefined })}
            className="rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
          >
            Try again
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
