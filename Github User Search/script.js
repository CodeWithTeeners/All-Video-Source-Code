async function searchUser() {
  const username = document.getElementById("usernameInput").value;

  if (username.trim() === "") {
    alert("Please enter a GitHub username");
    return;
  }

  try {
    const response = await fetch(`https://api.github.com/users/${username}`);
    const userData = await response.json();

    if (userData.message === "Not Found") {
      alert("User not found");
      return;
    }

    displayUserInfo(userData);
  } catch (error) {
    console.error("Error fetching user data", error);
    alert("Error fetching user data");
  }
}

function displayUserInfo(user) {
  const userInfoContainer = document.getElementById("userInfo");
  userInfoContainer.innerHTML = `
  <div class="profile">
  <img src="${user.avatar_url}" alt="${user.login}">
  <div class="name-and-date">
      <div class="username">
          <h2>${user.name}</h2>
          </div>
          <p>${user.login}</p>
          <p>Joined GitHub: ${new Date(user.created_at).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
          })}</p>
  </div>
  <p class="bio">${user.bio || "No bio available"}</p>
  <div class="stats">
      <p>Followers: ${user.followers}</p>
      <p>Following: ${user.following}</p>
      <p>Public Repos: ${user.public_repos}</p>
  </div>
</div>
    `;
}
