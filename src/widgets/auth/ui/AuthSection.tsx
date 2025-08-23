import AuthForm from "../../../features/auth/ui/AuthForm";
import AuthAside from "../../../shared/ui/AuthAside";
import { useLocation } from "react-router";

function AuthSection() {
  const location = useLocation();
  const path = location.pathname;
  return (
    <section className="auth-section container">
      <AuthAside />
      <AuthForm mode={path === "/signup" ? "register" : "login"} />
    </section>
  );
}

export default AuthSection;
