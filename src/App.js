import React, { useState, useEffect } from "react";
import Player from "./components/Player";

function App() {
  const [songs] = useState([
    {
      title: "Night Changes",
      artist: "One Direction",
      img_src: "./images/night-changes.png",
      src: "./songs/night-changes.mp3",
    },
    {
      title: "Blue Jeans",
      artist: "GANGGA",
      img_src: "./images/blue-jeans.jpg",
      src: "./songs/blue-jeans.mp3",
    },
    {
      title: "Heather",
      artist: "Conan Gray",
      img_src: "./images/heather.jpg",
      src: "./songs/heather.mp3",
    },
  ]);

  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [nextSongIndex, setNextSongIndex] = useState(currentSongIndex + 1);

  useEffect(() => {
    setNextSongIndex(() => {
      if (currentSongIndex + 1 > songs.length - 1) {
        return 0;
      } else {
        return currentSongIndex + 1;
      }
    });
  }, [currentSongIndex]);

  return (
    <div className="App">
      <Player
        currentSongIndex={currentSongIndex}
        setCurrentSongIndex={setCurrentSongIndex}
        nextSongIndex={nextSongIndex}
        songs={songs}
      />
    </div>
  );
}

export default App;
