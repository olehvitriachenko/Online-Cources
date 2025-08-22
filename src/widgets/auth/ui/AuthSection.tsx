import AuthForm from "../../../features/auth/ui/AuthForm";
import AuthAside from "../../../shared/ui/AuthAside";
import { useLocation } from "react-router";

function AuthSection() {
  const location = useLocation();
  const path = location.pathname;

  const handleSubmit = (data: {
    name: string;
    email: string;
    password: string;
  }) => {
    console.log("Registering user: ", data);
  };
  return (
    <section className="auth-section container">
      <AuthAside />
      <AuthForm
        mode={path === "/signup" ? "register" : "login"}
        onSubmit={() => handleSubmit}
      />
    </section>
  );
}

export default AuthSection;
