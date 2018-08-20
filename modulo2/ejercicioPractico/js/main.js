
$(document).ready(function () {
    var elements = document.getElementsByTagName("input");

    for (var i = 0; i < elements.length; i++) {
        elements[i].oninvalid = function (e) {
            e.target.setCustomValidity("");
            if (!e.target.validity.valid) {
                switch (e.srcElement.id) {
                    case "username":
                        e.target.setCustomValidity("Coloca tu nombre usuario");
                        break;
                    case "password":
                        e.target.setCustomValidity("Coloca tu contraseña");
                        break;
                }
            }
             };
        elements[i].oninput = function (e) {
            e.target.setCustomValidity("");
        };
    }
})

