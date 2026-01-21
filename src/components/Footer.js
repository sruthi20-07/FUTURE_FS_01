import React from "react";

function Footer() {
  return (
    <footer style={styles.footer}>
      <p style={styles.name}>Vindula Sruthi</p>

      <a
        href="mailto:vindulasruthi20@gmail.com"
        style={styles.email}
      >
        vindulasruthi20@gmail.com
      </a>

      <p style={styles.copy}>
        © {new Date().getFullYear()} All rights reserved
      </p>
    </footer>
  );
}

const styles = {
  footer: {
    marginTop: "80px",
    padding: "40px 20px",
    textAlign: "center",
    borderTop: "1px solid #eaeaea",
    backgroundColor: "#fafafa",
  },
  name: {
    fontSize: "16px",
    fontWeight: "600",
    marginBottom: "8px",
  },
  email: {
    fontSize: "14px",
    color: "#555",
    textDecoration: "none",
    display: "block",
    marginBottom: "12px",
  },
  copy: {
    fontSize: "12px",
    color: "#999",
  },
};

export default Footer;
