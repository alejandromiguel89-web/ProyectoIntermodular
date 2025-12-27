const { Router } = require(`express`);
const router = Router();

router.get("/", (req, res) => {
  console.log("Alguien accedió al servidor");
  res.send("Bienvenido al servidor");
});

router.get("/usuarios", (req, res) => {
  console.log("Alguien accedió a usuarios");
  res.json({ usuarios: ["Ana", "Luis", "Pepe"] });
});

router.get("/productos", (req, res) => {
  console.log("Alguien accedió a productos");
  res.json({ productos: ["Teclado", "Raton", "Monitor"] });
});

router.get("/carrito", (req, res) => {
  console.log("Alguien accedió al carrito de la compra");
  res.send("Bienvenido al carrito de la compra");
});

router.get("/fecha", (req, res) => {
  console.log("Alguien accedió a la hora");
  res.send(`Fecha actual ${Date().toLocaleString()}`);
});

module.exports = router;
