import React from "react";

function Footer() {
  return (
    <div class="row align-items-center">
      <div class="col">
        Contact Griffin:
        <ul style={{ listStyle: "none" }}>
          <li>
            <a
              style={{ textDecoration: "none", color: "inherit" }}
              href="mailto: gbwilkens96@protonmail.com"
            >
              gbwilkens96@protonmail.com 📧
            </a>
          </li>
          <li>
            <a
              style={{ textDecoration: "none", color: "inherit" }}
              href="tel:4044038524"
            >
              404-403-8524 📱
            </a>
          </li>
        </ul>
      </div>
      <div class="col">
        Quick Links:
        <ul style={{ listStyle: "none" }}>
          <li>
            <a
              style={{ textDecoration: "none", color: "inherit" }}
              href="https://www.linkedin.com/in/griffin-wilkens-375b96217"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              Linkedin 🔗
            </a>
          </li>
          <li>
            <a
              style={{ textDecoration: "none", color: "inherit" }}
              href="https://github.com/gwilkens96"
              target="_blank"
              rel="noreferrer"
            >
              Github 🖥
            </a>
          </li>
          <li>Portfolio</li>
        </ul>
      </div>
      <div class="col">
        Griffin is a Georgia Tech alumnus with certification in full stack web
        development. Thanks for choosing Griffin for your web dev needs. Let's
        get this fire started!
      </div>
    </div>
  );
}
export default Footer;
