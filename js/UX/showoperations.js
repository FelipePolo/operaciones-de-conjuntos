var operations = document.getElementById("operaciones").children;
console.log(operations);

const showoperation = (nombre) => {
  switch (nombre) {
    case "alfabeto":
      onOff(["lenguaje", "palabra"]);
      break;
    case "lenguaje":
      onOff(["alfabeto", "palabra"]);
      break;
    case "palabra":
      onOff(["alfabeto", "lenguaje"]);
      break;

    default:
      break;
  }
};

const onOff = (nombres) => {
  for (elemento of operations) {
    if (
      elemento.getAttribute("name").substring() === nombres[0] ||
      elemento.getAttribute("name") === nombres[1]
    ) {
      elemento.classList.add("none");
    } else {
      elemento.classList.remove("none");
    }
  }
};
