import { Component, ErrorInfo, ReactNode } from "react";

interface Props { children: ReactNode }
interface State { hasError: boolean }

class AppErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false };

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error("Application rendering error", error, info.componentStack);
  }

  render() {
    if (this.state.hasError) {
      return (
        <main className="flex min-h-screen items-center justify-center bg-background px-6">
          <div className="max-w-lg rounded-lg border border-border bg-card p-10 text-center shadow-sm">
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-primary">Website recovery</p>
            <h1 className="mt-3 font-display text-2xl tracking-wider text-foreground">THIS PAGE COULD NOT LOAD</h1>
            <p className="mt-4 text-sm leading-7 text-muted-foreground">Please refresh the page or contact sales@bobbinsindia.com if the problem continues.</p>
            <button onClick={() => window.location.reload()} className="mt-7 rounded-sm bg-primary px-6 py-3 text-[11px] font-semibold uppercase tracking-[0.15em] text-white">Refresh page</button>
          </div>
        </main>
      );
    }
    return this.props.children;
  }
}

export default AppErrorBoundary;
