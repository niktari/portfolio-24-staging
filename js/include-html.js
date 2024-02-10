async function fetchAndInsertContent(targetId, contentUrl) {
  try {
      const response = await fetch(contentUrl);
      const data = await response.text();
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
          targetElement.innerHTML = data;
      } else {
          console.error(`Element with id '${targetId}' not found.`);
      }
  } catch (error) {
      console.error(`Error fetching or inserting content: ${error}`);
  }
}

fetchAndInsertContent("info", "/../snippets/info.html");