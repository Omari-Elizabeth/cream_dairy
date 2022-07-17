var shedName = new Array();
var period = new Array();
var production = new Array();

function saveData()
        {
            var shedName = document.getElementById('shed_id').value;
            var period = document.getElementById('date').value;
            var production = document.getElementById('litres').value;
        }
function totalProduction()
        {
            var num1 = parseInt(document.getElementById("Num1").value);
            var num2 = parseInt(document.getElementById("Num2").value);
            document.getElementById("Sum").value = num1 + num2;

        }