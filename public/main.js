document
  .getElementById("surveyForm")
  .addEventListener("submit", async function (e) {
    e.preventDefault();
    const formData = new FormData(this);
    const data = {};

    for (const [key, value] of formData.entries()) {
      data[key] = value;
    }

    const res = await fetch("/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (res.ok) {
      alert("Thank you! Your response has been submitted.");
      this.reset();
    } else {
      alert("There was an error submitting your response.");
    }
  });
