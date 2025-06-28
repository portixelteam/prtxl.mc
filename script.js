document.addEventListener("DOMContentLoaded", () => {
  // Music controls
  const backgroundMusic = document.getElementById("background-music")
  const toggleMusicButton = document.getElementById("toggle-music")
  const musicIcon = toggleMusicButton.querySelector(".music-icon")
  let isMusicPlaying = false

  // Function to toggle music
  function toggleMusic() {
    if (isMusicPlaying) {
      backgroundMusic.pause()
      musicIcon.textContent = "❚❚"
    } else {
      backgroundMusic.play().catch((error) => {
        console.error("Audio playback failed:", error)
      })
      musicIcon.textContent = "▶"
    }
    isMusicPlaying = !isMusicPlaying
  }

  // Add click event to music button
  toggleMusicButton.addEventListener("click", toggleMusic)

  // Modal functionality
  const modal = document.getElementById("modal")
  const whatButton = document.querySelector(".what")
  const closeButton = document.querySelector(".close-button")

  // Open modal when "What's unique" button is clicked
  whatButton.addEventListener("click", () => {
    modal.style.display = "block"
  })

  // Close modal when X is clicked
  closeButton.addEventListener("click", () => {
    modal.style.display = "none"
  })

  // Close modal when clicking outside of it
  window.addEventListener("click", (event) => {
    if (event.target === modal) {
      modal.style.display = "none"
    }
  })

  // YouTube button functionality
  const youtubeButton = document.querySelector(".youtube")
  youtubeButton.addEventListener("click", () => {
    // Replace with your actual YouTube channel URL
    window.open("https://www.youtube.com/@PortixelNow", "_blank")
  })
})

