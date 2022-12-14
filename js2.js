// ex.1.1

// const message = "Привет, Настя!";
// console.log(message.toLowerCase().includes("привет"));

// ex.1.2

// const greetings = "Приветствую, username! Сегодня вы получили два сообщения от username.";
// console.log(greetings.toLowerCase().lastIndexOf('username'))

// ex.1.3

// const firstDiv = "<div><p>Первый заголовок</p></div>";

// if (firstDiv.includes('<p>') && firstDiv.includes('</p>')) {
//     console.log(true)
// } else {
//     console.log(false)
// }

// ex.1.4
// let road = "15 km"
// const findIndex = road.indexOf('km');
// let roadMiles = road.slice(0, findIndex).trim();
// roadMiles = parseFloat(roadMiles * 0.62).toFixed(1);
// console.log(roadMiles);

// ex.1.5

// let words = "Солнечная панель";

// words = words.includes(" ") ? console.log("В строке больше одного слова") : console.log("В строке одно слово");

// ex.1.6
// let symbols = "Первый номер";
// if (symbols.codePointAt(0) >= 48 && symbols.codePointAt(0) <= 57) {
//     console.log("Первый символ цифра")
// } else {
//     console.log("Первый символ не цифра")
// }

// ex.1.7

// const symbols = "floor";
// let num = symbols.codePointAt(0) + symbols.codePointAt(1);
// console.log(num)
// num = (num % 2 === 0) ? console.log(String.fromCodePoint(num)) : console.log("Символ обнаружить не удалось"); 