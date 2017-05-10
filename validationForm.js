document.getElementbyId.button.onclick;

function valid(form) {

    var inputEmail = document.querySelector('#email').value;
    var value = inputEmail.value;
    var pattern = /\b[a-z0-9._] + @[a-z0-9.-]+\.[a-z]{2,4}\b/i;
        if (pattern.test(value) === false) {
        inputEmail.styles.fontSize = "1px sold red";
            document.write("Строка " + input + "не соответсвует возрасту"<br />);
    };
    var inputPhone = document.querySelector('#phone').value;
    value = inputPhone.value;
    pattern = /\+38\ (\d{3}\) \d{3}-\d{2}-\d{2}/;
    text = "+38(063)996-62-83";
    document.write(text + " -> " + pattern.test(text) + "<br />");


    pattern = /[а-яА-Я]+ [а-яА-Я]+[а-яА-Я]/;
    text = "Иванов Иван Иванович";
    document.write(text + "-> " + pattern.test(text) + "<br />");
}