function Say () {
  Say.prototype.init(arguments)
}

Say.prototype = {
  init: function () {
    console.log(...Array.prototype.splice.call(arguments)
  )
  }
}
export default Say;
