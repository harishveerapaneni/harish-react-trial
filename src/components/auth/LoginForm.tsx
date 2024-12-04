import Field from '../Field';
export default function LoginForm() {
  return (
    <div>
      <h3>Login</h3>
      <div className="form-container">
        <Field label="Username:" placeholder="provide username" />
        <Field
          label="Password:"
          type="password"
          placeholder="provide password"
        />
      </div>
      <button>Submit</button>
    </div>
  );
}
