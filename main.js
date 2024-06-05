window.addEventListener('DOMContentLoaded', init);

function init() {
    let form = document.querySelector('form');
    form.addEventListener('submit', e => {
      e.preventDefault();
      let output = document.querySelector('output');
      let firstNum = document.querySelector('#first-num').value;
      let secondNum = document.querySelector('#second-num').value;
      let operator = document.querySelector('#operator').value;
      output.innerHTML = eval(`${firstNum} ${operator} ${secondNum}`);
    });

    let errorBtns = Array.from(document.querySelectorAll('#error-btns > button'));

    let table = [{fruit: 'apple', color: 'red'}, {fruit: 'grape', color: 'purple'}, {fruit: 'orange', color: 'orange'}];

    // Start your code here
    // You may move this JS to another file if you wish
    // Part 1
    document.getElementById('console_log').addEventListener('click', () => {
        console.log('Hello!');
    })

    document.getElementById('console_error').addEventListener('click', () => {
        console.error('This is an error');
    })

    document.getElementById('console_count').addEventListener('click', () => {
        console.count(['hello']);
    })

    document.getElementById('console_warn').addEventListener('click', () => {
        console.warn('warning');
    })

    document.getElementById('console_assert').addEventListener('click', () => {
        console.assert(1+1 == 3, 'The equation is not equal!');
    })

    document.getElementById('console_clear').addEventListener('click', () => {
        console.clear();
    })

    document.getElementById('console_dir').addEventListener('click', () => {
        console.dir(document.body);
    })

    document.getElementById('console_dirxml').addEventListener('click', () => {
        console.dirxml(document.body);
    })

    document.getElementById('console_group_start').addEventListener('click', () => {
        console.group('This is a lable for a group');
    })

    document.getElementById('console_group_end').addEventListener('click', () => {
        console.groupEnd('This is a lable for a group');
    })

    document.getElementById('console_table').addEventListener('click', () => {
        console.table(table);
    })

    document.getElementById('start_timer').addEventListener('click', () => {
        console.time();
    })

    document.getElementById('end_timer').addEventListener('click', () => {
        console.timeEnd();
    })

    document.getElementById('console_trace').addEventListener('click', () => {
        const first = () => { second(); };
        const second = () => { third(); };
        const third = () => { fourth(); };
        const fourth = () => { console.trace(); };
        first();
    })

    //Part 2
    try {
        console.log(document.getElementById('nope').innerHTML);

    } catch (err) {
        console.error(err);
    }

    //Part 3
    class ValidationError extends Error {
        constructor(message) {
            super(message);
            this.name = "ValidationError"
        }
    }

    function validateAge(age) {
        if (age < 18) {
            throw new ValidationError("Too Young!");
        } else if (age > 65) {
            throw new ValidationError("Too Old!");
        } else {
            return age;
        }
    }

    try {
        let ages = [20, 16, 23, 67];
        ages.forEach((age) => {
            console.log(validateAge(age));
        })
    } catch (err) {
        if (err instanceof ValidationError) {
            console.error("Invalid age: " + err.message);
        }
    }
}