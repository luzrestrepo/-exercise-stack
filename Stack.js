var Stack = /** @class */ (function () {
  function Stack() {
    this.items = [];
  }
  // Verificar si la pila está vacía
  Stack.prototype.isEmpty = function () {
    return this.items.length === 0;
  };
  // Añadir un elemento al tope de la pila
  Stack.prototype.push = function (item) {
    this.items.push(item);
  };
  // Eliminar y devolver el elemento en el tope de la pila
  Stack.prototype.pop = function () {
    if (this.isEmpty()) {
      throw new Error("Pop from an empty stack");
    }
    return this.items.pop();
  };
  // Devolver el elemento en el tope de la pila sin eliminarlo
  Stack.prototype.peek = function () {
    if (this.isEmpty()) {
      throw new Error("Peek from an empty stack");
    }
    return this.items[this.items.length - 1];
  };
  // Devolver el número de elementos en la pila
  Stack.prototype.size = function () {
    return this.items.length;
  };
  return Stack;
})();
// Ejemplo de uso
var stack = new Stack();
stack1.push(1);
stack1.push(2);
stack1.push(3);
console.log("Tamaño de la pila:", stack1.size()); // Output: 3
console.log("Elemento en el tope:", stack1.peek()); // Output: 3
console.log("Elemento sacado de la pila:", stack1.pop()); // Output: 3
console.log("Elemento sacado de la pila:", stack1.pop()); // Output: 2
console.log("Tamaño de la pila:", stack1.size()); // Output: 1
console.log("La pila está vacía:", stack1.isEmpty()); // Output: False
console.log("Elemento sacado de la pila:", stack1.pop()); // Output: 1
console.log("La pila está vacía:", stack1.isEmpty()); // Output: True
