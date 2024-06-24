$w.onReady(function () {
    const menuToggle1 = $w("#menuToggle1");
    const menuContainer = $w("#menuContainer");

    // Movendo o botão para dentro do menuContainer
    menuToggle1.appendTo(menuContainer);
});


$w.onReady(function () {
    const buttonToggle1 = $w("#buttonToggle1");
    const mobileMenu = $w("#mobileMenu");

    buttonToggle1.onClick(() => {
        // Verificar se o menu mobile está visível ou não
        if (mobileMenu.hidden) {
            // Se estiver oculto, mostrá-lo
            mobileMenu.show();
        } else {
            // Se estiver visível, ocultá-lo
            mobileMenu.hide();
        }
    });
});

$w.onReady(function () {
    const menuToggle1 = $w("#menuToggle1");
    console.log("Código está sendo executado!");
    menuToggle1.setBounds({y: 369, x: 229});
});
