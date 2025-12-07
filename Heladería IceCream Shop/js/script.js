function validateAndProcessOrder(event) {
    event.preventDefault(); // Evita el envío por defecto del formulario
    const form = event.target;

    const flavor = form.querySelector('#flavor').value;
    const name = form.querySelector('#nombre').value.trim(); // Nuevo campo
    const email = form.querySelector('#email').value.trim();
    const phone = form.querySelector('#phone').value.trim(); // Nuevo campo

    // 1. Validación del Sabor (opcional)
    if (flavor === "") {
        alert("⚠️ Por favor, selecciona un sabor de helado antes de comprar.");
        return;
    }

    // 2. Validación del Nombre
    if (name === "") {
        alert("⚠️ Por favor, ingresa tu Nombre y Apellido.");
        return;
    }
    
    // 3. Validación del Correo Electrónico
    // Expresión regular para verificar formato básico: algo@algo.algo
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
    if (email === "") {
        alert("⚠️ Por favor, ingresa tu Correo Electrónico.");
        return;
    }
    if (!emailPattern.test(email)) {
        alert("⚠️ El formato del Correo Electrónico no es válido (debe incluir el '@').");
        return;
    }

    // 4. Validación del Teléfono
    // Expresión regular para aceptar solo dígitos (0-9)
    const phonePattern = /^\d+$/; 
    
    if (phone === "") {
        alert("⚠️ Por favor, ingresa tu Número de Teléfono.");
        return;
    }
    // Aseguramos que solo sean números y no contenga espacios ni texto
    if (!phonePattern.test(phone)) {
         alert("⚠️ El Número de Teléfono solo debe contener dígitos (sin espacios ni texto).");
         return;
    }
    
    // 5. Proceso de compra exitoso
    alert("¡Felicidades! 🎉 Tu pedido ha sido procesado y está en camino. ¡Gracias por tu compra!");

    // Limpiar el formulario
    form.reset();
}

// Asignar el evento submit al formulario después de que la página cargue
document.addEventListener('DOMContentLoaded', () => {
    const purchaseForm = document.querySelector('#purchase-form form');
    if (purchaseForm) {
        // Asigna la función de validación al evento 'submit'
        purchaseForm.addEventListener('submit', validateAndProcessOrder);
    }
});