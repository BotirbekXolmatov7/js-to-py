const jsToPythonMap = {
  var: "",
  let: "",
  const: "",
  function: "def",
  "console.log": "print",
  "===": "==",
  "&&": "and",
  "||": "or",
  "!": "not",
  true: "True",
  false: "False",
  null: "None",
  ";": "",
  "{": ":",
  "}": "",
};

function jsToPython(jsCode) {
  let lines = jsCode.split("\n");
  let pythonCode = "";
  lines.forEach((line) => {
    let convertedLine = line;
    for (const [jsKeyword, pyKeyword] of Object.entries(jsToPythonMap)) {
      convertedLine = convertedLine.split(jsKeyword).join(pyKeyword);
    }

    if (convertedLine.includes("{")) {
      convertedLine = convertedLine.replace("{", ":");
    }

    pythonCode += convertedLine + "\n";
  });

  return pythonCode;
}

document.getElementById("jsInput").addEventListener("keyup", () => {
  const jsInput = document.getElementById("jsInput").value;
  const pythonOutput = jsToPython(jsInput);
  document.getElementById("pythonOutput").value = pythonOutput;
});


