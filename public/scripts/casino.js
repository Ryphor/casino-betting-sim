const checkForm = () => {
  var balanceField = document.getElementById("balanceField").value;
  var unitField = document.getElementById("unitField").value;
  var roundsField = document.getElementById("roundsField").value;
  if (balanceField != "" && unitField != "" && roundsField != "") {
    document.getElementById("simulateMartingale1000Times").disabled = false;
  } else {
    document.getElementById("simulateMartingale1000Times").disabled = true;
  }
}
