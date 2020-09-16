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

**createInput(props)**  - Cria todos os tipos de inputs Text,checkBox....<br>
**createButton(props)** - Cria Botões(Submit e Button)<br>
**createSelect(props)** - Cria Campos de seleção<br>
**createForm(props)**   - Cria o formulário na tela **(Obs: e preciso chamar este metodo por ultimo afim de criar o fomulário em tela)**<br>

# Exemplos

#### Construção de formulário(padrão)

```javascript
     window.onload = () => {
            let form = new FormBuilder("form");
            form.createInput({
                "label":"Nome",
                "type":"text",
                "className":"input-text"
            })

            form.createInput({
                "label":"Idade",
                "type":"number",
                "className":"input-text"
            })

            form.createSelect({
                "label":"Idade",
                "className":"input-text",
                "options":[
                    {"text":"Selecione","value":""},
                    {"text":"Selecione","value":"teste"},
                ]
            })

            form.createButton({
                "type":"submit",
                "value":"Enviar Form",
                "events":[
                    {
                        "click": function(){
                            alert("Evento registrado ");
                        }
                    }
                ]
            })
            
            form.createForm({})
        }
  
```

#### Construção de formulário(Fluent)

```javascript
     window.onload = () => {
            let form = new FormBuilder("form");
            form.createInput({
                "label":"Nome",
                "type":"text",
                "className":"input-text"
            })
            .createInput({
                "label":"Idade",
                "type":"number",
                "className":"input-text"
            })
            .createSelect({
                "label":"Idade",
                "className":"input-text",
                "options":[
                    {"text":"Selecione","value":""},
                    {"text":"Selecione","value":"teste"},
                ]
            })
            .createButton({
                "type":"submit",
                "value":"Enviar Form",
                "events":[
                    {
                        "click": function(){
                            alert("Evento registrado ");
                        }
                    }
                ]
            })
            .createForm({
                "method":"POST",
                "action":"/"
            })
        }
  
```
Todas as propriedades são padrões da Api Javascript seguindo o seu equivalente html <br>
EX: em html para atribuir uma class nos usamos **class=""** como javascript é setado o atributo **className**<br>

Para um maior detalhamento sobre o assunto consulte:
https://developer.mozilla.org/pt-BR/docs/Web/API/Document/createElement

#### propriedades especiais

Algumas propriedades não fazem parte da API do javascript para podem ser Utilizadas até o momento são elas:

label - Indica o nome renderizado acima do elemento (funciona somente nos metodos **createInput() e createSelect()**)<br>
events - Propriedade que suporte um array que irá indicar quais eventos o elemento irá registrar e seu callback o mesmo segue as especificações de nomes para eventos do Javascript.

#### Eventos nos elementos do formulário

Para registrar eventos nos elemetos do formulário usa-se a propriedade **events:[]** que é suportado por todos os metodos do FormBuilder seguindo as especificações do Javascript. Segue um exemplo abaixo de como registrar um evento;

```javascript
    
    //...
    .createButton({
                "type":"submit",
                "value":"Enviar Form",
                "events":[
                    {
                        "click": function(){
                            alert("Evento registrado ");
                        }
                    }
                ]
            })
    
    
```
dentro de events use o padrão json onde a propriedade corresponde ao nome do evento conforme a api do Javascript e como valor passe como referencia uma function para executa a ação desejada.




