import { v4 as uuidv4 } from "uuid";

function chillHop() {
  return [
    {
      name: "She Won't Say",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/10/644dedb802e85f3eb700b8b091e729504b680a9c-300x300.jpg",
      artist: "Psalm Trees, Guillaume Muschalle",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=10535",
      color: ["#F8DFA9", "#E89E3D"],
      id: uuidv4(),
      active: true,
    },
    {
      name: "Cascade",
      cover:
        "https://chillhop.com/wp-content/uploads/2021/02/70a56749b8b89815fa75446030c6ba57d2c34de7-300x300.jpg",
      artist: "Knowmadic",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=13091",
      color: ["#73C29B", "#F7C648"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Carefree",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/07/2a048a5780723e66fff64c3a60814ea64761284f-300x300.jpg",
      artist: "dryhope, Gustav Gustav",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=6763",
      color: ["#C8597A", "#3D1D35"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Longing",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/11/f78c39b4bb6313ddd0354bef896c591bfb490ff8-300x300.jpg",
      artist: "Makzo",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=11775",
      color: ["#FDD168", "#4E62A1"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Firefly Field",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/09/0255e8b8c74c90d4a27c594b3452b2daafae608d-300x300.jpg",
      artist: "Aso, Middle School, Aviino",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=10073",
      color: ["#FAD993", "#174F61"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Growing Apart",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/07/ff35dede32321a8aa0953809812941bcf8a6bd35-300x300.jpg",
      artist: "Swørn",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=6556",
      color: ["#6E4F80", "#C04178"],
      id: uuidv4(),
      active: false,
    },
  ];
}

export default chillHop;
