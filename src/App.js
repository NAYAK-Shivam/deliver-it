import React, { useEffect, useState } from "react";
import "./App.css";
function App() {
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    function handleFullscreenChange() {
      setIsFullscreen(Boolean(document.fullscreenElement));
    }
    document.addEventListener("fullscreenchange", handleFullscreenChange);
    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
    };
  }, []);

  const toggleFullscreen = () => {
    const iframe = document.getElementById("my-iframe");
    if (iframe) {
      if (isFullscreen) {
        document.exitFullscreen();
      } else {
        iframe.requestFullscreen();
      }
    }
  };

  const iframeStyles = {
    display: "block",
    margin: "0 auto",
    width: "88%",
    height: "120vh",
    border: "none",
  };

  return (
    <div className="App">
      <header>
        <h1>
          <span id="gametitle">Deliver It!</span>
          <sub>
            by <span id="dev">Shivam Nayak</span>
          </sub>
        </h1>
      </header>
      <div id="desc">
        <p>
          "Deliver It!" is a 2D casual game created to get hands-on experience
          with Unity's game development environment. In this game, the player
          controls a delivery driver navigating through a busy city to deliver
          food items while avoiding traffic and obstacles. The goal is to
          complete the deliveries safely without crashing. This game is a
          project aimed at familiarizing with Unity and exploring various game
          development concepts.
        </p>
        <div id="skills">
          <h2>Skills and Technologies Used:</h2>
          <ul>
            <li>
              <strong>Unity 2D:</strong> Developed using Unity 2D to create a
              dynamic environment, implement game physics, and manage player
              interactions.
            </li>
            <li>
              <strong>C#:</strong> Used for scripting the game mechanics,
              including player movement, collision detection, and sound
              management.
            </li>
            <li>
              <strong>Game Object Management:</strong> Managed multiple game
              objects, such as vehicles, obstacles etc, to create a challenging
              gameplay experience.
            </li>
            <li>
              <strong>Sound Integration:</strong> Added sound effects, like
              collision and lane-change sounds, to enhance the immersive
              experience.
            </li>
            <li>
              <strong>WebGL Build:</strong> Exported the game to WebGL format
              for web-based deployment.
            </li>
            <li>
              <strong>React Integration:</strong> Integrated the Unity WebGL
              build with a React-based frontend for smooth display on the web.
            </li>
          </ul>
        </div>
      </div>
      <div id="game">
        <button className="fullscreen-button" onClick={toggleFullscreen}>
          {isFullscreen ? "Exit Fullscreen" : "Play in Fullscreen"}
        </button>
        <iframe
          id="my-iframe"
          src="https://i.simmer.io/@shivam_nayak/deliver-it"
          className="my-iframe"
          title="Deliver It!"
          style={iframeStyles}
        ></iframe>
      </div>
      <footer>
        <p>
          &copy; 2024 <strong>Shivam Nayak</strong>. All rights reserved. |
          <a
            href="https://www.linkedin.com/in/shivam-nayak-8161961b7"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            LinkedIn
          </a>{" "}
          |
          <a
            href="https://github.com/NAYAK-Shivam"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            GitHub
          </a>
        </p>
      </footer>
    </div>
  );
}

export default App;
