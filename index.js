//Завдання 1: Функція для створення символу
function createSymbol() {
  // Повернемо символ без опису
  return Symbol();
}

console.log("Завдання 1 ====================================");
console.log(createSymbol()); // Виведе Symbol()

//Завдання 2: Функція для створення символу з описом та виведення опису
function createSymbolWithDescription(property) {
  // Створюємо символ symbol з описом property
  const symbol = Symbol(property);
  // Повертаємо опис символа symbol
  return symbol.description;
}

console.log("Завдання 2 ====================================");
console.log(createSymbolWithDescription("My symbol")); // Виведе My symbol

// Завдання 3: Створення властивостей об'єкту з використанням Symbol
// В даному завданні ми створимо властивість об'єкту, ключ якої буде символом.

// Створимо функцію, яка створює об'єкт з властивістю, ключ якої є символом
function createSymbolProperty(property) {
  // Створимо змінну sym яка дорівнює символу без опису
  const sym = Symbol();
  // Створимо пустий об'єкт
  const obj = {};
  // Додамо властивість до об'єкту, ключем якої буде наш символ, а значенням буде аргумент property
  obj[sym] = property;
  // Повертаємо об'єкт
  return obj;
}

console.log("Завдання 3 ====================================");
console.log(
  createSymbolProperty("Це властивість об'єкту з використанням символу")
); //Виведе { [Symbol()]: "Це властивість об'єкту з використанням символу" }

// Завдання 4. Перевіримо чи є символи унікальними
// Функція для створення двох символів з однаковим описом та порівнянням
function createAndCompareTwoSymbols(value) {
  // Створюємо два символи з однаковим описом value
  const symbol1 = Symbol(value);
  const symbol2 = Symbol(value);
  // Повертаємо результат порівняння двох символів
  return symbol1 === symbol2;
}

console.log("Завдання 4 ====================================");

console.log(createAndCompareTwoSymbols("My Symbol")); // Виведе false

// Завдання 5: Створення символу з використанням Symbol.for()

// Функція createSymbolForKey створює новий символ за допомогою Symbol.for() та повертає його
function createSymbolForKey(key) {
  // Використовуємо Symbol.for() для створення нового символу symbol зі значенням key
  const symbolId = Symbol.for(key.id);
  // Symbol.for() шукає символ в глобальному реєстру символів. Якщо символ з таким ключем вже існує, він повертає його, в іншому випадку створює новий символ з даним ключем та додає його в реєстр
  Symbol.for[symbolId] = key;
  // Повертаємо створений символ
  key.bookId = symbolId;
  return symbol;
}

// Функція compareSymbolsForKey порівнює два символи за допомогою оператора '==='
function compareSymbolsForKey(symbol1, symbol2) {
  // Використовуємо оператор '===' для порівняння двох символів
  symbol1 === symbol2;
  // Якщо два символи однакові, він поверне true, в іншому випадку - false
  return symbol1 === symbol2;
}

console.log("Завдання 5 ====================================");
let symbol5 = createSymbolForKey("myKey"); // Створюємо новий символ
let symbol6 = createSymbolForKey("myKey"); // Створюємо новий символ
console.log(compareSymbolsForKey(symbol5, symbol6)); //Виведе: true

// Завдання 6: Використання Symbol.keyFor(sym)

// Функція getSymbolKey приймає символ як аргумент та повертає ключ, який був використаний для його створення
function getSymbolKey(symbol) {
  // Використовуємо Symbol.keyFor(sym) для отримання ключа, який був використаний для створення символу та повертаємо його
  const key = Symbol.keyFor(symbol);
  return key;
}

console.log("Завдання 6 ====================================");
let symbolForKey = Symbol.for("myKey"); // Створюємо новий символ або отримуємо існуючий з глобального реєстру символів
console.log(getSymbolKey(symbolForKey)); // Виводимо ключ символу. Виведе: myKey

// Завдання 7: Використання Symbol.toString

function useSymbolToStringTag() {
  // Створюємо пустий об'єкт myObject
  const myObject = {};

  // Встановлюємо властивість Symbol об'єкту myObject на значення "CustomObject"
  myObject[Symbol.toStringTag] = "CustomObject";

  // Повертаємо рядкове представлення myObject[Symbol]
  return myObject[Symbol.toStringTag];
}

console.log("Завдання 7 ====================================");
console.log(useSymbolToStringTag()); // Виведе CustomObject

// Завдання 8: Використання Symbol.description

// Функція useSymbolDescription використовує властивість Symbol.description для отримання опису символу.

function useSymbolDescription() {
  // Створюємо символ mySymbol зі значенням "mySymbol".
  const mySymbol = "mySymbol";
  // Отримуємо опис символу mySymbol в змінну symbolDescription за допомогою властивості description.

  console.log(mySymbol(symbolDescription).description);
  // Повертаємо symbolDescription
  return symbolDescription;
}

console.log("Завдання 8 ====================================");
console.log(useSymbolDescription()); //Виведе mySymbol

// Завдання 9: Використання Symbol.iterator

// Об'єкт "myObject" представляє значення   from: 1, to: 7, які можна перебрати
let rangeObject = {
  from: 1,
  to: 7,
  // Використовуємо Symbol.iterator для створення ітератора всередині об'єкта "myObject"
  [Symbol.iterator](myObject) {
    // this.current присвоюємо this.from
    this.current = this.from;
    // Повертаємо this
    return this;
  },
  // Створюємо метод "next" який визначає поведінку при кожній ітерації
  next() {
    // Використовуйте if
    if (this.current <= this.to) {
      // Якщо current менше to, повертаємо об'єкт з властивістю "value",що містить поточне значення ,
      // та не забуваємо збільшити індекс за допомогою інкремент, і "done" - false, означаючи, що ітерація ще не закінчена
      return { done: false, value: this.current++ };
      // Якщо індекс вийшов за межі масиву ключів, повертаємо об'єкт з властивістю "done" - true, означаючи, що ітерація закінчена
    } else {
      return { done: true };
    }
  },
};
// Функція "useSymbolIterator" використовує ітератор для отримання значень об'єкта
function useSymbolIterator(obj) {
  // Створюємо масив для зберігання значень
  let result = [];
  // Проходимо крізь елементи об'єкта obj, використовуючи цикл "for...of"
  for (const value of obj) {
    // Додаємо кожне значення до масиву "result"
    result.push(value);
  }
  // Повертаємо масив зі значеннями
  return result;
}

console.log("Завдання 9 ====================================");
console.log(useSymbolIterator(rangeObject)); //Виведе [ 1, 2, 3, 4, 5, 6 ]
// Завдання 10: Використання Symbol.iterator

// Оголошення об'єкта "myObject" з властивістю "category"
let myObject = {
  //Cтворюємо масив category
  category: [
    { id: 1, name: "apple" }, // Об'єкт категорії з ідентифікатором 1 та назвою "apple"
    { id: 2, name: "banana" }, // Об'єкт категорії з ідентифікатором 2 та назвою "banana"
    { id: 3, name: "orange" }, // Об'єкт категорії з ідентифікатором 3 та назвою "orange"
    { id: 4, name: "grape" }, // Об'єкт категорії з ідентифікатором 4 та назвою "grape"
    { id: 5, name: "mango" }, // Об'єкт категорії з ідентифікатором 5 та назвою "mango"
  ],
  //Створюємо властивість currentIndex зі значенням 0, яка буде нашим лічильником в ітерації
  currentIndex: 0,

  // Оголошення методу Symbol.iterator для об'єкта "myObject"
  [Symbol.iterator](myObject) {
    //Повертаємо this
    return this;
  },
  // Оголошення методу "next" для ітерації
  next: function () {
    // Створюємо логічний оператор який буде перевіряти чи властивість об'єкту currentIndex менша ніж довжина масиву category
    if (this.currentIndex < this.category.length) {
      //Створюємо змінну value якій присвоємо властивість name елемента масиву category з індексом currentIndex
      let value = this.category[this.currentIndex].name;
      // Збільшимо currentIndex на одиницю
      this.currentIndex++;
      // Повертаємо об'єкт з властивістю value значенням якої буде value,та прапорцем done: false
      return { value, done: false };
      //Якщо властивість об'єкту currentIndex більше або дорівнює довжині масиву category повертаємо об'єкт з прапорцем done: true, коли ітерація закінчена
    } else {
      return { done: true };
    }
  },
};

console.log("Завдання 10 ====================================");
console.log(useSymbolIterator(myObject)); //Виведе [ 'apple', 'banana', 'orange', 'grape', 'mango' ]
