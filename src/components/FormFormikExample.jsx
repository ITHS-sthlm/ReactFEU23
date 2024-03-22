import { Formik, Form, Field, ErrorMessage } from 'formik';

const FormFormikExample = () => {
  const validate = (values) => {
    const errors = {};
    if (!values.username) {
      errors.username = 'Required';
    }
    if (!values.email) {
      errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = 'Invalid email address';
    }
    if (!values.password) {
      errors.password = 'Required';
    }
    return errors;
  };

  //Logga ALLTID ut datan från formulär så att ni vet att det kommer in info
  const handleSubmit = (values) => {
    console.log('Form submitted:', values);
  };

  return (
    <div>
      <h1>Formik Example</h1>
      <Formik
        initialValues={{ username: '', email: '', password: '' }}
        validate={validate}
        onSubmit={handleSubmit}
      >
        {({ errors, touched }) => ( // Destructure errors och touched från Formik
          <Form>
            <div>
              <label htmlFor="username">Username:</label>
              <Field type="text" id="username" name="username" />
              <ErrorMessage name="username" component="div" className="error" />
            </div>
            <div>
              <label htmlFor="email">Email:</label>
              <Field type="email" id="email" name="email" />
              <ErrorMessage name="email" component="div" className="error" />
              {errors.email && touched.email && ( // Visa felmeddelande endast när fältet är rört och har ett fel
                <div className="error">{errors.email}</div>
              )}
            </div>
            <div>
              <label htmlFor="password">Password:</label>
              <Field type="password" id="password" name="password" />
              <ErrorMessage name="password" component="div" className="error" />
            </div>
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default FormFormikExample;
