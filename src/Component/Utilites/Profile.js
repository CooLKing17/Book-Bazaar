import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import { setProfileData } from '../Store/Profilecart';
import ProfileForm from "./ProfileForm";
import PasswordChangeForm from "./PasswordChangeForm";
import DeleteAccountForm from "./DeleteAccountForm";
import { server, UserId } from "../Logic and Connection/Logic";

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [isChangingPassword, setIsChangingPassword] = useState(false);
  const [isDeletingAccount, setIsDeletingAccount] = useState(false);
  const dispatch = useDispatch();
  const profile = useSelector((store) => store.profile.profileData);
  console.log(profile);
  const [previewImage, setPreviewImage] = useState(null);
  const [response, setResponse] = useState(null);

  const handleEditClick = () => {
    setIsEditing(!isEditing);
  };

  const handleImageUpload = async () => {
    if (previewImage) {
      const formData = new FormData();
      formData.append("file", previewImage);

      try {
        const response = await axios.post(
          `${server}/user/api/uploadImage/${UserId}`,
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        dispatch(setProfileData(response.data));
        toast.success("Profile updated successfully!");
        window.location.href="/profile=page"
      } catch (error) {
        console.error("Image upload failed:", error);
        toast.error("Image upload failed.");
      }
    }
  };

  console.log(response)

  const handleResponseToast = (message) => {
    console.log(message)
    if (message) {
      console.log("in")
      toast(message);
      setResponse(null);
    }
  };

  useEffect(() => {
    if (response) {
      handleResponseToast(response);
    }
  }, [response]);
  return (
    <div className="mt-20 min-h-screen bg-gray-50 p-6">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        <div className="flex items-center justify-between border-b pb-4 mb-6">
          <div className="flex-shrink-0">
            <img
              src={
                 profile?.profileimage
                  ? `data:image/jpeg;base64,${profile.profileimage}`
                  : "https://cdn-icons-png.flaticon.com/128/64/64572.png"
              }
              alt="Profile"
              className="w-24 h-24 rounded-full object-cover border-4 border-indigo-600"
            />

            {isEditing && (
              <div className="mt-4">
                <input
                  type="file"
                  onChange={(e) => setPreviewImage(e.target.files[0])}
                />
              </div>
            )}
          </div>
          <button
            onClick={() => {
              setIsChangingPassword(!isChangingPassword);
              handleEditClick();
            }}
            className={`text-sm font-semibold ${
              isEditing
                ? "text-red-600 hover:text-red-500"
                : "text-indigo-600 hover:text-indigo-500"
            }`}
          >
            {isEditing ? "Cancel" : "Edit"}
          </button>
        </div>

      <ProfileForm isEditing={isEditing} setResponse={setResponse} onSave={handleImageUpload} />

        {isEditing && (
          <div className="mt-6 flex justify-end space-x-4">
          <ToastContainer />
            <button
              type="button"
              onClick={() => setIsChangingPassword(!isChangingPassword)}
              className="text-sm font-semibold text-indigo-600 hover:text-indigo-500"
            >
              {isChangingPassword
                ? "Cancel Password Change"
                : "Change Password"}
            </button>
          </div>
        )}

        {isChangingPassword && <PasswordChangeForm  isChangingPassword={isChangingPassword} setResponse={setResponse} setIsChangingPassword={setIsChangingPassword}/>}
        

        <div className="mt-6">
        <ToastContainer />
          <button
            type="button"
            onClick={() => setIsDeletingAccount(!isDeletingAccount)}
            className="text-sm font-semibold text-red-600 hover:text-red-500"
          >
            {isDeletingAccount ? "Cancel Delete Account" : "Delete Account"}
          </button>
        </div>

        {isDeletingAccount && <DeleteAccountForm  setResponse={setResponse}/>}
      </div>
    </div>
  );
};

export default Profile;
