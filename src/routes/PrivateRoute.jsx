export default function PrivateRoute({ fallback, children }) {
  const isLogged = window.localStorage.getItem("gmail");
  if (!isLogged) {
    return fallback;
  }
  return <div>{children}</div>;
}
