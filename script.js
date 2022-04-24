const juan = {
  nombre: "Juan Pardo",
  pasaporte: 34000785,
  vuelo: "LH234",
};
const laura = {
  nombre: "Laura Fernandez",
  pasaporte: 32000768,
  vuelo: "LH233",
};

const checkIn = function (pasajero) {
  if (pasajero.pasaporte === 34000785 && pasajero.vuelo === "LH234") {
    alert(`${pasajero.nombre} Checked in`);
  } else {
    alert(`${pasajero.nombre} Pasaporte Incorrecto!`);
  }
};

checkIn(juan);
checkIn(laura);
