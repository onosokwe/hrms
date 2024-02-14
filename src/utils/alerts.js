import Swal from "sweetalert2";

const alertSuccess = (msg) => {
  Swal.fire({
    position: "center",
    icon: "success",
    title: msg,
    showConfirmButton: false,
    timer: 4500,
    showClass: {
      popup: "animate__animated animate__fadeInDown",
    },
    hideClass: {
      popup: "animate__animated animate__fadeOutUp",
    },
  });
};

const alertError = (msg) => {
  Swal.fire({
    position: "center",
    icon: "error",
    title: msg,
    showConfirmButton: false,
    timer: 4500,
    showClass: {
      popup: "animate__animated animate__fadeInDown",
    },
    hideClass: {
      popup: "animate__animated animate__fadeOutUp",
    },
  });
};

export { alertSuccess, alertError };
