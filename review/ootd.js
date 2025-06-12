const ootdImages = {
  shoes1: ["boy/b1.png", "boy/b2.png", "boy/b3.png", "boy/b4.png", "boy/b5.png", "boy/b6.png", "boy/b7.png", "boy/b8.png", "boy/b9.png"],
  shoes2: ["girl/g1.png", "girl/g2.png", "girl/g3.png", "girl/g4.png", "girl/g5.png", "girl/g6.png", "girl/g7.png", "girl/g8.png", "girl/g9.png"],
  shoes4: ["girl/g1.png", "girl/g2.png", "girl/g3.png", "girl/g4.png", "girl/g5.png", "girl/g6.png", "girl/g7.png", "girl/g8.png", "girl/g9.png"],
  shoes5: ["boy/b1.png", "boy/b2.png", "boy/b3.png", "boy/b4.png", "boy/b5.png", "boy/b6.png", "boy/b7.png", "boy/b8.png", "boy/b9.png"],
  shoes9: ["girl/g1.png", "girl/g2.png", "girl/g3.png", "girl/g4.png", "girl/g5.png", "girl/g6.png", "girl/g7.png", "girl/g8.png", "girl/g9.png"],
  shoes10: ["boy/b1.png", "boy/b2.png", "boy/b3.png", "boy/b4.png", "boy/b5.png", "boy/b6.png", "boy/b7.png", "boy/b8.png", "boy/b9.png"],
  shoes11: ["girl/g1.png", "girl/g2.png", "girl/g3.png", "girl/g4.png", "girl/g5.png", "girl/g6.png", "girl/g7.png", "girl/g8.png", "girl/g9.png"],
  shoes12: ["boy/b1.png", "boy/b2.png", "boy/b3.png", "boy/b4.png", "boy/b5.png", "boy/b6.png", "boy/b7.png", "boy/b8.png", "boy/b9.png"]
};

const backgroundImages = [
  "pic/school.png",
  "pic/beach.png",
  "pic/mall.png",     
  "pic/office.png",   
  "pic/park.png"      
];


const productId = document.body.dataset.productId;
const outfitImages = ootdImages[productId] || [];

let currentOutfitIndex = 0;

const outfitImage = document.getElementById("outfitImage");
const backgroundDiv = document.getElementById("background");

document.getElementById("prevOutfit").addEventListener("click", () => {
  currentOutfitIndex = (currentOutfitIndex - 1 + outfitImages.length) % outfitImages.length;
  updateOutfit();
});

document.getElementById("nextOutfit").addEventListener("click", () => {
  currentOutfitIndex = (currentOutfitIndex + 1) % outfitImages.length;
  updateOutfit();
});

function updateOutfit() {
  outfitImage.src = outfitImages[currentOutfitIndex];
}

function changeBackground(index) {
  backgroundDiv.style.backgroundImage = `url('${backgroundImages[index]}')`;
}


updateOutfit();
changeBackground(0);
