"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Section from "../../../components/section/Section";
import Input from "../../../components/input/Input";
import Button from "../../../components/button/Button";
import useValidateEmail from "../../../hooks/useValidateEmail";
import classNames from "classnames";
import { inter } from "../../../styles/fonts";
import styles from "./form.module.scss";

const Form = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [userEmail, setUserEmail] = useState("");
  const { error, handleError } = useValidateEmail();

  const selectedPlanId = searchParams.get("id");

  const handleInputChange = (event) => {
    handleError(event);
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
    <Section title="Enter your email to get your personalised Spiritual Growth Plan">
      <form
        onSubmit={handleSubmit}
        className={classNames(styles.form, inter.className)}
      >
        <div className={styles.email}>
          <Input
            type="email"
            name="email"
            value={userEmail}
            onChange={handleInputChange}
            id="name"
            error={error}
            required
          />
        </div>

        <div className={styles.button}>
          <Button title="Continue" type="submit" disabled={error.isError} />
        </div>
      </form>
    </Section>
  );
};

export default Form;
