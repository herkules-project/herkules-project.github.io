function Show()
{
    let showMaktoTable = document.getElementById("makroTable");
        showMaktoTable.classList.add('Show');

    let kcal, fat, carbo, sugar, protein;
    let kcalAfter, fatAfter, carboAfter, sugarAfter, proteinAfter;
    let howIEat;
    kcal = parseInt(document.querySelector("#kcal").value) / 100;
    fat = parseInt(document.querySelector("#fat").value) / 100;
    carbo = parseInt(document.querySelector("#carbo").value) / 100;
    sugar = parseInt(document.querySelector("#sugar").value) / 100;
    protein = parseInt(document.querySelector("#protein").value) / 100;
    howIEat = parseInt(document.querySelector("#howIEat").value);

    if (isNaN(kcal) || isNaN(fat) || isNaN(carbo) || isNaN(sugar) || isNaN(protein) || isNaN(howIEat))
        return 0;
    else
    {
        kcalAfter = howIEat * kcal;
        fatAfter = howIEat * fat;
        carboAfter = howIEat * carbo;
        sugarAfter = howIEat * sugar;
        proteinAfter = howIEat * protein;

        document.getElementById("kcalAfter").innerHTML = kcalAfter.toFixed(0);
        document.getElementById("fatAfter").innerHTML = fatAfter.toFixed(1);
        document.getElementById("carboAfter").innerHTML = carboAfter.toFixed(1);
        document.getElementById("sugarAfter").innerHTML = sugarAfter.toFixed(1);
        document.getElementById("proteinAfter").innerHTML = proteinAfter.toFixed(1);
    }
}