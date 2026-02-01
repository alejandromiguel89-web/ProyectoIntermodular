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

router.post("/login", (req, res) => {
  req.body = "Se almacenará el password y el usuario";
  console.log(req.body);
  res.json({ mensaje: "Login correcto" });
});

router.post("/documentos", (req, res) => {
  req.body = "Se almacenarán documentos";
  console.log(req.body);
  res.json("Enlace a documentos");
});

router.post("/pruebas", (req, res) => {
  req.body = "Pagina de pruebas";
  console.log(req.body);
  res.send("se reserva este post para hacer pruebas");
});

router.post("/comentarios", (req, res) => {
  req.body = "Páginas de comentarios";
  console.log(req.body);
  res.json({ mensaje: "Aquí iran los comentarios de los clientes" });
});

router.post("/calendario", (req, res) => {
  req.body = "Aqui se almacenarán los proximos eventos";
  console.log(req.body);
  res.send("Documento con el calendario");
});

module.exports = router;
