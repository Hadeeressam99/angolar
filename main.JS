var quotes=["You miss 100% of the shots you don't take.", "Be yourself; everyone else is already taken.", "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.",
"Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.", "So many books, so little time.", "A room without books is like a body without a soul", "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.",
"You know you're in love when you can't fall asleep because reality is finally better than your dreams.", "You only live once, but if you do it right, once is enough",
"Be the change that you wish to see in the world.", "In three words I can sum up everything I've learned about life: it goes on"]

var writer=["-Wayne Gretzy", "― Oscar Wildev", "― Marilyn Monroe ", "― Albert Einstein ", "― Frank Zappa ", "― Marcus Tullius Cicero ", "― Bernard M. Baruch ",
"― Dr. Seuss ", "― Mae West ", "― Mahatma Gandhi ", "― Robert Frost "]



function newQuote(){
    var num1= Math.floor(Math.random() * (quotes.length-1));
    document.getElementById("Quotes").innerHTML=`<p>`+quotes[num1]+`</p>`;
    document.getElementById("writer").innerHTML=`<p>`+writer[num1]+`</p>`;
}
