export const HTMLCode = `<!DOCTYPE html>
<html lang="en">

<head>
  <title>Jade</title>
  <script type="text/javascript">
    const foo = true;
    let bar = function() {};
    if (foo) {
      bar(1 + 5)
    }
  </script>
</head>

<body>
  <h1>Jade - node template engine</h1>
  <div class="col" id="container">
    <p>You are amazing</p>
    <p>
      Jade is a terse and simple
      templating language with a
      strong focus on performance
      and powerful features.
    </p>
  </div>
</body>

</html>`

export const JADECode = `doctype html
html(lang='en')
  head
    title Jade
    script(type='text/javascript').
      const foo = true;
      let bar = function() {};
      if (foo) {
      bar(1 + 5)
      }
  body
    h1 Jade - node template engine
    #container.col
      p You are amazing
      p
        | Jade is a terse and simple
        | templating language with a
        | strong focus on performance
        | and powerful features.
`
