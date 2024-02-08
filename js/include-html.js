

// Define the custom <my-include> element
class MyIncludeElement extends HTMLElement {
	connectedCallback() {
	  const rel = this.getAttribute("rel");
  
	  // Fetch the content of the specified HTML file
	  fetch(rel)
      .then((response) => response.text())
      .then((data) => {
        const parsedContent = new DOMParser().parseFromString(data, "text/html").body;

        // Replace the current element with the parsed content
        this.replaceWith(...parsedContent.childNodes);

        // Use Promise.resolve() and setTimeout to ensure that replaceWith has completed
        Promise.resolve().then(() => {
          setTimeout(() => {
            interactiveScript();
          });
        });
      })
      .catch((error) => console.error(`Error fetching ${rel}:`, error));
	}
  }
  
  // Define the custom element tag with a hyphenated name
  customElements.define("my-include", MyIncludeElement);
  