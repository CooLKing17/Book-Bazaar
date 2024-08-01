import { useState } from "react";
import { getProfile, LoginVerification, userUpload } from "../Logic and Connection/Logic";
import { useDispatch } from "react-redux";
import { setProfileData } from "../Store/Profilecart";

const SignIn = () => {
  const [isSignIn, setIsSignIn] = useState(true);



  const dispatch = useDispatch()

  const [user, setUser] = useState({
    fullname: "",
    email: "",
    gender: "",
    dob: "",
    mobileno: "",
    alternatemobileno: "",
    address: "",
    pincode: "",
    state: "",
    occupation: "",
    // profileimage: "",
    password: "",
    confirmpassword: "",
  });

  const [loginUser, setLoginUser] = useState({
    email: "",
    password: "",
  });

  const handleData = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    if (
      user.fullname &&
      user.email &&
      user.mobileno &&
      user.address &&
      user.pincode
    ) {
      if (user.password.toLowerCase() !== user.confirmpassword.toLowerCase()) {
        console.log("password not matched");
      } else {
        const data = await userUpload(user);
        
        if(data){
          console.log("success" , data);
          dispatch(setProfileData(data));
        }
        else{
          console.log("failed");
        }
      }
    } else {
      console.log("something is missing");
    }
  };



  const handleLogin =async (e) => {
    e.preventDefault();

    if (loginUser.email && loginUser.password) {
      const data=await LoginVerification(loginUser);
      console.log(data)
      if(data.status){
       const info =await getProfile(loginUser)
       console.log(info);
       if(info){
        dispatch(setProfileData(info))
       }
       else{
        console.log("data not comming")
       }
      }
    } else {
      prompt("Sorry");
      setIsSignIn();
    }
  };

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
              <form className="space-y-6">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-900"
                  >
                    Email address
                  </label>
                  <div className="mt-2">
                    <input
                      id="email"
                      name="email"
                      value={loginUser.email}
                      onChange={(e) => {
                        setLoginUser({
                          ...loginUser,
                          [e.target.name]: e.target.value,
                        });
                      }}
                      type="email"
                      required
                      autoComplete="email"
                      className="block w-full rounded-md border border-gray-300 py-2 px-3 text-gray-900 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between">
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium text-gray-900"
                    >
                      Password
                    </label>
                    <div className="text-sm">
                      <a
                        href="/"
                        className="font-semibold text-indigo-600 hover:text-indigo-500"
                      >
                        Forgot password?
                      </a>
                    </div>
                  </div>
                  <div className="mt-2">
                    <input
                      id="password"
                      name="password"
                      value={loginUser.password}
                      onChange={(e) => {
                        setLoginUser({
                          ...loginUser,
                          [e.target.name]: e.target.value,
                        });
                      }}
                      type="password"
                      required
                      autoComplete="current-password"
                      className="block w-full rounded-md border border-gray-300 py-2 px-3 text-gray-900 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>
                <div>
                  <button
                    type="submit"
                    onClick={handleLogin}
                    className="flex w-full justify-center rounded-md bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Sign in
                  </button>
                </div>
              </form>
              <p className="mt-6 text-center text-sm text-gray-600">
                Not a member?{" "}
                <button
                  onClick={() => setIsSignIn(false)}
                  className="font-semibold text-indigo-600 hover:text-indigo-500"
                >
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
                <button
                  onClick={() => setIsSignIn(true)}
                  className="font-medium text-blue-600 hover:text-blue-500"
                >
                  log in to your account
                </button>
              </p>
            </div>
            <form method="post" className="mt-8 space-y-6">
              <div className="space-y-4">
                <div>
                  <label htmlFor="full-name" className="sr-only">
                    Full Name
                  </label>
                  <input
                    id="fullname"
                    name="fullname"
                    value={user.fullname}
                    onChange={handleData}
                    type="text"
                    autoComplete="name"
                    required
                    className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-500 text-gray-900 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    placeholder="Full Name"
                  />
                </div>
                <div>
                  <label htmlFor="email-address" className="sr-only">
                    Email address
                  </label>
                  <input
                    id="email-address"
                    name="email"
                    value={user.email}
                    onChange={handleData}
                    type="email"
                    autoComplete="email"
                    required
                    className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-500 text-gray-900 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    placeholder="Email address"
                  />
                </div>
                <div>
                  <label htmlFor="dob" className="sr-only">
                    Date of Birth
                  </label>
                  <input
                    id="dob"
                    name="dob"
                    value={user.dob}
                    onChange={handleData}
                    type="date"
                    autoComplete="bday"
                    required
                    className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-500 text-gray-900 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    placeholder="Date of Birth"
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-900">
                    Gender
                  </label>
                  <div className="flex items-center space-x-4">
                    <div>
                      <input
                        type="radio"
                        id="male"
                        name="gender"
                        required
                        onChange={handleData}
                        value="male"
                        className="focus:ring-indigo-500 focus:border-indigo-500 text-indigo-600 border-gray-300"
                      />
                      <label htmlFor="male" className="ml-2">
                        Male
                      </label>
                    </div>
                    <div>
                      <input
                        type="radio"
                        id="female"
                        name="gender"
                        value="female"
                        onChange={handleData}
                        required
                        className="focus:ring-indigo-500 focus:border-indigo-500 text-indigo-600 border-gray-300"
                      />
                      <label htmlFor="female" className="ml-2">
                        Female
                      </label>
                    </div>
                    <div>
                      <input
                        type="radio"
                        id="transgender"
                        name="gender"
                        value="transgender"
                        onChange={handleData}
                        required
                        className="focus:ring-indigo-500 focus:border-indigo-500 text-indigo-600 border-gray-300"
                      />
                      <label htmlFor="female" className="ml-2">
                      Transgender
                      </label>
                    </div>
                  </div>
                </div>
                <div>
                  <label htmlFor="mobile-number" className="sr-only">
                    Mobile No
                  </label>
                  <input
                    id="mobile-number"
                    name="mobileno"
                    value={user.mobileno}
                    onChange={handleData}
                    type="tel"
                    autoComplete="tel"
                    required
                    className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-500 text-gray-900 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    placeholder="Mobile No"
                  />
                </div>
                <div>
                  <label htmlFor="alternate-mobile-number" className="sr-only">
                    Alternate Mobile No
                  </label>
                  <input
                    id="alternate-mobile-number"
                    name="alternatemobileno"
                    value={user.alternatemobileno}
                    onChange={handleData}
                    type="tel"
                    className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-500 text-gray-900 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    placeholder="Alternate Mobile No"
                  />
                </div>
                <div>
                  <label htmlFor="pincode" className="sr-only">
                    Occupation
                  </label>
                  <input
                    id="occupation"
                    name="occupation"
                    value={user.occupation}
                    onChange={handleData}
                    type="text"
                    autoComplete="occupation"
                    required
                    className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-500 text-gray-900 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    placeholder="occupation"
                  />
                </div>

                <div>
                  <label htmlFor="address" className="sr-only">
                    Address
                  </label>
                  <textarea
                    id="address"
                    name="address"
                    value={user.address}
                    onChange={handleData}
                    type="text"
                    autoComplete="address"
                    required
                    rows="3"
                    className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-500 text-gray-900 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    placeholder="Address"
                  ></textarea>
                </div>
                <div>
                  <label htmlFor="pincode" className="sr-only">
                    Pin Code
                  </label>
                  <input
                    id="pincode"
                    name="pincode"
                    value={user.pincode}
                    onChange={handleData}
                    type="text"
                    autoComplete="postal-code"
                    required
                    className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-500 text-gray-900 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    placeholder="Pincode"
                  />
                </div>

                <div>
                  <label htmlFor="state" className="sr-only">
                    State
                  </label>
                  <input
                    id="state"
                    name="state"
                    value={user.state}
                    onChange={handleData}
                    type="text"
                    autoComplete="address-level1"
                    required
                    className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-500 text-gray-900 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    placeholder="State"
                  />
                </div>
                <div>
                  <label htmlFor="password" className="sr-only">
                    Password
                  </label>
                  <input
                    id="password"
                    name="password"
                    value={user.password}
                    onChange={handleData}
                    type="password"
                    autoComplete="new-password"
                    required
                    className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-500 text-gray-900 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    placeholder="Password"
                  />
                </div>
                <div>
                  <label htmlFor="confirm-password" className="sr-only">
                    Confirm Password
                  </label>
                  <input
                    id="confirmpassword"
                    name="confirmpassword"
                    value={user.confirmpassword}
                    onChange={handleData}
                    type="password"
                    autoComplete="new-password"
                    required
                    className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-500 text-gray-900 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    placeholder="Confirm Password"
                  />
                </div>
                <div>
                  <label
                    htmlFor="upload-image"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Upload Image
                  </label>
                  <input
                    id="upload-image"
                    name="uploadimage"
                    value={user.profileimage}
                    onChange={handleData}
                    type="file"
                    accept="image/*"
                    className="mt-1 block w-full text-sm text-gray-900 border border-gray-300 rounded-md cursor-pointer bg-gray-50 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="terms"
                    name="terms"
                    value={user.terms}
                    onChange={handleData}
                    type="checkbox"
                    required
                    className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                  />
                  <label
                    htmlFor="terms"
                    className="ml-2 block text-sm text-gray-900"
                  >
                    I agree to the{" "}
                    <a
                      href="/"
                      className="font-medium text-indigo-600 hover:text-indigo-500"
                    >
                      terms and conditions
                    </a>
                  </label>
                </div>
              </div>
              <div>
                <button
                  type="submit"
                  onClick={handleSubmit}
                  className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
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
