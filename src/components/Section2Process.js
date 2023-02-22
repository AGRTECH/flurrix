import React from "react";

const Section2Process = () => {
  window.addEventListener("scroll", function () {
    var scrollTop = window.scrollY;
    if (scrollTop > 500) {
      var windowHeight = window.innerHeight;
      var documentHeight = document.documentElement.scrollHeight;
      var progress = (scrollTop - 500) / (documentHeight - windowHeight - 500);
      // Add the following line to limit the progress to 70%:
      progress = progress > 0.7 ? 0.7 : progress;
      var height = progress * 100;
      document.querySelector(".line").style.height = height + "%";
    } else {
      document.querySelector(".line").style.height = "0";
    }
  });
  return (
    <>
      <div className="section2process-container">
        <div class="line"></div>
      </div>
    </>
  );
};

export default Section2Process;
