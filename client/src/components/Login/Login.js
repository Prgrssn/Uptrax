import "./Login.scss";

export default function Login() {
  return (
    <article className="login-card">
      <h2 className="login-card__title">Log In</h2>
      <form className="login-form">
        <label className="login-form__label">Email</label>
        <input type="email" className="login-form__input" />

        <label className="login-form__label">Password</label>
        <input type="password" className="login-form__input" />

        <button type="submit"> Log In</button>
      </form>
    </article>
  );
}
