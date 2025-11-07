document.getElementById("getResultBtn").addEventListener("click", getResult);

async function getResult() {
  const roll = document.getElementById("roll").value.trim();
  const resultDiv = document.getElementById("result");

  if (!roll) {
    resultDiv.innerHTML = "<p>Please enter a roll number.</p>";
    return;
  }

  try {
    const response = await fetch(`http://localhost:5000/result/${roll}`);
    const data = await response.json();

    if (data.length === 0) {
      resultDiv.innerHTML = "<p>No record found!</p>";
      return;
    }

    let html = `<h3>${data[0].name} (${data[0].class})</h3>`;
    html += "<table><tr><th>Subject</th><th>Marks</th></tr>";
    data.forEach(row => {
      html += `<tr><td>${row.subject}</td><td>${row.marks}</td></tr>`;
    });
    html += "</table>";

    resultDiv.innerHTML = html;
  } catch (error) {
    console.error("Error fetching result:", error);
    resultDiv.innerHTML = "<p>Error connecting to the server.</p>";
  }
}
