const vuelo = "LH234";
const juan = {
  nombre: "Juan Pardo",
  pasaporte: 34000785,
};
const laura = {
  nombre: "Laura Fernandez",
  pasaporte: 32000768,
};

const checkIn = function (numeroVuelo, pasajero) {
  numeroVuelo = "LH999";
  pasajero.name = "Mr. " + pasajero.nombre;

  if (pasajero.pasaporte === 34000785) {
    alert("Checked in");
  } else {
    alert("Pasaporte Incorrecto!");
  }
};

checkIn(vuelo, juan);
checkIn(vuelo, laura);
