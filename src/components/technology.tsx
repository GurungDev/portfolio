import React from "react";
import { AnimatedText } from "./animatedText";

const TechnologyUsesComponent = () => {
  return (
    <div className="bg-highlight">
      <AnimatedText text="Technology Uses" />

      <div>
        <svg
          width="1000"
          height="1000"
          viewBox="0 0 1000 1000"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="500"
            cy="500"
            r="50"
            stroke="black"
            stroke-width="2"
            fill="none"
          />
          <circle
            cx="500"
            cy="500"
            r="150"
            stroke="black"
            stroke-width="2"
            fill="none"
          />
          <circle
            cx="500"
            cy="500"
            r="250"
            stroke="black"
            stroke-width="2"
            fill="none"
          />
          <circle
            cx="500"
            cy="500"
            r="350"
            stroke="black"
            stroke-width="2"
            fill="none"
          />
          <circle
            cx="500"
            cy="500"
            r="450"
            stroke="black"
            stroke-width="2"
            fill="none"
          />

          <text x="500" y="500" className="logo" fill="black">
            Tech Stack
          </text>

          <text x="500" y="420" className="logo" fill="#0000FF">
            Next.js
          </text>
          <text x="580" y="460" className="logo" fill="#FF5733">
            Vite
          </text>
          <text x="620" y="540" className="logo" fill="#61DAFB">
            React.js
          </text>
          <text x="580" y="620" className="logo" fill="#8CC84B">
            Node.js
          </text>
          <text x="500" y="660" className="logo" fill="#092E20">
            Django REST
          </text>
          <text x="420" y="620" className="logo" fill="#4285F4">
            GCP
          </text>
          <text x="380" y="540" className="logo" fill="#623CE4">
            Terraform
          </text>
          <text x="420" y="460" className="logo" fill="#24292E">
            GitHub Actions
          </text>
          <text x="340" y="500" className="logo" fill="#F34F29">
            Git
          </text>
          <text x="620" y="500" className="logo" fill="#181717">
            GitHub
          </text>
          <text x="700" y="580" className="logo" fill="#000000">
            Express.js
          </text>
          <text x="660" y="680" className="logo" fill="#E0234E">
            Nest.js
          </text>
          <text x="500" y="780" className="logo" fill="#47A248">
            MongoDB
          </text>
          <text x="340" y="680" className="logo" fill="#4479A1">
            SQL
          </text>
          <text x="300" y="580" className="logo" fill="#00758F">
            MySQL
          </text>
          <text x="280" y="460" className="logo" fill="#336791">
            PostgreSQL
          </text>
          <text x="300" y="340" className="logo" fill="#2496ED">
            Docker
          </text>
        </svg>
      </div>
    </div>
  );
};

export default TechnologyUsesComponent;
