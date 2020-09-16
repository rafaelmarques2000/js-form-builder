# js-form-builder
Projeto usando JS ECMA6 + Webpack para criar uma api que cria formulários via Javascript

# Objetivo
Permitir criar formulários usando Javascript puramente, atraves de uma Api usando padrão builder para construir o formulario HTML

# Motivação
Estudar sobre padrões de projeto e ECMA6 e funcionamento de compiladores de bunddle como Webpack


# Como usar 

Inclua no seu html uma div com um ID para que o FormBuilder possar usar como container para o formulário não se limitando apenas a um formulário multiplos formularios podem ser usados seguindo o mesmo processo.
Depois adicione o script de dentro da pasta Dist FormBuilder.js
```html 
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <script src="FormBuilder.js"></script>
        <title>Teste</title>
    </head>
    <body>
         <div id="form"></div> <!--CONTAINER PARA O FORMULÁRIO-->
    </body>
</html>
```

Crie uma instância da class FormBuilder informando em seu construtor o id da DIV que seja que seja o container do Formulário
```javascript
    <script>
         let formBuilder = new FormBuilder('form');
    </script>
```
# Criando elementos

O projeto foi pensando utilizando o padrão de projeto FormBuilder para dar fluencia as chamadas dos metodos e abstrair a criação dos componentes de tela.
e possivel gerar todos os elementos basicos de um formulário suportados pelo browser.

Os metodos disponiveis são:

**createInput(props)**  - Cria todos os tipos de inputs Text,checkBox....
**createButton(props)** - Cria Botões(Submit e Button)
**createSelect(props)** - Cria Campos de seleção
**createForm(props)**   - Cria o formulário na tela **(Obs: e preciso chamar este metodo por ultimo afim de criar o fomulário em tela)**

# Exemplos

#### Construção de formulário

```html
  
```

