import DiceBox from "https://unpkg.com/@3d-dice/dice-box@1.0.8/dist/dice-box.es.min.js";

let Box = new DiceBox("#dice-box", {
  assetPath: "assets/",
  origin: "https://unpkg.com/@3d-dice/dice-box@1.0.8/dist/",
  theme: "default",
  themeColor: "#fae420",
  offscreen: true,
  scale: 6
});

Box.init().then(async (world) => {
  Box.roll(["1d20", "1d12", "1d10", "1d8", "1d6", "1d4"]);
});

const button = document.getElementById("rollem");

const colors = [
  "#348888",
  "#22BABB",
  "#9EF8EE",
  "#FA7F08",
  "#F24405",
  "#F25EB0",
  "#B9BF04",
  "#F2B705",
  "#F27405",
  "#F23005"
];

function get_random(list) {
  return list[Math.floor(Math.random() * list.length)];
}

button.addEventListener("click", (e) => {
  Box.roll(["1d20", "1d12", "1d10", "1d8", "1d6", "1d4"], {
    themeColor: get_random(colors)
  });
});
