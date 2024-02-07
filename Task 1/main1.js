// Task 1

/*
შექმენი <button> და <div> ელემენტები და
მიანიჭეთ საკუთარი უნიკალური id
<div> - ში ჩაწერე პატარა random ტექსტი
ღილაკზე დაჭერის შემთხვევაში დამალე
<div> ელემენტი
*/

let button = document.createElement('button');
button.textContent = 'Hide Div';

let div = document.createElement('div');
div.textContent = "Click On Button And I'll Disappear";
div.style.marginBottom = '20px'; 


document.body.appendChild(button);
document.body.appendChild(div);


button.addEventListener('click', function() {
  div.style.display = 'none';
});
