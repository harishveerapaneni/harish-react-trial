import Field from '../Field';

export default function RegisterForm() {
  return (
    <div>
      <h3>Register</h3>
      <div className="form-container">
        <Field label="Username:" placeholder="provide username" />
        <Field label="Firstname:" placeholder="provide Firstname" />
        <Field label="Lastname:" placeholder="provide Lasttname" />
        <Field label="Email:" type="email" placeholder="provide email" />
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
