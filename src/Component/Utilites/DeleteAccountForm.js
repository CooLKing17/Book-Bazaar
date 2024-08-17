import React, { useState } from 'react';
import { DeleteAccount } from '../Logic and Connection/Logic';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { deleteAccount } from '../Store/Profilecart';
const DeleteAccountForm = ({setResponse}) => {
    const [deleteAccountData, setDeleteAccountData] = useState({
        email: '',
        password: '',
    });

    const navigate = useNavigate();
    const handleDeleteAccount = async () => {
        if(deleteAccountData.email && deleteAccountData.password) {
            const data = await DeleteAccount(deleteAccountData);
            if (data && data.massage) {
                setResponse(data.massage);
                console.log(data.massage);
                localStorage.clear()
                navigate('/');
            } else {
                setResponse("Something went wrong. Please try again.");
            }
        } else {
            setResponse("Please fill all the fields");
        }
    };
    

    return (
        <div className="space-y-4">
            <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input
                    id="email"
                    type="email"
                    value={deleteAccountData.email}
                    onChange={(e) => setDeleteAccountData({ ...deleteAccountData, email: e.target.value })}
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
            <button
                type="button"
                onClick={handleDeleteAccount}
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
            >
                Delete Account
            </button>
        </div>
    );
};

export default DeleteAccountForm;
