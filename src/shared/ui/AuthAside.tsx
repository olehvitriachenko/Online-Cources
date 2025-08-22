import AuthShowcase from "./AuthShowcase";

function AuthAside() {
  return (
    <>
      <aside className="auth-aside">
        <header className="auth-aside__header">
          <h2 className="auth-aside__title">Students Testimonials</h2>
          <div className="auth-aside__description">
            <p>
              Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam
              eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac
              cum eget habitasse in velit fringilla feugiat senectus in.
            </p>
          </div>
        </header>

        <div className="auth-aside__body">
          <AuthShowcase />
        </div>
      </aside>
    </>
  );
}

export default AuthAside;
