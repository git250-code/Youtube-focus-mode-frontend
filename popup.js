const API_BASE = "https://youtube-focus-mode.onrender.com"; // ← replace with your actual Render URL

document.getElementById("fetchBtn").addEventListener("click", async () => {
  const url = document.getElementById("playlistUrl").value.trim();
  const match = url.match(/[?&]list=([a-zA-Z0-9_-]+)/);
  const playlistId = match ? match[1] : null;

  if (!playlistId) {
    alert("Please enter a valid YouTube playlist URL");
    return;
  }

  const resultsDiv = document.getElementById("results");
  resultsDiv.innerHTML = "<p>Loading...</p>";

  try {
    const res = await fetch(`${API_BASE}/api/playlist?id=${playlistId}`);
    const data = await res.json();

    resultsDiv.innerHTML = "";
    data.videos.forEach(video => {
      const el = document.createElement("div");
      el.className = "video";
      el.innerHTML = `
        <img src="${video.thumbnail}" alt="${video.title}" />
        <p>${video.title}</p>
        <button class="watch-btn" data-id="${video.videoId}">Watch</button>
      `;
      resultsDiv.appendChild(el);
    });
  } catch (err) {
    console.error(err);
    resultsDiv.innerHTML = "<p style='color:red;'>Failed to load playlist.</p>";
  }
});

document.addEventListener("click", (e) => {
  if (e.target.classList.contains("watch-btn")) {
    const id = e.target.dataset.id;
    chrome.tabs.create({ url: `https://www.youtube.com/watch?v=${id}` });
  }
});
