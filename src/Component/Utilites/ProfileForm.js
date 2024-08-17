import React, { useEffect, useState } from 'react';
import { getProfile, handleEditClick, UserId } from '../Logic and Connection/Logic';
import { useDispatch ,useSelector } from 'react-redux';
import { setProfileData } from '../Store/Profilecart';
const ProfileForm = ({  isEditing, onSave,setResponse }) => {
const profileData = useSelector((store)=>store.profile.profileData);
const dispatch = useDispatch();
console.log(profileData);
    const [user ,setUser]=useState({
        fullname:"",
        mobileno:"",
        alternatemobileno:"",
        address:"",
        pincode:"",
        state:"",
        occupation:""
    })
    const handleSaveClick = async () => {
        if (isEditing) {
            const data = await handleEditClick(user);
            console.log(data);
            if (data) {
                onSave(UserId)
                setResponse("Profile update Successfully")
            }
        }

    };
    
    useEffect(() => {
      if (!profileData || Object.keys(profileData).length === 0) {
        const fetchData = async () => {
          const data = await getProfile(UserId);
          dispatch(setProfileData(data));
          setUser(data);
          console.log("Data fetched and user state updated");
        };
  
        fetchData();
      } else {
        setUser(profileData);
      }
    }, [dispatch, profileData]);

    return (
        <form>
            <div className="space-y-6">
                <div>
                    <label htmlFor="fullname" className="block text-sm font-medium text-gray-700">Full Name :</label>
                    <input
                        id="fullname"
                        type="text"
                        value={user.fullname}
                        readOnly={!isEditing}
                        onChange={(e)=>setUser({...user, fullname:e.target.value})}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm sm:text-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
                    />
                </div>
                
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email :</label>
             <p>{profileData.email}</p>
            </div>
            <div>
              <label htmlFor="gender" className="block text-sm font-medium text-gray-700">Gender :</label>
              <p>{profileData.gender}</p>
            </div>
            <div>
              <label htmlFor="dob" className="block text-sm font-medium text-gray-700">Date of Birth :</label>
              <p>{profileData.dob}</p>
            </div>
            <div>
              <label htmlFor="mobileno" className="block text-sm font-medium text-gray-700">Mobile No :</label>
              <input
                id="mobileno"
                type="number"
                value={user.mobileno}
                onChange={(e)=>setUser({...user, mobileno:e.target.value})}
                readOnly={!isEditing}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm sm:text-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
              />
            </div>
            <div>
              <label htmlFor="alternatemobileno" className="block text-sm font-medium text-gray-700">Alternate Mobile No:</label>
              <input
                id="alternatemobileno"
                type="number"
                value={user.alternatemobileno}
                onChange={(e)=>setUser({...user, alternatemobileno:e.target.value})}
                readOnly={!isEditing}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm sm:text-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
              />
            </div>
            <div>
              <label htmlFor="address" className="block text-sm font-medium text-gray-700">Address :</label>
              <textarea
                id="address"
                rows="3"
                value={user.address}
                onChange={(e)=>setUser({...user, address:e.target.value})}
                readOnly={!isEditing}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm sm:text-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
              />
            </div>
            <div>
              <label htmlFor="pincode" className="block text-sm font-medium text-gray-700">pincode :</label>
              <input
                id="pincode"
                type="number"
                value={user.pincode}
                onChange={(e)=>setUser({...user, pincode:e.target.value})}
                readOnly={!isEditing}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm sm:text-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
              />
            </div>
            <div>
              <label htmlFor="state" className="block text-sm font-medium text-gray-700">state :</label>
              <input
                id="state"
                type="text"
                value={user.state}
                onChange={(e)=>setUser({...user, state:e.target.value})}
                readOnly={!isEditing}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm sm:text-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
              />
            </div>
            <div>
              <label htmlFor="occupation" className="block text-sm font-medium text-gray-700">occupation :</label>
              <input
                id="occupation"
                type="text"
                value={user.occupation}
                onChange={(e)=>setUser({...user, occupation:e.target.value})}
                readOnly={!isEditing}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm sm:text-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
              />
            </div>
            </div>
            {isEditing && (
                <div className="mt-6 flex justify-end space-x-4">
                    <button
                        type="button"
                        onClick={handleSaveClick}
                        className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                    >
                        Save Changes
                    </button>
                </div>
            )}
        </form>
    );
};

export default ProfileForm;
