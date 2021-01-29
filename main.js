const reserveBtn = document.getElementById("reserve");

reserveBtn.addEventListener("click", (event) => {
  // reservation values:
  const size = document.getElementById("size").value;
  const date = document.getElementById("date").value;
  const time = document.getElementById("time").value;

  alert(
    `\nCongratulations! You are reserved for a table of ${size}, on ${date} at ${time}. \n\nSee you soon!`
  );
});
