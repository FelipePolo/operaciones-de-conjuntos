const onOff = (id) => {
  switch (id) {
    case 'palabra':
      $("#palabra").show()
      $("#lenguaje").hide()
      $("#alfabeto").hide()
      break;
    case 'lenguaje':
      $("#lenguaje").show()
      $("#alfabeto").hide()
      $("#palabra").hide()
      break;

    default:
      $("#alfabeto").show()
      $("#lenguaje").hide()
      $("#palabra").hide()
      break;
  }
};
