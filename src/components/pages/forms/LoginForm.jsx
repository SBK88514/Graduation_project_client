import { useContext } from "react";

import React from "react";
import { ErrorMessage, Formik } from "formik";
import { LoginSchema } from "../../../schema/Index";
import { AuthContext } from "../../contexts/AuthContext";

const initialValues = {
  manager_email: "",
  manager_password: "",
};

function Login() {
  const { handleLogin } = useContext(AuthContext);

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={LoginSchema}
      onSubmit={async (values, actions) => {
        await handleLogin(values);

        actions.resetForm();
      }}
    >
      {({ handleChange, handleSubmit, values, handleBlur, isSubmitting }) => (
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-2">
            <label
              htmlFor="manager_email"
              className="block text-sm font-semibold text-amber-800 tracking-wide"
            >
              Email
            </label>
            <div className="relative">
              <input
                value={values.manager_email}
                onChange={handleChange}
                onBlur={handleBlur}
                name="manager_email"
                type="email"
                id="manager_email"
                className="block w-full pl-10 rounded-xl border-2 border-amber-200 bg-amber-50 py-3 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all duration-200"
                placeholder="Enter your email"
                required
              />
              <ErrorMessage name={"manager_email"}>
                {(msg) => (
                  <div className="mt-1">
                    <p className="text-red-500 text-base font-semibold">
                      {msg}
                    </p>
                  </div>
                )}
              </ErrorMessage>
            </div>
          </div>

          <div className="space-y-2">
            <label
              htmlFor="manager_password"
              className="block text-sm font-semibold text-amber-800 tracking-wide"
            >
              Password
            </label>
            <div className="relative">
              <input
                value={values.manager_password}
                onChange={handleChange}
                onBlur={handleBlur}
                name="manager_password"
                type="password"
                id="manager_password"
                className="block w-full pl-10 rounded-xl border-2 border-amber-200 bg-amber-50 py-3 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all duration-200"
                placeholder="Enter your password"
                required
              />
              <ErrorMessage name={"manager_password"}>
                {(msg) => (
                  <div className="mt-1">
                    <p className="text-red-500 text-base font-semibold">
                      {msg}
                    </p>
                  </div>
                )}
              </ErrorMessage>
            </div>
          </div>

          <button
            disabled={isSubmitting}
            type="submit"
            className="w-full bg-amber-600 text-white rounded-xl py-3 px-4 font-semibold hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] shadow-md hover:shadow-lg"
          >
            {isSubmitting ? "inProcces..." : "Sign In"}
          </button>
        </form>
      )}
    </Formik>
  );
}

export default Login;
