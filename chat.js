let chat = document.querySelector(".chat-messages");
let chatCont = document.querySelector(".chat");
let input = document.querySelector(".input");
let submiButton = document.querySelector(".input-text");

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
