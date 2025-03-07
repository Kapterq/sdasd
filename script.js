let question = document.querySelector('.question')
let answers = document.querySelectorAll('.answer')
let result = document.querySelector('.result')
let all = document.querySelector('.all')
let button = document.querySelector('.button')
let timer = document.querySelector('.timer')
let a = randint(1,30)
let b = randint(1,30)
let c = ["+", "-", "*", "/"]

function getRandomSign() {
    return c[randint(0, c.length - 1)];
}


class Question {
    constructor() {
        this.a = randint(1, 30);
        this.b = randint(1, 30);
        this.sign = getRandomSign();
        
        if (this.sign === '+') {
            this.correct = this.a + this.b;
        } else if (this.sign === '-') {
            this.correct = this.a - this.b;
        } else if (this.sign === '*') {
            this.correct = this.a * this.b;
        } else if (this.sign === '/') {
            this.correct = Math.round(this.a / this.b);
        }

        this.question = `${this.a} ${this.sign} ${this.b}`;
        
        this.answers = [
            this.correct,
            randint(this.correct - 10, this.correct + 10),
            randint(this.correct - 10, this.correct + 10),
            randint(this.correct - 10, this.correct + 10),
            randint(this.correct - 10, this.correct + 10)
        ];

        this.answers = this.answers.sort(() => Math.random() - 0.5);
    }

    display() {
        question.innerHTML = this.question;
        for (let i = 0; i < answers.length; i++) {
            answers[i].innerHTML = this.answers[i];
        }
    }
}


let counter = 0
let correct_counter = 0
let current_question = new Question 

current_question.display()

for (let i = 0; i < answers.length; i++) {
    answers[i].addEventListener("click", () => {
        if (answers[i].innerHTML == current_question.correct) {
        answers[i].style.background = '#00FF00'            
                anime({
                targets: answers[i],
                background: '#3498db',
                duration: 500,
                delay: 100,
                easing: 'linear'
            })
            correct_counter++
        } else {
           answers[i].style.background = '#ff0000'            
                anime({
                targets: answers[i],
                background: '#3498db',
                duration: 500,
                delay: 100,
                easing: 'linear'
            })
        }

        counter++;
       
            current_question = new Question;
            current_question.display();
    
    });
}

function randint(min, max) {
    return Math.round(Math.random() * (max - min) + min)
}

button.addEventListener('click', function(){
    timer.style.display = "flex"
setTimeout(function(){timer.innerHTML = '10'}, 1000)
setTimeout(function(){timer.innerHTML = '9'}, 1000)
setTimeout(function(){timer.innerHTML = '8'}, 2000)
setTimeout(function(){timer.innerHTML = '7'}, 3000)
setTimeout(function(){timer.innerHTML = '6'}, 4000)
setTimeout(function(){timer.innerHTML = '5'}, 5000)
setTimeout(function(){timer.innerHTML = '4'}, 6000)
setTimeout(function(){timer.innerHTML = '3'}, 7000)
setTimeout(function(){timer.innerHTML = '2'}, 8000)
setTimeout(function(){timer.innerHTML = '1'}, 9000)
setTimeout(function(){timer.style.display = 'none'}, 10000)
setTimeout(function(){timer.innerHTML = '10'}, 10000)
    counter = 0
    correct_counter = 0
    all.style.display = "flex"
    button.style.display = "none"
    result.style.display = "none"
setTimeout(function(){
    button.style.display = "flex"
    all.style.display = "none"
    result.style.display = "flex"
    let j = Math.round(correct_counter * 100 / counter)
    result.innerHTML = `Ви дали ${correct_counter} правильних відповідей із ${counter} Точність - ${j}%`
},10000)
})