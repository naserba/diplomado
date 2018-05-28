
function secuencia(x)
        {
            var n1 = 0;
            var n2 = 1;
            var n3;
            document.write("Te presentamos los primeros "+ x + " números fibonacci...<br>");
            document.write(n1+", ", n2+", ");


            for(var i=3; i <= x; i++)
            {
                n3 = n1 + n2;
                n1 = n2;
                n2 = n3;
                document.write(n3+", ");
            }
        }


function fibonacci(){
    var veces= document.getElementById('numero').value;
            var n1 = 0;
            var n2 = 1;
            var n3;

            document.write(n1+"<br>", n2+"<br>");


            for(var i=3; i <= veces; i++)
            {
                n3 = n1 + n2;
                n1 = n2;
                n2 = n3;
                document.write(n3+"<br>");
            }
            document.write('<br><a href="fibonacci.htm" style="margin: 10px; background-color:#000; position: absolute; color: #fff; padding: 10px 20px; text-align: center; font-size: 16px; text-decoration:none; font-family:serif">Calcula <br>de nuevo</a>');
        }

