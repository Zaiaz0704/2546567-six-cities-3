import { useState } from 'react';
import { RootState, useAppDispatch } from '../../store/index.ts';
import { AuthPayload } from '../../store/slices/user-slice.ts';
import { useSelector } from 'react-redux';
import { AuthorizationStatus } from '../../mocks/const.ts';
import { tryAuth } from '../../store/middleware/user-thunk.ts';

function LoginPage() {
  const dispatch = useAppDispatch();
  const [authPayload, setAuthPayload] = useState<AuthPayload>({
    email: '',
    password: '',
  });

  const authorizationStatus = useSelector(
    (state: RootState) => state.user.authorizationStatus
  );

  if (authorizationStatus === AuthorizationStatus.Auth) {
    window.location.href = '/';
  }

  return (
    <main className="page__main page__main--login">
      <div className="page__login-container container">
        <section className="login">
          <h1 className="login__title">Sign in</h1>
          <form className="login__form form" action="#" method="post">
            <div className="login__input-wrapper form__input-wrapper">
              <label className="visually-hidden">E-mail</label>
              <input
                className="login__input form__input"
                type="email"
                name="email"
                placeholder="Email"
                required
                onChange={(evt) => {
                  const emailValue = evt.target.value;
                  const newPayload = { ...authPayload, email: emailValue };
                  setAuthPayload(newPayload);
                }}
              />
            </div>
            <div className="login__input-wrapper form__input-wrapper">
              <label className="visually-hidden">Password</label>
              <input
                className="login__input form__input"
                type="password"
                name="password"
                placeholder="Password"
                required
                onChange={(evt) => {
                  const passwordValue = evt.target.value;
                  const newPayload = {
                    ...authPayload,
                    password: passwordValue,
                  };
                  setAuthPayload(newPayload);
                }}
              />
            </div>
            <button
              className="login__submit form__submit button"
              type="submit"
              onClick={(e) => {
                e.preventDefault();
                dispatch(tryAuth(authPayload));
              }}
            >
              Sign in
            </button>
          </form>
        </section>
        <section className="locations locations--login locations--current">
          <div className="locations__item">
            <a className="locations__item-link" href="#">
              <span>Amsterdam</span>
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}

export default LoginPage;
