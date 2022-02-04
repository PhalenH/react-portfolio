import React from "react";
import resume from "../../assets/Resume.pdf"

const styles = {
    resumeContainer: {
     display: "flex",
     justifyContent:"center",
     marginTop: 100
    }
  };

export default function Resume() {
  return (
      <div style={styles.resumeContainer}>
    <object
      data={resume}
      type="application/pdf"
      width="400"
      height="1000"
    >
      <a href="https://phalenh.github.io/phalen-portfolio/assets/Resume.pdf">test.pdf</a>
    </object>
    </div>
  );
}
