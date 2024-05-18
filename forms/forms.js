document.getElementById("style").innerHTML = `
<label for="mode">Стиль дизайна</label>
<select name="mode" id="mode">
    <option value="@FIELD\`\`\`@VAL\`\`\`" selected>Discord/Telegram</option>
    <option value="@FIELD: @VAL">VK</option>
</select>
`;

/*

В кавычках для "value" прописать ваш шаблон стилизации! (должно получится что-то типа: <option value="знак">Имя шаблона стиля</option>)
После сохранений - перезагружать страницу на всякий случай!

Использовать "\" знак перед знаком `!

@FIELD - название поле
@VAL - для значение поле

*/
