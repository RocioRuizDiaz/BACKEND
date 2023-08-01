const express = require("express");
const Contenedor = require("./contenedor");

const app = express();
const port = 8080;


const contenedor = new Contenedor("productos.txt");

app.get('/productos', async(req, res) => {
    const productos = await contenedor.getAll();
    res.json(productos);
});

app.get('/productosRandom', async (req, res) => {
    const productos = await contenedor.getAll();
    if (productos.length === 0) {
      return res.json({ error: "No hay productos disponibles"});
    }

    const productoRandom = productos[Math.floor(Math.random() * productos.length)];
  res.json(productoRandom);
});

app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
  });















