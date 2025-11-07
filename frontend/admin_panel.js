// Check if logged in
if (localStorage.getItem("isAdmin") !== "true") {
  window.location.href = "admin.html";
}

document.getElementById("logoutBtn").addEventListener("click", () => {
  localStorage.removeItem("isAdmin");
  window.location.href = "admin.html";
});

// Add Student
document.getElementById("addStudentBtn").addEventListener("click", async () => {
  const roll_no = document.getElementById("roll_no").value;
  const name = document.getElementById("name").value;
  const class_name = document.getElementById("class_name").value;

  const res = await fetch("http://localhost:5000/students", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ roll_no, name, class_name })
  });
  const data = await res.json();
  alert(data.message);
});

// Add Result
document.getElementById("addResultBtn").addEventListener("click", async () => {
  const student_id = document.getElementById("student_id").value;
  const subject = document.getElementById("subject").value;
  const marks = document.getElementById("marks").value;

  const res = await fetch("http://localhost:5000/results", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ student_id, subject, marks })
  });
  const data = await res.json();
  alert(data.message);
});
