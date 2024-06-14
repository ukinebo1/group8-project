import React, { useState } from "react";
import "./Form.css";

function ReservationForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false); // Track form submission state

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsSubmitting(true); // Set loading state
// https://g-ate-resturant.onrender.com
// https://jsonplaceholder.typicode.com/posts
    try {
      const response = await fetch(
        "https://g-ate-resturant.onrender.com",
        {
          method: "POST",
          body: JSON.stringify({ name, email, date, time, phoneNumber }),
          headers: { "Content-Type": "application/json" },
        }
      );

      if (!response.ok) {
        throw new Error(
          `Reservation submission failed with ${response.status}`
        );
      }

      const data = await response.json();

      // if (data.success) {
        console.log("Reservation successful:", data);
        // Show a success message to the user (e.g., modal or toast)
        alert("Successful");
      // } else {
        // console.warn("API response failed:", data);
        // Handle API-specific errors (e.g., display an error message to the user)
      // }
    } catch (error) {
      console.error("Error submitting reservation:", error);
      // Display a generic error message to the user
    } finally {
      setIsSubmitting(false); // Reset loading state after submission
    }
  };

  return (
    <div className="formContainer">
      <div className="formDetails">
        <h1>
          <span>Reserve </span> Now,
          <br />
          Eat later!
        </h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name" className="label">
            Name
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label htmlFor="date">Date</label>
          <input
            type="date" // Use a date picker if needed
            id="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />

          <label htmlFor="time">Time</label>
          <input
            type="time" // Use a time picker if needed
            id="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            required
          />

          <label htmlFor="phoneNumber">Phone Number</label>
          <input
            type="tel"
            id="phoneNumber"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
          />

          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Submitting..." : "Reserve Now"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default ReservationForm;
