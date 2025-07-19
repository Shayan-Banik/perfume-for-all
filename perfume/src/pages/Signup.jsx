
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const existingUser = localStorage.getItem('user');

    if (existingUser) {
      const user = JSON.parse(existingUser);
      if (user.email === formData.email) {
        toast.error('User already exists');
        return;
      }
    }

    // Save user to localStorage
    localStorage.setItem('user', JSON.stringify(formData));
    toast.success('Signup successful! Please login.');
    navigate('/login');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black px-4 font-sarif">
      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-2xl shadow-2xl p-10 w-full max-w-md space-y-6 transition-all duration-300"
      >
        <h2 className="text-3xl font-extrabold text-center text-gray-800">
          Create Account
        </h2>

        <div>
          <label htmlFor="email" className="block mb-1 text-sm font-medium text-gray-700">
            Email Address
          </label>
          <input
            type="email"
            name="email"
            placeholder="you@example.com"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400"
          />
        </div>

        <div>
          <label htmlFor="password" className="block mb-1 text-sm font-medium text-gray-700">
            Password
          </label>
          <input
            type="password"
            name="password"
            placeholder="••••••••"
            value={formData.password}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 rounded-lg shadow-lg transition duration-300"
        >
          Sign Up
        </button>

        <p className="text-center text-sm text-gray-600">
          Already have an account?{" "}
          <a href="/login" className="text-yellow-600 hover:underline font-medium">
            Login
          </a>
        </p>
      </form>
    </div>
  );
};
export default Signup;
