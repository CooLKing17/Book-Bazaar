import { useState } from 'react';
import { useSelector } from 'react-redux';

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [isChangingPassword, setIsChangingPassword] = useState(false);
  const [isDeletingAccount, setIsDeletingAccount] = useState(false);

  const profileCart =useSelector(store=>store.profile.profileData)
  console.log(profileCart)
  const [profile, setProfile] = useState({
    fullname: "",
    mobileno: "",
    alternatemobileno: "",
    address: "",
    pincode: "",
    state: "",
    occupation: "",
    // profileimage: "",
    
  });

  const [passwordData, setPasswordData] = useState({
    oldPassword: '',
    newPassword: '',
    confirmNewPassword: '',
  });

  const [deleteAccountData, setDeleteAccountData] = useState({
    otp: '',
    password: '',
  });

  const handleEditClick = () => {
    setIsEditing(!isEditing);
    if (isEditing) {
      setIsChangingPassword(false);
      setProfile()
    }
  };

  const handlePasswordChange = () => {
    if (passwordData.newPassword !== passwordData.confirmNewPassword) {
      alert("New passwords do not match!");
      return;
    }

    // Example of password validation (replace with actual logic)
    if (passwordData.oldPassword === "correctOldPassword") {
      alert("Password changed successfully!");
      setIsChangingPassword(false); // Hide password change form
    } else {
      alert("Old password is incorrect.");
    }
  };

  const handleDeleteAccount = () => {
    alert("Account deleted successfully! (Simulation)");
    setIsDeletingAccount(false);
  };

  return (
    <div className="mt-20 min-h-screen bg-gray-50 p-6">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        <div className="flex items-center justify-between border-b pb-4 mb-6">
          <div className="flex-shrink-0">
            <img
              src={profile.profileImage || "https://default-image-url.png"}
              alt="Profile"
              className="w-24 h-24 rounded-full object-cover border-4 border-indigo-600"
            />
          </div>
          <button
            onClick={handleEditClick}
            className={`text-sm font-semibold ${isEditing ? 'text-red-600 hover:text-red-500' : 'text-indigo-600 hover:text-indigo-500'}`}
          >
            {isEditing ? "Cancel" : "Edit"}
          </button>
        </div>
        <form>
          <div className="space-y-6">
            <div>
              <label htmlFor="fullname" className="block text-sm font-medium text-gray-700">Full Name</label>
              <input
                id="fullname"
                type="text"
                value={profileCart.fullname}
                readOnly={!isEditing}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm sm:text-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
             <p>{profileCart.email}</p>
            </div>
            <div>
              <label htmlFor="gender" className="block text-sm font-medium text-gray-700">Gender</label>
              <p>{profileCart.gender}</p>
            </div>
            <div>
              <label htmlFor="dob" className="block text-sm font-medium text-gray-700">Date of Birth</label>
              <p>{profileCart.dob}</p>
            </div>
            <div>
              <label htmlFor="mobileno" className="block text-sm font-medium text-gray-700">Mobile No</label>
              <input
                id="mobileno"
                type="number"
                value={profileCart.mobileno}
                readOnly={!isEditing}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm sm:text-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
              />
            </div>
            <div>
              <label htmlFor="alternatemobileno" className="block text-sm font-medium text-gray-700">Alternate Mobile No</label>
              <input
                id="alternatemobileno"
                type="number"
                value={profileCart.alternatemobileno}
                readOnly={!isEditing}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm sm:text-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
              />
            </div>
            <div>
              <label htmlFor="address" className="block text-sm font-medium text-gray-700">Address</label>
              <textarea
                id="address"
                rows="3"
                value={profileCart.address}
                readOnly={!isEditing}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm sm:text-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
              />
            </div>
            <div>
              <label htmlFor="pincode" className="block text-sm font-medium text-gray-700">pincode</label>
              <input
                id="pincode"
                type="number"
                value={profileCart.pincode}
                readOnly={!isEditing}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm sm:text-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
              />
            </div>
            <div>
              <label htmlFor="state" className="block text-sm font-medium text-gray-700">state</label>
              <input
                id="state"
                type="text"
                value={profileCart.state}
                readOnly={!isEditing}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm sm:text-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
              />
            </div>
            <div>
              <label htmlFor="occupation" className="block text-sm font-medium text-gray-700">occupation</label>
              <input
                id="occupation"
                type="text"
                value={profileCart.occupation}
                readOnly={!isEditing}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm sm:text-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
              />
            </div>
            {isEditing && (
              <>
                <div>
                  <button
                    type="button"
                    onClick={() => setIsChangingPassword(!isChangingPassword)}
                    className="text-sm font-semibold text-indigo-600 hover:text-indigo-500"
                  >
                    {isChangingPassword ? "Cancel Password Change" : "Change Password"}
                  </button>
                </div>
                {isChangingPassword && (
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="oldPassword" className="block text-sm font-medium text-gray-700">Old Password</label>
                      <input
                        id="oldPassword"
                        type="password"
                        value={passwordData.oldPassword}
                        onChange={(e) => setPasswordData({ ...passwordData, oldPassword: e.target.value })}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm sm:text-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
                      />
                    </div>
                    <div>
                      <label htmlFor="newPassword" className="block text-sm font-medium text-gray-700">New Password</label>
                      <input
                        id="newPassword"
                        type="password"
                        value={passwordData.newPassword}
                        onChange={(e) => setPasswordData({ ...passwordData, newPassword: e.target.value })}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm sm:text-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
                      />
                    </div>
                    <div>
                      <label htmlFor="confirmNewPassword" className="block text-sm font-medium text-gray-700">Confirm New Password</label>
                      <input
                        id="confirmNewPassword"
                        type="password"
                        value={passwordData.confirmNewPassword}
                        onChange={(e) => setPasswordData({ ...passwordData, confirmNewPassword: e.target.value })}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm sm:text-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
                      />
                    </div>
                  </div>
                )}
              </>
            )}
          </div>

          {isEditing && (
            <div className="mt-6 flex justify-end space-x-4">
              <button
                type="button"
                onClick={handleEditClick}
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
              >
                {isChangingPassword ? "Cancel" : "Save Changes"}
              </button>
              {isChangingPassword && (
                <button
                  type="button"
                  onClick={handlePasswordChange}
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Change Password
                </button>
              )}
            </div>
          )}
          <div>
            <button
              type="button"
              onClick={() => setIsDeletingAccount(!isDeletingAccount)}
              className="text-sm font-semibold text-red-600 hover:text-red-500"
            >
              {isDeletingAccount ? "Cancel Delete Account" : "Delete Account"}
            </button>
          </div>
          {isDeletingAccount && (
            <div className="space-y-4">
              <div>
                <label htmlFor="otp" className="block text-sm font-medium text-gray-700">OTP</label>
                <input
                  id="otp"
                  type="text"
                  value={deleteAccountData.otp}
                  onChange={(e) => setDeleteAccountData({ ...deleteAccountData, otp: e.target.value })}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm sm:text-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
                />
              </div>
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                <input
                  id="password"
                  type="password"
                  value={deleteAccountData.password}
                  onChange={(e) => setDeleteAccountData({ ...deleteAccountData, password: e.target.value })}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm sm:text-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
                />
              </div>
              <div className="flex justify-end space-x-4">
                <button
                  type="button"
                  onClick={handleDeleteAccount}
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                >
                  Confirm Delete Account
                </button>
              </div>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default Profile;
