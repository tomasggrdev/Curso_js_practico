function PrecioConDescuento (precio,descuento,cupon) {
    return (precio*(100-descuento)/100)-cupon
}
function PrecioConDescuento1 () {
    const precio = document.getElementById("price").value
    const descuento = document.getElementById("discount").value
    const cupon = document.getElementById("cupon").value
    const pc = PrecioConDescuento(precio,descuento,cupon)
    document.getElementById("pricep").innerText = `El precio con descuento es de $${pc}`
}