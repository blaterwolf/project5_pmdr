import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <h4>by Albert Lupo</h4>
      <section className="icon-list">
        <i className="fab fa-html5" />
        <i className="fab fa-css3" />
        <i className="fab fa-js-square" />
        <i className="fab fa-sass" />
        <i className="fab fa-react" />
        <i className="fab fa-font-awesome" />
        <i className="fab fa-free-code-camp" />
      </section>
      <section className="link-hooks">
        <h4>
          <em>
            Dan Abramov's useInterval custom hook article{" "}
            <a
              href="https://overreacted.io/making-setinterval-declarative-with-react-hooks/"
              target="_blank"
              rel="noopener noreferrer"
            >
              here
            </a>
            .
          </em>
        </h4>
      </section>
    </div>
  );
};

export default Footer;
