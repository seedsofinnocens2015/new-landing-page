"use client";

import { FormEvent, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import styles from "./appointment.module.css";

const centers = [
  "Malviya Nagar, Delhi",
  "Ghaziabad, Uttar Pradesh",
  "Lucknow, Uttar Pradesh",
  "Agra, Uttar Pradesh",
  "Gorakhpur, Uttar Pradesh",
  "Patna, Bihar",
  "Faridabad, Haryana",
  "Gurugram, Haryana",
  "Ranchi, Jharkhand",
  "Haldwani, Uttarakhand",
  "Guwahati, Assam",
  "Kasaragod, Kerala",
  "Kanpur, Uttar Pradesh",
  "Kochi, Kerala",
  "Pitampura, New Delhi",
  "Meerut, Uttar Pradesh",
  "Muzaffarpur, Bihar",
  "Srinagar, J&K",
  "Janakpuri, New Delhi",
  "Kolkata",
];

export default function AppointmentForm() {
  const router = useRouter();
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [center, setCenter] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [utmParams, setUtmParams] = useState({
    utm_source: "",
    utm_medium: "",
    utm_campaign: "",
  });

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const source = params.get("utm_source") || "";
    let medium = params.get("utm_medium") || "";

    if (!medium) {
      if (source.toLowerCase().includes("youtube")) medium = "youtube";
      else if (source.toLowerCase().includes("google")) medium = "cpc";
    }

    setUtmParams({
      utm_source: source,
      utm_medium: medium,
      utm_campaign: params.get("utm_campaign") || "",
    });
  }, []);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!/^[6-9]\d{9}$/.test(phoneNumber)) {
      setErrorMessage("Please enter a valid 10-digit phone number");
      return;
    }

    setIsLoading(true);
    setErrorMessage("");

    try {
      const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL || "";
      const response = await fetch(`${backendUrl}/api/landing-pages`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName,
          phoneNumber,
          center,
          source: "Dr Gauri Agrawal | Landing Page",
          message,
          utm_source: utmParams.utm_source,
          utm_medium: utmParams.utm_medium,
          utm_campaign: utmParams.utm_campaign,
        }),
      });
      const data = await response.json();
      const duplicate =
        data.ExceptionType === "MXDuplicateEntryException" ||
        data.ExceptionMessage?.toLowerCase().includes("phone number already exists") ||
        data.message?.toLowerCase().includes("phone number already exists");

      if (duplicate) {
        setErrorMessage("Already booked for this number");
        return;
      }

      if (!response.ok || !data.ok) {
        throw new Error(data.message || "Unable to book your appointment");
      }

      router.push("/thankyou?location=ghaziabad&doctor=gauri-agarwal");
    } catch (error) {
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again.",
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form className={styles.appointmentForm} onSubmit={handleSubmit}>
      <input
        type="text"
        name="fullName"
        value={fullName}
        onChange={(event) => {
          setFullName(event.target.value);
          setErrorMessage("");
        }}
        placeholder="Full Name *"
        autoComplete="name"
        required
        disabled={isLoading}
      />
      <input
        type="tel"
        name="phoneNumber"
        value={phoneNumber}
        onChange={(event) => {
          setPhoneNumber(event.target.value.replace(/\D/g, "").slice(0, 10));
          setErrorMessage("");
        }}
        placeholder="Phone Number *"
        autoComplete="tel"
        inputMode="numeric"
        pattern="[6-9][0-9]{9}"
        minLength={10}
        maxLength={10}
        required
        disabled={isLoading}
      />
      <select
        name="center"
        value={center}
        onChange={(event) => {
          setCenter(event.target.value);
          setErrorMessage("");
        }}
        required
        disabled={isLoading}
        aria-label="Select center"
      >
        <option value="" disabled>
          Select Centre *
        </option>
        {centers.map((centerName) => (
          <option value={centerName} key={centerName}>
            {centerName}
          </option>
        ))}
      </select>
      <textarea
        name="message"
        value={message}
        onChange={(event) => {
          setMessage(event.target.value);
          setErrorMessage("");
        }}
        placeholder="Message (Optional)"
        rows={1}
        maxLength={1000}
        disabled={isLoading}
      />
      <label className={styles.consent}>
        <input type="checkbox" name="consent" required disabled={isLoading} />
        <span>
          By clicking &quot;Book Appointment&quot;, you agree to our{" "}
          <Link href="/privacy-policy">Privacy Policy</Link> and{" "}
          <Link href="/terms-and-conditions">T&amp;C</Link> *
        </span>
      </label>
      {errorMessage && (
        <p role="alert" className={styles.formError}>
          {errorMessage}
        </p>
      )}
      <button type="submit" disabled={isLoading}>
        {isLoading ? "Booking..." : "Book Your Appointment"}
      </button>
    </form>
  );
}
