import type { NextPage } from "next";

const Contact: NextPage = () => {
  return (
    <section>
      <p>
        You can contact me via{" "}
        <a
          style={{ textDecoration: "underline" }}
          href="mailto: sara@saratankard.com"
        >
          email
        </a>
        .
      </p>
    </section>
  );
};

export default Contact;
