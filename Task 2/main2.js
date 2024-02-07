// Task 2

/*
შექმენი შემდეგი სტრუქტურა JS -ის
გამოყენებით და დაამატე DOM-ში:
<div id=”card”>
<h2>Gandalf</h2>
<a href=”#”>Go to profile</a>
</div>
*/

let cardDiv = document.createElement('div');
cardDiv.setAttribute('id', 'card');

let heading = document.createElement('h2');
heading.textContent = 'Gandalf';

let link = document.createElement('a');
link.setAttribute('href', '#');
link.textContent = 'Go to profile';

cardDiv.appendChild(heading);
cardDiv.appendChild(link);

document.body.appendChild(cardDiv);
