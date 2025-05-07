
export default function handler(req, res) {
  const productos = [
    { id: 1, nombre: "Auriculares Bluetooth", precio: 29.99 },
    { id: 2, nombre: "Smartphone X200", precio: 599.99 }
  ];
  res.status(200).json(productos);
}
