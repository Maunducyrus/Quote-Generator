let btn = document.getElementById('btn');
let output = document.getElementById('output');

let quotes = [
   ' “You have to believe in yourself when no one else does.” —Serena Williams ',
    ' “When you have a dream, you have got to grab it and never let go.” —Carol Burnett ',
    '“The most important thing is to enjoy your life—to be happy—it’s all that matters.” —Steve Jobs',
    '“Spread love everywhere you go. Let no one ever come without leaving happier.” —Mother Teresa',
    '“Be yourself; everyone else is already taken.” —Oscar Wilde',
    '“The biggest adventure you can take is to live the life of your dreams.” —Oprah Winfrey',
    '“The only thing we have to fear is fear itself.” —Franklin D. Roosevelt',
    '“I can accept failure, everyone fails at something. But I can’t accept not trying.” —Michael Jordan',
    '“You’ve got to be in it to win it.” —Tony Robbins',
    '“It does not matter how slowly you go, as long as you do not stop.” —Confucius',
    '“Find out who you are and do it on purpose.” —Dolly Parton',
    '“For me, becoming isn’t about arriving somewhere or achieving a certain aim. I see it instead as forward motion, a means of evolving, a way to reach continuously toward a better self. The journey doesn’t end.” —Michelle Obama',
    '“Confident people have a way of carrying themselves that makes others attracted to them.” —Sofia Vergara',
    '“If you can do what you do best and be happy, you are further along in life than most people.” —Leonardo DiCaprio',
    '“You can be everything. You can be the infinite amount of things that people are.” —Kesha',
    '“Always go with your passions. Never ask yourself if it’s realistic or not.” —Deepak Chopra',
    '“When you change your thoughts, remember to also change your world.” —Norman Vincent Peale',
    '“The more you know who you are, and what you want, the less you let things upset you.” —Stephanie Perkins',
    '“By being yourself, you put something wonderful in the world that was not there before.” —Edwin Elliot',
    '“Do one thing every day that scares you.” —Eleanor Roosevelt',
    '“It is never too late to be what you might have been.” —George Elliot',
    '“Find out who you are and be that person. That’s what your soul was put on this earth to be. Find the truth, live that truth, and everything else will come.” —Ellen DeGeneres',
    '“When we are no longer able to change a situation, we are challenged to change ourselves.” —Viktor E. Frankl',
    '“If you cannot do great things, do small things in a great way.” —Napoleon Hill',
    '“Always do your best. What you plant now, you will harvest later.” —Og Mandino',
];
btn.addEventListener('click', function(){
    var randomQuote = quotes[Math.floor(Math.random() * quotes.length)]
    output.innerHTML = randomQuote;
})