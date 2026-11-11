for (let i = 0; i < 5; i++) {
  chrome.tabs.create({
    url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    active: i === 0
  });
}