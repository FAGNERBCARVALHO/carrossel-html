let btnNext = document.querySelector('.next')
let btnBack = document.querySelector('.back')

let container = document.querySelector('.container')
let list = document.querySelector('.container .list')
let thumb = document.querySelector('.container .thumb')

btnNext.onclick = () => moveItemsOnClick('next')
btnBack.onclick = () => moveItemsOnClick('back')



function moveItemsOnClick(type) {

    let listItems = document.querySelectorAll('.list .list-item')
    let thumbItems = document.querySelectorAll('.thumb .thumb-item')

   /* console.log(listItems)
    console.log(thumbItems)
    */


    if (type === 'next') {
        list.appendChild(listItems[0])
        thumb.appendChild(thumbItems[0])
        container.classList.add('next')


    }

    else {
        list.prepend(listItems[listItems.length - 1])
        thumb.prepend(thumbItems[listItems.length - 1])
        container.classList.add('back')


    }

    setTimeout(() => {
        container.classList.remove('next')
        container.classList.remove('back')
    }, 3000);









}
/*
const thumbs = document.querySelectorAll('.thumb-item');
        let currentThumbIndex = 0;

        function showCurrentThumb() {
            thumbs.forEach((thumb, index) => {
                if (index === currentThumbIndex) {
                    thumb.style.display = 'block';
                } else {
                    thumb.style.display = 'none';
                }
            });
        }

        function previousThumb() {
            currentThumbIndex--;
            if (currentThumbIndex < 0) {
                currentThumbIndex = thumbs.length - 1;
            }
            showCurrentThumb();
        }

        function nextThumb() {
            currentThumbIndex++;
            if (currentThumbIndex >= thumbs.length) {
                currentThumbIndex = 0;
            }
            showCurrentThumb();
        }

        showCurrentThumb();*/
