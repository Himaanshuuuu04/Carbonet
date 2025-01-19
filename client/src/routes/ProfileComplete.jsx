import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { completeProfile } from '../redux/slice/authSlice';

const ProfileComplete = () => {
  const dispatch = useDispatch();
  const { userId, loading, error } = useSelector((state) => state.auth);

  const [userName, setUserName] = useState('');
  const [age, setAge] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!userName || !age || !phoneNumber) {
      alert('Please fill in all fields');
      return;
    }

    const profileData = {
      userName,
      age,
      phoneNumber,
    };

    await dispatch(completeProfile(profileData));  // Dispatch the profile completion action
  };

  return (
    <div className="h-screen flex flex-col justify-center items-center bg-gradient-to-r from-green-950 via-black to-green-950">
      <div className="w-full max-w-md bg-white/10 backdrop-blur-lg rounded-xl shadow-lg p-8">
        <h2 className="text-center text-3xl font-extrabold text-white">Complete Your Profile</h2>

        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          <div>
            <label htmlFor="userName" className="block text-sm font-medium text-gray-200">
              User Name
            </label>
            <input
              id="userName"
              name="userName"
              type="text"
              required
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              className="mt-1 w-full px-4 py-2 border border-white/20 rounded-lg shadow-sm bg-black placeholder-white/20 text-gray-200"
              placeholder="Enter your username"
            />
          </div>

          <div>
            <label htmlFor="age" className="block text-sm font-medium text-gray-200">
              Age
            </label>
            <input
              id="age"
              name="age"
              type="number"
              required
              value={age}
              onChange={(e) => setAge(e.target.value)}
              className="mt-1 w-full px-4 py-2 border border-white/20 rounded-lg shadow-sm bg-black placeholder-white/20 text-gray-200"
              placeholder="Enter your age"
            />
          </div>

          <div>
            <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-200">
              Phone Number
            </label>
            <input
              id="phoneNumber"
              name="phoneNumber"
              type="text"
              required
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="mt-1 w-full px-4 py-2 border border-white/20 rounded-lg shadow-sm bg-black placeholder-white/20 text-gray-200"
              placeholder="Enter your phone number"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 px-4 text-white bg-green-600 hover:bg-green-500 rounded-lg"
            disabled={loading}
          >
            {loading ? 'Saving...' : 'Complete Profile'}
          </button>
        </form>

        {error && (
          <p className="mt-4 text-center text-sm text-red-500">{error}</p>
        )}
      </div>
    </div>
  );
};

export default ProfileComplete;
