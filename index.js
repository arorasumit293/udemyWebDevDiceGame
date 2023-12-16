function dostuff()
{
var randomnos1 = Math.floor(Math.random() * 6) + 1;
var randomnos2 = Math.floor(Math.random() * 6) + 1;
console.log(randomnos1 + ' ' + randomnos2);

document.querySelector('.img1').setAttribute('src',`./images/dice${randomnos1}.png`);
document.querySelector('.img2').setAttribute('src',`./images/dice${randomnos2}.png`);

if(randomnos1 > randomnos2)
    document.querySelector('h1').innerHTML = "🚩Player 1 Wins!";

else if (randomnos2 > randomnos1)
    document.querySelector('h1').innerHTML = "Player 2 Wins!🚩";

else {
    document.querySelector("h1").innerHTML = "Draw!";
}
}

document.querySelector('button').onclick = dostuff;




