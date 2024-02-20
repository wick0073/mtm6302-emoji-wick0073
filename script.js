
//emoji array with codes
const emojis = [
  "&#129409;", "&#x1F601;", "&#x1F602;", "&#x1F603;",
  "&#x1F604;", "&#x1F605;", "&#x1F606;", "&#x1F607;",
  "&#x1F608;", "&#x1F609;", "&#x1F60A;", "&#x1F60B;",
  "&#x1F600;", "&#x1F601;", "&#x1F602;", "&#x1F603;",
  "&#x1F604;", "&#x1F605;", "&#x1F606;", "&#x1F607;",
  "&#x1F608;", "&#x1F609;", "&#x1F60A;", "&#x1F60B;",
  "&#x1F60C;", "&#x1F60D;", "&#x1F60E;", "&#x1F60F;",
  "&#x1F610;", "&#x1F611;", "&#x1F612;", "&#x1F613;",
  "&#x1F614;", "&#x1F615;", "&#x1F616;", "&#x1F617;",
  "&#x1F618;", "&#x1F619;", "&#x1F61A;", "&#x1F61B;",
  "&#x1F61C;", "&#x1F61D;", "&#x1F61E;", "&#x1F61F;"
];

const emojiGallery = document.getElementById("emoji-cont");
// looping the emoji array
for (let i = 0; i < emojis.length; i++) 
{
  const emoji = emojis[i];

  const div = document.createElement("div");
  div.classList.add("emoji-item");
  div.innerHTML = `

  
      <span class="emoji">
          ${emoji}
      </span>


      <code class="emoji-code">
          ${emoji.replace("&#","")}
      </code>

  `;
  //adds an emoji block to the container 
  emojiGallery.appendChild(div);
}