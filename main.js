const button = document.createElement('button') 
const main = document.createElement('main')
document.body.prepend(main)
document.body.prepend(button)
button.append('Remove')
let imgElement = document.createElement('img')
imgElement.src = 'https://www.cat-breeds-encyclopedia.com/image-files/xtortoiseshell-kitten.jpg.pagespeed.ic.0ICFzJUYJW.jpg'
main.append(imgElement)

let anchorElement = document.createElement('a')
anchorElement.href = 'https://www.cat-breeds-encyclopedia.com/image-files/xtortoiseshell-kitten.jpg.pagespeed.ic.0ICFzJUYJW.jpg'
anchorElement.append('THE TORTOISESHELL CAT')
main.append(anchorElement)
button.addEventListener('click', function () {
main.remove()
})