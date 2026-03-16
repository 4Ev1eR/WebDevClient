// 1
const a = 7;
const b = 2;

console.log("Сума:", a + b);
console.log("Різниця:", a - b);
console.log("Множення:", a * b);
console.log("Ділення:", a / b);

// 2

const firstName = "Джон";
const lastName = "Доу";
const fullName = `${firstName} ${lastName}`;
console.log(`Привіт, ${fullName}!`);

// 3

const age = 19;
if (age >= 18) {
    console.log("Доступ дозволено");
} else {
    console.log("Доступ заборонено");
}

// 4

for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// 5

function square(number) {
    return number * number;
}
console.log("Квадрат числа:", square(5));

// 6

const fruits = ["Яблуко", "Груша", "Помело"];
fruits.push("Апельсин");
console.log("Масив:", fruits);