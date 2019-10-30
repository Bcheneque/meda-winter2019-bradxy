var stars = "";

for (var counter = 0; counter < 10; counter = counter + 1) {
    stars = stars + "*";
    console.log(stars);
}

var starsArray = stars.split("");


for (var counter = 0; counter < 10; counter = counter + 1) {
  starsArray.pop();
  console.log(starsArray.join(""));
  
}