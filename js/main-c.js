// Put code of task C here



const article = document.createElement('article')
const header = document.createElement('header')
article.appendChild(header)
const h2 = document.createElement('h2')
header.appendChild(h2)
const text = document.createTextNode('Article header')
h2.appendChild(text)


const parent=document.getElementById('para')
parent.appendChild(article)