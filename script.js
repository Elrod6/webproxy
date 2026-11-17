
function simulate() {
  const url = document.getElementById("url").value.trim();
  const output = document.getElementById("output");

  if (!url) {
    output.textContent = "Please enter a test URL.";
    return;
  }

  let parsed;

  try {
    parsed = new URL(url);
  } catch {
    output.textContent = "Invalid URL. Try https://example.com";
    return;
  }

  if (parsed.protocol !== "https:") {
    output.textContent = "Only HTTPS test URLs are accepted.";
    return;
  }

  if (parsed.hostname !== "example.com") {
    output.textContent =
      "This educational simulator only accepts example.com.";
    return;
  }

  output.innerHTML = `
    <h3>Request Simulation</h3>
    <p>Browser: Request created</p>
    <p>Proxy: Request received</p>
    <p>Destination: ${parsed.hostname}</p>
    <p>Status: Simulated successfully</p>
    <p>No external website was contacted.</p>
  `;
}
