document.getElementById("add-border").addEventListener("click", function () {
  const border = document.getElementById("frinds");
  border.style.border = "2px solid red";
});

document.getElementById("add-friend").addEventListener("click", function () {
  const container = document.getElementById("frinds");
  const friendsDiv = document.createElement("div");
  friendsDiv.classList.add("friend");
  friendsDiv.innerHTML = `
  <h3 class="friend-name">Friend-3</h3>
        <p>
          Reprehenderit, esse
        </p>
  `;

  container.appendChild(friendsDiv);
});
