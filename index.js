let input;

      while (true) {
        // умова, що в разі помилки буде повертати код
        input = prompt("enter only 5 digits:");
        if (input === null) {
          // якщо користувач натискає отмена
          alert("ok, bye");
          break;
        }
        input = input.trim(); // видаляє пробіли на початку і в кінці

        if (/^-?[1-9]\d{4}$/.test(input)) {
          //"//" обмежувачі, ^ початок, $ кінець рядка, \d [1-9] щоб не починалося з нуля, -? опціональний мінус
          //  {4} 5 рази, test.(input) перевірка шаблонної строки true/false
          alert("your number: " + input.split("").join(" ")); // split - перетворює на символи, join ставить між ними пробіли
          break; // повторює якщо неправильно
        } else {
          alert("error: you need to enter only 5 digits"); // помилка при введенні
        }
      }