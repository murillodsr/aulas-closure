function test() {
  //hoisting com o uso do var joga a função para cima do bloco
  console.log('a = ', a)
  console.log('foo = ', foo())

  var a = 1
  function foo() {
    return 2
  }
}

test() 