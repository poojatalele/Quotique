const quoteText = document.querySelector('.quote');
authorName = document.querySelector('.author .name');
quoteBtn = document.querySelector('button');
soundBtn = document.querySelector('.sound');
copyBtn = document.querySelector('.copy');
twitterBtn = document.querySelector('.twitter');

function getQuote() {
    quoteBtn.classList.add('loading');
    // quoteBtn.innerHTML = 'Loading...';
    quoteBtn.innerText = "Loading....";
    fetch('https://api.quotable.io/random')
    //  fetch('https://type.fit/api/quotes')
        .then(res => res.json())
        .then(data => {
            quoteText.innerText = data.content;
            authorName.innerText = data.author;
            quoteBtn.innerText =  "New Quote";
            quoteBtn.classList.remove('loading');
        // Randomly select a quote from the array
    //     const randomIndex = Math.floor(Math.random() * data.length);
    //     const randomQuote = data[randomIndex];
        
    //     // Update the quote text and author
    //     quoteText.innerHTML = randomQuote.text;
    //     authorName.innerHTML = randomQuote.author;
        
    //     // Reset the button and remove loading class
    //     quoteBtn.innerHTML = 'New Quote';
    //     quoteBtn.classList.remove('loading');
        
    //     console.log(randomQuote);
    // })
    // .catch(error => {
    //     console.error('Error fetching quotes:', error);
    });

}
quoteBtn.addEventListener('click', getQuote);

soundBtn.addEventListener('click', () => {
    let utter = new SpeechSynthesisUtterance(`${quoteText.innerText} by ${authorName.innerText}`);
    speechSynthesis.speak(utter);
});

copyBtn.addEventListener('click', () => {
    navigator.clipboard.writeText(quoteText.innerText);
});

twitterBtn.addEventListener('click', () => {
    let twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.innerText} - ${authorName.innerText}`;
    window.open(twitterUrl);
});
