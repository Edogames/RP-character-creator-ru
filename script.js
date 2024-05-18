function SetForm(formlink){
    document.getElementById("form-object").setAttribute('data', formlink);
    return;
}

function PrintData(trgt, style){
    var stringData = "";

    for(const [key, value] of Object.entries(values)){
        if(value !== undefined && value !== null){
            let txt = "";
            txt = style.replace("@FIELD", key);
            console.log(txt);
            txt = txt.replace("@VAL", value);
            stringData += `${txt}\n`;
        }
    }

    trgt.value = stringData;
    trgt.select();
    navigator.clipboard.writeText(stringData);
    trgt.value = "";
    alert("Скопировано!");
    return;
}
