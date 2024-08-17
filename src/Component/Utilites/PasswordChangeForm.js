import React, { useState } from "react";
import { ChangePassword } from "../Logic and Connection/Logic";
import 'react-toastify/dist/ReactToastify.css';

const PasswordChangeForm = ({ isChangingPassword, setResponse,setIsChangingPassword }) => {
  const [passwordData, setPasswordData] = useState({
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const handlePasswordChange = async () => {
    const { oldPassword, newPassword, confirmPassword } = passwordData;

    if (!oldPassword || !newPassword || !confirmPassword) {
      setResponse("All fields are required.");
      return;
    }

    if (newPassword.trim().toLowerCase() !== confirmPassword.trim().toLowerCase()) {
      setResponse("New password and confirm password do not match.");
      return;
    }

    try {
      const data = await ChangePassword(passwordData);
      if (data) {
        setResponse(data.message || "Password changed successfully");
        
        setIsChangingPassword(false);
      }
    } catch (error) {
      setResponse("An error occurred while changing the password.");
      console.error(error);
    }
  };

  return (
    <div className="space-y-4">
      
      <div>
        <label
          htmlFor="oldPassword"
          className="block text-sm font-medium text-gray-700"
        >
          Old Password
        </label>
        <input
          id="oldPassword"
          type="password"
          required
          value={passwordData.oldPassword}
          onChange={(e) =>
            setPasswordData({ ...passwordData, oldPassword: e.target.value })
          }
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm sm:text-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
        />
      </div>
      <div>
        <label
          htmlFor="newPassword"
          className="block text-sm font-medium text-gray-700"
        >
          New Password
        </label>
        <input
          id="newPassword"
          type="password"
          required
          value={passwordData.newPassword}
          onChange={(e) =>
            setPasswordData({ ...passwordData, newPassword: e.target.value })
          }
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm sm:text-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
        />
      </div>
      <div>
        <label
          htmlFor="confirmNewPassword"
          className="block text-sm font-medium text-gray-700"
        >
          Confirm New Password
        </label>
        <input
          id="confirmNewPassword"
          type="password"
          required
          value={passwordData.confirmPassword}
          onChange={(e) =>
            setPasswordData({
              ...passwordData,
              confirmPassword: e.target.value,
            })
          }
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm sm:text-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
        />
      </div>
      <div>
        <button
          type="button"
          onClick={() => {
            console.log(isChangingPassword);
            setIsChangingPassword(!isChangingPassword);
            handlePasswordChange();
          }}
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
        >
          {isChangingPassword ? "Save Changes" : ""}
        </button>
      </div>
    </div>
  );
};

export default PasswordChangeForm;
