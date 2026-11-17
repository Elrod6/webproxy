
const BACKEND_URL =
  "https://glorious-goggles-v6pxwww6xjg6hp5pq-3000.app.github.dev";

async function sendRequest() {
  const urlInput = document.getElementById("urlInput");
  const output = document.getElementById("output");

  const url = urlInput.value.trim();

  if (!url) {
    output.textContent = "Please enter a URL.";
    return;
  }

  output.textContent = "Contacting WebProxy backend...";

  try {
    const response = await fetch(`${BACKEND_URL}/api/example`);
    const data = await response.json();

    if (!response.ok || !data.success) {
      throw new Error("The backend request failed.");
    }

    output.textContent =
      "Backend connection successful!\n\n" +
      "Destination: " + data.destination + "\n" +
      "HTTP Status: " + data.status + "\n\n" +
      "Website preview:\n" + data.preview;
  } catch (error) {
    output.textContent =
      "Connection error: " + error.message;
  }
}
