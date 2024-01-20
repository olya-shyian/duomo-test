"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import Section from "../../../components/section/Section";
import Button from "../../../components/button/Button";
import styles from "./form.module.scss";

const Form = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [userEmail, setUserEmail] = useState("");

  const selectedPlanId = searchParams.get("id");

  const handleRadioButtonChange = (event) => {
    setUserEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const postData = async () => {
      const data = {
        selectedPlanId,
        userEmail,
      };

      const response = await fetch("/api/submit", {
        method: "POST",
        body: JSON.stringify(data),
      });
      return response.json();
    };

    postData().then((response) => {
      console.log(response.data);
    });

    router.push(`/subscription/growth-progress`);
  };

  return (
    <Section title="Enter your email to getyour personalised Spiritual Growth Plan">
      <form onSubmit={handleSubmit}>
        <div>
          <input
            className="input"
            type="email"
            name="email"
            value={userEmail}
            onChange={handleRadioButtonChange}
            id="name"
            required
          />

          <label htmlFor="name">emai</label>

          <Button title="Continue" type="submit" />
        </div>
      </form>
    </Section>
  );
};

export default Form;
