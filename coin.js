   const tavernAudio = document.getElementById("tavernAudio");
   const musicNote = document.getElementById("musicNote");
   const coinSound = document.getElementById("coinSound");

   // Start playing tavern audio at 50% volume
   tavernAudio.volume = 0.5;
   tavernAudio.play();
   
   //music ebent listener
   musicNote.addEventListener("click", function() {
     // Toggle mute state
     tavernAudio.muted = !tavernAudio.muted;

     // Change icon based on the mute state
     if (tavernAudio.muted) {
       musicNote.classList.remove("bi-music-note-beamed");
       musicNote.classList.add("bi-volume-mute");
     } else {
       musicNote.classList.remove("bi-volume-mute");
       musicNote.classList.add("bi-music-note-beamed");
     }
   });

   function tossACoin() {
    const tavernAudio = document.getElementById("tavernAudio");
    const coinSound = document.getElementById("coinSound");

    // Start playing tavern audio
    tavernAudio.play(); 

    // Mute tavern audio when coin is tossed and play the toss-a-coin sound
    tavernAudio.muted = true;
    coinSound.play();

    // Once the toss-a-coin sound ends, unmute the tavern audio
    coinSound.onended = function() {
        tavernAudio.muted = false;
    };

     // Draw the coin animation (ensure it's triggered when the button is pressed)
     const canvas = document.getElementById("coinCanvas");
     const ctx = canvas.getContext("2d");
     const faces = {
       heads: "H",
       tails: "T"
     };

     // Draw coin face function
     function drawCoin(angle, face) {
       ctx.clearRect(0, 0, canvas.width, canvas.height);
       ctx.save();
       ctx.translate(canvas.width / 2, canvas.height / 2);
       ctx.rotate(angle);
       ctx.beginPath();
       ctx.arc(0, 0, 40, 0, Math.PI * 2);
       ctx.fillStyle = "silver";
       ctx.fill();

       ctx.fillStyle = "black";
       ctx.font = "20px Arial";
       ctx.textAlign = "center";
       ctx.textBaseline = "middle";

       if (Math.abs(Math.sin(angle)) < 0.3) {
         ctx.fillText(face === "heads" ? faces.heads : faces.tails, 0, 0);
       } else {
         ctx.fillText("|", 0, 0);
       }

       ctx.restore();
     }

     // Animate the coin toss
     let frame = 0;
     const face = Math.random() < 0.5 ? "heads" : "tails";

     function animateFrame() {
       const angle = (frame / 20) * Math.PI * 8;
       drawCoin(angle, face);
       frame++;

       if (frame <= 20) {
         requestAnimationFrame(animateFrame);
       } else {
         //check if okay
         console.log("Coin Toss Complete!");
       }
     }

     animateFrame();
   }