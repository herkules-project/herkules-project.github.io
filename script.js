function BMI()
{
    let BMI, weight, height, age;
    let message;
    weight = parseInt(document.querySelector("#weight").value);
    height = parseInt(document.querySelector("#height").value);
    age = parseInt(document.querySelector("#age").value);
    BMI = ((weight) / (height * height) * 10000).toFixed(1);
    checkInfo();

    function checkInfo()
    {
        if(BMI != "NaN" || age == "NaN")
            document.getElementById("result").innerHTML = BMI;
        else
        {
            document.getElementById("result").innerHTML = "Podałeś złą wartość";
            return 0;
        }
        checkAge();
    }

    function checkAge()
    {
        if (age < 18)
            under18();
        else if (age >= 18 && age <= 24)
            beetween18and24();
        else if (age >= 25 && age <= 34)
            beetween25and34();
        else if (age >= 35 && age <= 44)
            beetween35and44();
        else if (age >= 45 && age <= 54)
            beetween45and54();
        else if (age >= 55 && age <= 64)
            beetween55and64();
        else if (age > 64)
            above64();
    }

    function under18()
    {
        if(BMI < 18)
            message = "Masz niedowage";
        else if(BMI > 18 && BMI < 24.4)
            message = "Twoja waga jest odpowiednia";
        else if(BMI > 24.5 && BMI < 29.4)
            message = "Masz nadwage";
        else if(BMI > 29.9 && BMI < 34.4)
            message = "Masz otyłość pierwszego stopnia";
        else if(BMI > 34.5 && BMI < 39.4)
            message = "Masz otyłość drugiego stopnia";
        else if(BMI > 40)
            message = "Masz otyłość trzeciego stopnia";
        else if (BMI == "NaN")
            message = "Podałeś złą wartość";
        
        document.getElementById("appropriateBMI").innerHTML = message;
    }
    
    function beetween18and24()
    {
        if(BMI < 18.5)
            message = "Masz niedowage";
        else if(BMI >= 18.5 && BMI < 24.9)
            message = "Twoja waga jest odpowiednia";
        else if(BMI > 25 && BMI < 29.9)
            message = "Masz nadwage";
        else if(BMI > 30 && BMI < 34.9)
            message = "Masz otyłość pierwszego stopnia";
        else if(BMI > 35 && BMI < 39.9)
            message = "Masz otyłość drugiego stopnia";
        else if(BMI > 40)
            message = "Masz otyłość trzeciego stopnia";
        else if (BMI == "NaN")
            message = "Podałeś złą wartość";
        
        document.getElementById("appropriateBMI").innerHTML = message;
    }

    function beetween25and34()
    {
        if(BMI < 19.5)
            message = "Masz niedowage";
        else if(BMI >= 19.5 && BMI < 25.9)
            message = "Twoja waga jest odpowiednia";
        else if(BMI > 26 && BMI < 30.9)
            message = "Masz nadwage";
        else if(BMI > 31 && BMI < 35.9)
            message = "Masz otyłość pierwszego stopnia";
        else if(BMI > 36 && BMI < 40.9)
            message = "Masz otyłość drugiego stopnia";
        else if(BMI > 41)
            message = "Masz otyłość trzeciego stopnia";
        else if (BMI == "NaN")
            message = "Podałeś złą wartość";
        
        document.getElementById("appropriateBMI").innerHTML = message;
    }

    function beetween35and44()
    {
        if(BMI < 20.5)
            message = "Masz niedowage";
        else if(BMI >= 20.5 && BMI < 26.9)
            message = "Twoja waga jest odpowiednia";
        else if(BMI > 27 && BMI < 31.9)
            message = "Masz nadwage";
        else if(BMI > 32 && BMI < 36.9)
            message = "Masz otyłość pierwszego stopnia";
        else if(BMI > 37 && BMI < 41.9)
            message = "Masz otyłość drugiego stopnia";
        else if(BMI > 42)
            message = "Masz otyłość trzeciego stopnia";
        else if (BMI == "NaN")
            message = "Podałeś złą wartość";
        
        document.getElementById("appropriateBMI").innerHTML = message;
    }

    function beetween45and54()
    {
        if(BMI < 21.5)
            message = "Masz niedowage";
        else if(BMI >= 21.5 && BMI < 27.9)
            message = "Twoja waga jest odpowiednia";
        else if(BMI > 28 && BMI < 32.9)
            message = "Masz nadwage";
        else if(BMI > 33 && BMI < 37.9)
            message = "Masz otyłość pierwszego stopnia";
        else if(BMI > 38 && BMI < 42.9)
            message = "Masz otyłość drugiego stopnia";
        else if(BMI > 43)
            message = "Masz otyłość trzeciego stopnia";
        else if (BMI == "NaN")
            message = "Podałeś złą wartość";
        
        document.getElementById("appropriateBMI").innerHTML = message;
    }

    function beetween55and64()
    {
        if(BMI < 22.5)
            message = "Masz niedowage";
        else if(BMI >= 22.5 && BMI < 28.9)
            message = "Twoja waga jest odpowiednia";
        else if(BMI > 29 && BMI < 33.9)
            message = "Masz nadwage";
        else if(BMI > 34 && BMI < 38.9)
            message = "Masz otyłość pierwszego stopnia";
        else if(BMI > 39 && BMI < 43.9)
            message = "Masz otyłość drugiego stopnia";
        else if(BMI > 44)
            message = "Masz otyłość trzeciego stopnia";
        else if (BMI == "NaN")
            message = "Podałeś złą wartość";
        
        document.getElementById("appropriateBMI").innerHTML = message;
    }

    function above64()
    {
        if(BMI < 23.5)
            message = "Masz niedowage";
        else if(BMI >= 23.5 && BMI < 29.9)
            message = "Twoja waga jest odpowiednia";
        else if(BMI > 30 && BMI < 34.9)
            message = "Masz nadwage";
        else if(BMI > 35 && BMI < 39.9)
            message = "Masz otyłość pierwszego stopnia";
        else if(BMI > 40 && BMI < 44.9)
            message = "Masz otyłość drugiego stopnia";
        else if(BMI > 45)
            message = "Masz otyłość trzeciego stopnia";
        else if (BMI == "NaN")
            message = "Podałeś złą wartość";
        
        document.getElementById("appropriateBMI").innerHTML = message;
    }
}