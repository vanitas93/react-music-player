import { v4 as uuidv4 } from "uuid";

function chillHop() {
  return [
    {
      name: "A Reminder",
      artist: "Sleepy Fish, coa",
      cover:
        "https://chillhop.com/wp-content/uploads/2023/01/4a42f136486d42e4d021c673540885c82a1934e6-1024x1024.jpg",
      id: uuidv4(),
      active: true,
      color: ["#eeecb7", "#e56e14"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=36925",
    },
    {
      name: "The Loveliest Dream",
      artist: "Sofasound",
      cover:
        "https://chillhop.com/wp-content/uploads/2022/10/8b7ba4cdad98f47e0411cfe94c50cce4a68cb848-1024x1024.jpg",
      id: uuidv4(),
      active: false,
      color: ["#3b3b61", "#dbbbcb"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=45155",
    },
    {
      name: "Moving on",
      artist: "Nymano, Suuna",
      cover:
        "https://chillhop.com/wp-content/uploads/2022/10/0b99c64a1316ecfb990c546ba4a73f6de27cfde5-1024x1024.jpg",
      id: uuidv4(),
      active: false,
      color: ["#0d2a42", "#5797dd"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=45154",
    },
    {
      name: "Passing Storm",
      artist: "Thomas Prime, Moderator",
      cover:
        "https://chillhop.com/wp-content/uploads/2023/01/dddab0f5dcf8d0cc3e6276b6d8bff791795a2499-1024x1024.jpg",
      id: uuidv4(),
      active: false,
      color: ["#1b221e", "#c49b57"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=42056",
    },
    {
      name: "Awaken",
      artist: "Knowmadic",
      cover:
        "https://chillhop.com/wp-content/uploads/2022/06/312458b974ab45c795d75ec3f0259caa3989103a-1024x1024.jpg",
      id: uuidv4(),
      active: false,
      color: ["#d19394", "#f9d08a"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=41653",
    },
    {
      name: "Bronea",
      artist: "Plusma, Guillaume Muschalle",
      cover:
        "https://chillhop.com/wp-content/uploads/2022/05/d8344de22563af8eaec8f544c14711592eabef26-1024x1024.jpg",
      id: uuidv4(),
      active: false,
      color: ["#549da3", "#fdde9e"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=28903",
    },
    {
      name: "Night Fishing",
      artist: "C Y G N",
      cover:
        "https://chillhop.com/wp-content/uploads/2022/03/1a32362ec1ba749448678975a905ae2b66caf80f-1024x1024.jpg",
      id: uuidv4(),
      active: false,
      color: ["#54726e", "#629d46"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=31591",
    },
    {
      name: "Fireworks Festival",
      artist: "Sleepy Fish",
      cover:
        "https://chillhop.com/wp-content/uploads/2021/09/2ce75252f5419a45d76bb93424ac1eae3e688b17-1024x1024.jpg",
      id: uuidv4(),
      active: false,
      color: ["#0c1d3d", "#fe501d"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=24829",
    },
    {
      name: "There and Back",
      artist: "Delayde, anybodyy",
      cover:
        "https://chillhop.com/wp-content/uploads/2021/09/6a9ef8ac00e168d3308fdf9e336874c03fab829d-1024x1024.jpg",
      id: uuidv4(),
      active: false,
      color: ["#ace6c5", "#742eb2"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=23192",
    },
    {
      name: "The Way We Were",
      artist: "Middle School, Aviino",
      cover:
        "https://chillhop.com/wp-content/uploads/2021/07/5821e04fd52fa668a0b9890f213cbb12e454cc6b-1024x1024.jpg",
      id: uuidv4(),
      active: false,
      color: ["#e56536", "#1f3950"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=22936",
    },
  ];
}

export default chillHop;
