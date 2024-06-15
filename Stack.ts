class Stack<T> {
  //Define una clase generica Stack que puede almacenar elementos de
  //cualquier tipo (t)
  private items: T[] = []; //Declara una propiedad privada (items) de tipo T que se inicializa con un array vacio

  // Verificar si la pila está vacía
  isEmpty(): boolean {
    //devuelve un valor booleano
    return this.items.length === 0;
  }

  // Añadir un elemento al tope de la pila
  //recibe un parametro de tipo t y no devuelve nada
  push(item: T): void {
    this.items.push(item);
  }

  // Eliminar y devolver el elemento en el tope de la pila
  pop(): T | undefined {
    if (this.isEmpty()) {
      throw new Error("Pop from an empty stack");
    }
    return this.items.pop();
  }

  // Devolver el elemento en el tope de la pila sin eliminarlo
  peek(): T | undefined {
    if (this.isEmpty()) {
      throw new Error("Peek from an empty stack");
    }
    return this.items[this.items.length - 1];
  }

  // Devolver el número de elementos en la pila
  size(): number {
    return this.items.length;
  }
}

// Ejemplo de uso
const stack1 = new Stack<number>();
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
