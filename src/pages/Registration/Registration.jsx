const Registration = () => {
  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;

    form.reset();
  };
  return (
    <>
      <form onSubmit={handleSubmit} autoComplete="off">
        <label>
          Username
          <input type="text" name="name" />
        </label>
        <label>
          Email
          <input type="email" name="email" />
        </label>
        <label>
          Password
          <input type="password" name="password" />
        </label>
        <button type="submit">Register</button>
      </form>
    </>
  );
};

export default Registration;
