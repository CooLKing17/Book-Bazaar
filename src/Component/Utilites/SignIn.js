import { useState } from "react";
import {
  getProfile,
  LoginVerification,
  server,
  userUpload,
} from "../Logic and Connection/Logic";
import { useDispatch } from "react-redux";
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/ReactToastify.css'
import { setProfileData } from "../Store/Profilecart";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const dispatch = useDispatch();
  const navigate= useNavigate();
    
 
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
    password: "",
    confirmpassword: "",
  });

  const [loginUser, setLoginUser] = useState({
    email: "",
    password: "",
  });

  const handleData = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };
  const [files, setFiles] = useState([]);
  const handleFileChange = (e) => {
    setFiles(e.target.files);
  };
  
  

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Destructure necessary fields from user
    const {
        fullname,
        email,
        mobileno,
        address,
        pincode,
        password,
        confirmpassword,
    } = user;

    // Check required fields are filled
    if (!fullname || !email || !mobileno || !address || !pincode) {
        console.log("Required fields are missing");
        toast.warning("Required fields are missing");
        return;
    }

    // Check if passwords are provided and match
    if (!password || !confirmpassword) {
        console.log("Password fields are missing");
        toast.warning("Password fields are missing");
        return;
    }

    if (password.toLowerCase() !== confirmpassword.toLowerCase()) {
        console.log("Passwords do not match");
        toast.warning("Passwords do not match");
        return;
    }

    try {
        // Upload user details first
        const userResponse = await userUpload(user);

        if (userResponse) {
            console.log("User registration successful:", userResponse);
            const UserId = userResponse.id;
            localStorage.setItem("UserId", UserId);

            // Check if there is a file to upload
            if (files && files.length > 0) {
                const formData = new FormData();
                formData.append("file", files[0]);

                try {
                    const data = await axios.post(
                        `${server}/user/api/uploadImage/${UserId}`,
                        formData,
                        {
                            headers: {
                                "Content-Type": "multipart/form-data",
                            },
                        }
                    );
                    console.log("Image upload successful:", data);
                    dispatch(setProfileData(data));
                    toast.success("Registration Successful");
                    navigate("/")
                } catch (error) {
                    console.error("Image upload failed:", error);
                    toast.warning("Image upload failed, but registration was successful.");
                    navigate("/")
                }
            } else {
                console.log("No image to upload");
                toast.warning("No image to upload");
                navigate("/")
            }
        } else {
            console.log("User registration failed");
            toast.warning("Email already registered");
        }
    } catch (error) {
        console.error("User registration failed:", error);
        toast.error("User registration failed");
    }
};


  

  const handleLogin = async (e) => {
    e.preventDefault();

    if (loginUser.email && loginUser.password) {
      const data = await LoginVerification(loginUser);

      const UserId = data.id;
      console.log(UserId)
      localStorage.setItem("UserId",UserId)
      console.log(data);
      toast.success(data.massage)
      if (data.status) {
        const info = await getProfile(UserId);
        console.log(info);
        if(info){
          dispatch(setProfileData(info));
          navigate("/")
        } else {
          console.log("data not coming");
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
        
        <div className="flex min-h-screen items-center justify-center bg-gradient-to-r from-blue-500 to-indigo-600 py-12 px-4 sm:px-6 lg:px-8">
        <ToastContainer/>
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
                      
                      autoComplete="current-password"
                      className="block w-full rounded-md border border-gray-300 py-2 px-3 text-gray-900 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      required
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
        <div className="flex min-h-screen items-center justify-center bg-gradient-to-r from-green-400 to-blue-500 py-20 px-4 sm:px-6 lg:px-8">
        <ToastContainer className=" w-5 "/>
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
                  <label htmlFor="fullname" className="sr-only">
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
                    type="text"
                    autoComplete="bday"
                    required
                    className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-500 text-gray-900 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    onClick={(e) => e.target.type = "date"} // Ensure the input type remains date
                    onBlur={(e) => !user.dob && (e.target.value = '')} // Clear value if it’s empty to show placeholder text
                    placeholder="Date of Birth" // Text to indicate format
         />
                </div>
                <div>
                  <label htmlFor="gender" className="sr-only">
                    Gender
                  </label>
                  <select
                    id="gender"
                    name="gender"
                    value={user.gender}
                    onChange={handleData}
                    className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-500 text-gray-900 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  >
                    <option value="">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="mobileno" className="sr-only">
                    Mobile Number
                  </label>
                  <input
                    id="mobileno"
                    name="mobileno"
                    value={user.mobileno}
                    onChange={handleData}
                    type="tel"
                    autoComplete="tel"
                    required
                    className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-500 text-gray-900 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    placeholder="Mobile Number"
                  />
                </div>
                <div>
                  <label htmlFor="alternatemobileno" className="sr-only">
                    Alternate Mobile Number
                  </label>
                  <input
                    id="alternatemobileno"
                    name="alternatemobileno"
                    value={user.alternatemobileno}
                    onChange={handleData}
                    type="tel"
                    className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-500 text-gray-900 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    placeholder="Alternate Mobile Number"
                  />
                </div>
                <div>
                  <label htmlFor="address" className="sr-only">
                    Address
                  </label>
                  <input
                    id="address"
                    name="address"
                    value={user.address}
                    onChange={handleData}
                    type="text"
                    autoComplete="street-address"
                    required
                    className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-500 text-gray-900 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    placeholder="Address"
                  />
                </div>
                <div>
                  <label htmlFor="pincode" className="sr-only">
                    Pincode
                  </label>
                  <input
                    id="pincode"
                    name="pincode"
                    value={user.pincode}
                    onChange={handleData}
                    type="text"
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
                    required
                    className="block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm placeholder-gray-500 text-gray-900 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    placeholder="State"
                  />
                </div>
                <div>
                  <label htmlFor="occupation" className="sr-only">
                    Occupation
                  </label>
                  <input
                    id="occupation"
                    name="occupation"
                    value={user.occupation}
                    onChange={handleData}
                    type="text"
                    className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-500 text-gray-900 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    placeholder="Occupation"
                  />
                </div>
                <div>
                  <label htmlFor="uploadimage" className="block text-sm font-medium text-gray-700">
                    Upload Image
                  </label>
                  <input
                    id="uploadimage"
                    name="uploadimage"
                    onChange={handleFileChange}
                    type="file"
                    accept="image/*"
                    className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-indigo-600 file:text-white hover:file:bg-indigo-500"
                  />
                </div>
                {user.profileimage && (
                  <div className="mt-4">
                    <img
                      src={user.profileimage}
                      alt="Profile Preview"
                      className="w-32 h-32 rounded-full mx-auto"
                    />
                  </div>
                )}
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
                    id="confirm-password"
                    name="confirmpassword"
                    value={user.confirmpassword}
                    onChange={handleData}
                    type="password"
                    required
                    className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-500 text-gray-900 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    placeholder="Confirm Password"
                  />
                </div>
                <div>
                  <button
                    type="submit"
                    onClick={handleSubmit}
                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    Sign Up
                  </button>
                </div>
              </div>
              
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default SignIn;
