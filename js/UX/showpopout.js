import Swal from '../librerias/sweetalert2.min.js'

const showopoout = () => {
  Swal.fire({
    title: "Error!",
    text: "Do you want to continue",
    icon: "error",
    confirmButtonText: "Cool",
  });
}