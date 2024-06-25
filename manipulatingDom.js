<!DOCTYPE html>
<html>
<head>
  <title>Exemplo de script aprimorado</title>
</head>
<body id="the-body">
  <h1>Deixe uma avaliação</h1>
  <textarea rows="3" cols="15"></textarea>
  <script>
    // Armazena o elemento body em uma variável constante
    const docBody = document.getElementById("the-body");

    // Armazena o elemento h1 em uma variável constante
    const h1 = document.getElementById("the-heading");

    // Exibe o conteúdo do elemento h1 no console
    console.log(h1.textContent);

    // Remove o conteúdo do elemento h1
    h1.textContent = "";

    // Exibe o elemento body no console (após remover o conteúdo do h1)
    console.log(docBody.outerHTML);
  </script>
</body>
</html>
