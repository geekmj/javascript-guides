// async because fetch is promise
async function fetchJson() {
  try {
    await fetch(
      "https://geekmj-javascript-guides-r75vjjr7jr2jxp-8080.githubpreview.dev/hello"
    )
      .then((response) => response.json())
      .then((data) => alert(data.message));
  } catch (e) {
    console.log("Error Message " + e.message);
    if (e.message.includes("Failed to fetch")){
      alert("Some Type Error Happened");
    }
    console.log("Error->", e);

    try {
      throw new Error();
    } catch(e) {
      if (e.message.includes("Type Error")){
        alert("Some Type Error Happened 2222");
      } else {
        alert("Some Type Error Happened 444");
      }
    }
  }
}
