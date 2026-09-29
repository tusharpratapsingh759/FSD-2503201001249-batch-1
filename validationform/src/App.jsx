import { useState } from "react";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    age: "",
    gender: "",
    terms: false,
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const validate = () => {
    let newErrors = {};

    // Name
    if (formData.name.trim() === "") {
      newErrors.name = "Name is required";
    } else if (formData.name.trim().length < 3) {
      newErrors.name = "Name must be at least 3 characters";
    } else if (formData.name.trim().length > 50) {
      newErrors.name = "Name cannot exceed 50 characters";
    } else if (!/^[A-Za-z ]+$/.test(formData.name)) {
      newErrors.name = "Name can contain only letters and spaces";
    }

    // Username
    if (formData.username.trim() === "") {
      newErrors.username = "Username is required";
    } else if (formData.username.length < 3) {
      newErrors.username = "Username must be at least 3 characters";
    } else if (formData.username.length > 20) {
      newErrors.username = "Username cannot exceed 20 characters";
    } else if (!/^[A-Za-z0-9_]+$/.test(formData.username)) {
      newErrors.username =
        "Username can contain only letters, numbers and underscore";
    }

    // Email
    if (formData.email.trim() === "") {
      newErrors.email = "Email is required";
    } else if (
      !/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(
        formData.email
      )
    ) {
      newErrors.email = "Enter a valid email address";
    }

    // Phone
    if (formData.phone.trim() === "") {
      newErrors.phone = "Phone number is required";
    } else if (!/^[0-9]{10}$/.test(formData.phone)) {
      newErrors.phone = "Phone number must contain exactly 10 digits";
    }

    // Password
    if (formData.password === "") {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters";
    } else if (formData.password.length > 20) {
      newErrors.password = "Password cannot exceed 20 characters";
    } else if (!/[A-Z]/.test(formData.password)) {
      newErrors.password =
        "Password must contain at least one uppercase letter";
    } else if (!/[a-z]/.test(formData.password)) {
      newErrors.password =
        "Password must contain at least one lowercase letter";
    } else if (!/[0-9]/.test(formData.password)) {
      newErrors.password = "Password must contain at least one number";
    } else if (!/[!@#$%^&*]/.test(formData.password)) {
      newErrors.password =
        "Password must contain at least one special character";
    }

    // Confirm Password
    if (formData.confirmPassword === "") {
      newErrors.confirmPassword = "Please confirm your password";
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    // Age
    if (formData.age === "") {
      newErrors.age = "Age is required";
    } else if (Number(formData.age) < 18 || Number(formData.age) > 100) {
      newErrors.age = "Age must be between 18 and 100";
    }

    // Gender
    if (formData.gender === "") {
      newErrors.gender = "Please select your gender";
    }

    // Terms
    if (!formData.terms) {
      newErrors.terms = "You must accept the terms and conditions";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      alert("Registration successful!");

      console.log("Form Data:", formData);
    }
  };

  return (
    <div className="container">
      <div className="form-box">
        <h1>Registration Form</h1>

        <form onSubmit={handleSubmit}>
          {/* Name */}
          <div className="input-group">
            <label>Full Name</label>

            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your full name"
            />

            {errors.name && <p className="error">{errors.name}</p>}
          </div>

          {/* Username */}
          <div className="input-group">
            <label>Username</label>

            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              placeholder="Enter username"
            />

            {errors.username && (
              <p className="error">{errors.username}</p>
            )}
          </div>

          {/* Email */}
          <div className="input-group">
            <label>Email</label>

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="example@gmail.com"
            />

            {errors.email && <p className="error">{errors.email}</p>}
          </div>

          {/* Phone */}
          <div className="input-group">
            <label>Phone Number</label>

            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="10 digit phone number"
              maxLength="10"
            />

            {errors.phone && <p className="error">{errors.phone}</p>}
          </div>

          {/* Password */}
          <div className="input-group">
            <label>Password</label>

            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter password"
            />

            <small>
              8–20 characters, uppercase, lowercase, number and special
              character.
            </small>

            {errors.password && (
              <p className="error">{errors.password}</p>
            )}
          </div>

          {/* Confirm Password */}
          <div className="input-group">
            <label>Confirm Password</label>

            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Re-enter password"
            />

            {errors.confirmPassword && (
              <p className="error">{errors.confirmPassword}</p>
            )}
          </div>

          {/* Age */}
          <div className="input-group">
            <label>Age</label>

            <input
              type="number"
              name="age"
              value={formData.age}
              onChange={handleChange}
              placeholder="Enter your age"
              min="18"
              max="100"
            />

            {errors.age && <p className="error">{errors.age}</p>}
          </div>

          {/* Gender */}
          <div className="input-group">
            <label>Gender</label>

            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>

            {errors.gender && <p className="error">{errors.gender}</p>}
          </div>

          {/* Terms */}
          <div className="terms">
            <input
              type="checkbox"
              name="terms"
              checked={formData.terms}
              onChange={handleChange}
            />

            <label>I agree to the Terms and Conditions</label>
          </div>

          {errors.terms && <p className="error">{errors.terms}</p>}

          <button type="submit">Register</button>
        </form>
      </div>
    </div>
  );
}

export default App;