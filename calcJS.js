let txtbox = document.getElementById('txtbox');
btn = document.querySelectorAll('button');
let textValue = '';
for (item of btn) {
    item.addEventListener('click', (e) => {
        buttonclickval = e.target.innerText;
        console.log('Button text is ', buttonclickval);
        if (buttonclickval == 'x') {
            buttonclickval = '*';
            textValue += buttonclickval;
            txtbox.value = textValue;
        }
        else if (buttonclickval == 'AC') {
            textValue = "";
            txtbox.value = textValue;
        }
        else if (buttonclickval == '÷') {
            buttonclickval = "/";
            textValue += buttonclickval;
            txtbox.value = textValue;
        }
        else if (buttonclickval == '=') {
            txtbox.value = eval(textValue);
        }
        else {
            textValue += buttonclickval;
            txtbox.value = textValue;
        }

    })
}