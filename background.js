document.getElementById("roll").addEventListener("click", () => {
    chrome.tabs.create({
      url: "https://watchbutdonotlearn.github.io/",
    })
  for (let i = 0; i < 5; i++) {
    chrome.tabs.create({
      url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      active: false
    });
  }
});