import React from "react";
import { Link } from "react-router-dom";
import { ReactMultiEmail } from "react-multi-email";
import { useState } from "react";
export default function Home() {
  const [emails, setEmails] = useState([]);
  return (
    <>
      <div>
        <Link
          to={`/about`}
          style={{
            color: "Blue",
            textDecoration: "none",
            textAlign: "left",
            alignItems: "left",
          }}
        >
          About
        </Link>
      </div>

      <div style={{ textAlign: "center", alignItems: "center" }}>
        Home
        <div>
          <ReactMultiEmail
            placeholder="Enter your Email Address"
            emails={emails}
            onChange={(_emails) => {
              setEmails([..._emails]);
            }}
            getLabel={(email, index, removeEmail) => {
              return (
                <div data-tag key={index}>
                  {email}

                  <span data-tag-handle onClick={() => removeEmail(index)}>
                    <svg
                      height="14"
                      width="14"
                      viewBox="0 0 20 20"
                      aria-hidden="true"
                      focusable="false"
                      className="css-tj5bde-Svg"
                    >
                      <path d="M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z"></path>
                    </svg>
                  </span>
                </div>
              );
            }}
          />
        </div>
      </div>
    </>
  );
}
