let chat = document.querySelector(".chat-messages");
let chatCont = document.querySelector(".chat");
let input = document.querySelector(".input");
let submiButton = document.querySelector(".input-text");
let user_img = document.querySelector(".user-img");
const colors = ["#3ECCE0", "#8CDFC6", "#FC91E9", "#FF81B0", "#FFB964"];

// Generate a random index to pick a color from the list
const randomIndex = Math.floor(Math.random() * colors.length);
// Set the user's profile picture to the randomly chosen color
const userProfilePicture = document.querySelector(".user-profile-picture");
user_img.style.backgroundColor = colors[randomIndex];

submiButton.addEventListener("click", () => {
  const value = input.value;
  if (value !== "") {
    chat.insertAdjacentHTML(
      "beforeend",
      `<div class="user-message">
          <p class="user-message-text">
          ${input.value}
          </p>
          <img src="./assets/robot-circle.png" alt="" class="user-image" />
        </div>`
    );
    input.textContent = "";
    chatCont.scrollTop = chatCont.scrollHeight;
  }
});
