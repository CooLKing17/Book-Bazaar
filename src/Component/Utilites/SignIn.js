import { useState } from 'react';

const SignIn = () => {
  const [isSignIn, setIsSignIn] = useState(true); // Default to sign-in form

  return (
    <>
      {/* Sign in */}
      {isSignIn ? (
        <div className="flex min-h-screen items-center justify-center bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-md">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
              <img
                alt="Your Company"
                src="https://cdn-icons-png.flaticon.com/128/11422/11422050.png"
                className="mx-auto h-12 w-auto"
              />
              <h2 className="mt-6 text-center text-2xl font-bold text-gray-900">
                Sign in to your account
              </h2>
            </div>
            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-sm">
              <form action="/" method="POST" className="space-y-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-900">
                    Email address
                  </label>
                  <div className="mt-2">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      autoComplete="email"
                      className="block w-full rounded-md border-gray-300 shadow-sm py-2 px-3 text-gray-900 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between">
                    <label htmlFor="password" className="block text-sm font-medium text-gray-900">
                      Password
                    </label>
                    <div className="text-sm">
                      <a href="/" className="font-semibold text-indigo-600 hover:text-indigo-500">
                        Forgot password?
                      </a>
                    </div>
                  </div>
                  <div className="mt-2">
                    <input
                      id="password"
                      name="password"
                      type="password"
                      required
                      autoComplete="current-password"
                      className="block w-full rounded-md border-gray-300 shadow-sm py-2 px-3 text-gray-900 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>
                <div>
                  <button
                    type="submit"
                    className="flex w-full justify-center rounded-md bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-500 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Sign in
                  </button>
                </div>
              </form>
              <p className="mt-6 text-center text-sm text-gray-600">
                Not a member?{" "}
                <button onClick={() => setIsSignIn(false)} className="font-semibold text-indigo-600 hover:text-indigo-500">
                  Sign Up
                </button>
              </p>
            </div>
          </div>
        </div>
      ) : (
        // Sign up
        <div className="flex min-h-screen items-center justify-center bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-md">
            <div>
              <h2 className="text-center text-3xl font-extrabold text-gray-900">
                Sign Up
              </h2>
              <p className="mt-2 text-center text-sm text-gray-600">
                Or{" "}
                <button onClick={() => setIsSignIn(true)} className="font-medium text-blue-600 hover:text-blue-500">
                  log in to your account
                </button>
              </p>
            </div>
            <form className="mt-8 space-y-6">
              <div className="space-y-4">
                <div>
                  <label htmlFor="full-name" className="sr-only">Full Name</label>
                  <input
                    id="full-name"
                    name="full-name"
                    type="text"
                    autoComplete="name"
                    required
                    className="appearance-none rounded-t-md block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    placeholder="Full Name"
                  />
                </div>
                <div>
                  <label htmlFor="email-address" className="sr-only">Email address</label>
                  <input
                    id="email-address"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="appearance-none rounded-md block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    placeholder="Email address"
                  />
                </div>
                <div>
                  <label htmlFor="mobile-number" className="sr-only">Mobile No</label>
                  <input
                    id="mobile-number"
                    name="mobile-number"
                    type="tel"
                    autoComplete="tel"
                    required
                    className="appearance-none rounded-md block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    placeholder="Mobile No"
                  />
                </div>
                <div>
                  <label htmlFor="alternate-mobile-number" className="sr-only">Alternate Mobile No</label>
                  <input
                    id="alternate-mobile-number"
                    name="alternate-mobile-number"
                    type="tel"
                    className="appearance-none rounded-md block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    placeholder="Alternate Mobile No"
                  />
                </div>
                <div>
                  <label htmlFor="address" className="sr-only">Address</label>
                  <textarea
                    id="address"
                    name="address"
                    rows="3"
                    className="appearance-none rounded-md block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    placeholder="Address"
                  ></textarea>
                </div>
                <div>
                  <label htmlFor="password" className="sr-only">Password</label>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="new-password"
                    required
                    className="appearance-none rounded-md block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    placeholder="Password"
                  />
                </div>
                <div>
                  <label htmlFor="confirm-password" className="sr-only">Confirm Password</label>
                  <input
                    id="confirm-password"
                    name="confirm-password"
                    type="password"
                    required
                    className="appearance-none rounded-b-md block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    placeholder="Confirm Password"
                  />
                </div>
                <div>
                  <label htmlFor="upload-image" className="block text-sm font-medium text-gray-700">
                    Upload Image
                  </label>
                  <input
                    id="upload-image"
                    name="upload-image"
                    type="file"
                    accept="image/*"
                    className="mt-1 block w-full text-sm text-gray-900 border border-gray-300 rounded-md cursor-pointer bg-gray-50 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 sm:text-sm"
                  />
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="terms"
                    name="terms"
                    type="checkbox"
                    required
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <label
                    htmlFor="terms"
                    className="ml-2 block text-sm text-gray-900"
                  >
                    I agree to the{" "}
                    <a href="/" className="font-medium text-blue-600 hover:text-blue-500">
                      terms and conditions
                    </a>
                  </label>
                </div>
              </div>
              <div>
                <button
                  type="submit"
                  className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Sign Up
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default SignIn;
