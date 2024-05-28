const quotes=document.querySelector('#quote')
const author=document.querySelector('#author')
const button=document.querySelector('#buttons')

async function  getQuote(){
    const quote=await fetch('https://api.quotable.io/quotes/random')
    const data=await quote.json()
    console.log(quotes);
    console.log(data[0]);
    console.log("author",data[0].author);
    console.log("content",data[0].content);
    quotes.textContent = data[0].content
    author.textContent="-"+" "+data[0].author
}

button.addEventListener('click', getQuote);