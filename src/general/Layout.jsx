import { ErrorBoundary } from "react-error-boundary";
import { ErrorFallback } from "../pages/ErrorFallback.jsx";

export const Layout = ({ children }) => {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>{children}</ErrorBoundary>
  );
};
