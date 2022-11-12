let thumbs = document.getElementsByTagName("img");
let preview = document.getElementById("prev");

let url = "http://makkahmasjid.net/images/Events_2016/r_2016.jpg";
preview.style.backgroundImage = `url(${url})`;

// add a "click" event listener to each thumbnail

for (let i = 0; i < thumbs.length; i++) {
  console.log(i);
  thumbs[i].addEventListener("click", function () {
    let url = thumbs[i].src;
    console.log(url);
    preview.style.backgroundImage = `url(${url})`;
  });
}


// PAYMENT GATEWAY INTEGRATION 


