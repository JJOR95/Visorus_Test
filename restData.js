module.exports = function () {
    var data = {
        categoria: [{
            clave: 'C01',
            fechaCreado: 1569364107680,
            nombre: 'Computadoras',
            activo: true
        }],
        articulo: [{
            clave: 'L01',
            categoria: this.categoria,
            nombre: 'Lenovo',
            precios: [
              {
                precio: 15000
              },
              {
                precio: 12500
              }
            ],
            activo: true
          }]
    }
    return data
}