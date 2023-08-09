// import React from 'react'

// // const FAQs = () => {
// 	return (
// 		const searchBar = document.getElementById('search-bar');
// const faq = document.querySelector('.faq');
// let questionList = new Array;
// const faqWrapper = document.querySelector('.faq-wrapper');
// //let output = new Question;
// let question = new Array;
// //let output = [];
// const clearButton = document.getElementById('clearButton')

// //Display all questions and answers
// loadAllFaqs();

// //Function to display all questions and answers- works perfectly!
// function loadAllFaqs(){

// 		//get text from JSON file
// 		const xhr = new XMLHttpRequest();
//  	xhr.open('GET', 'FAQ-JSON.json', true);

// 	//output will contain html markup with JSON file text
// 		let output = '';

// 	//if status is successful assign global array question the id/question/answer
// 	xhr.onload = function(){
//  if (this.status === 200){
//   question = JSON.parse (this.responseText);

// 		//load output with text and markup
// 		question.forEach(question => {
// 			output += `
// 			<div class = "faq">
// 			<div class="faq-title">${question.question}</div>
// 			<div class="faq-text">${question.answer}</div>

// 			<button class="faq-toggle">
// 			<i class="fas fa-chevron-down"></i>
// 			<i class="fas fa-times"></i>
// 			</button>
// 			</div>
//    `;
// 		});
// 			//display to DOM
//    //faq.innerHTML = output;
// 	// faq.innerHTML = output
// 	 //console.log(faq.innerHtml)

// 	const faqTemp = document.createElement('faq');

// 	faq.innerHTML = output ;
// 	//faq.appendChild(FaqTemp)
// 	 checkToggle()

//  }
// }
// xhr.send();
// }

// //Function to display questions and answers dependent on parameter: either filtered or all FAQs
// function listFilteredFaqs (questionsArray){

// 	if (!faqWrapper){
// 		faqWrapper.classList.add('faq-wrapper');
// 	}

// 	//questionList.classList.add('lbl');
// 	//questionList = [];
//  let output = '';
// //load output with text and markup
// questionsArray.forEach(question => {
// 	output += `
// 			<div class="faq">
// 			<div> <h4 class="faq-title">${question.question}</h4></div>
// 			<div> <p class="faq-text">${question.answer}</p><br></div>

// 			<button class="faq-toggle">
// 			<i class="fas fa-chevron-down"></i>
// 			<i class="fas fa-times"></i>
// 			</button>
// 			</div>
// 	`;
// });
// 	//display to DOM

// 	if (!faq){
// 	 faq = faqWrapper.parentNode.appendChild(faq)
// 	}
// 	document.getElementsByClassName('faq').innerHTML = output;
// 	faq.innerHTML = output;

// 	checkToggle()

// }

// function clearList(){
// faq.innerHTML = '';
// }

// //SearchBar event listener
// searchBar.addEventListener('keyup', (e) => {
// 		e.preventDefault();
// 	document.addEventListener('keypress', function(e){
// 		if (e.keyCode === 13 || e.which === 13)
// 			e.preventDefault()
// 		return false
// 	})

// 		//get input at keyup, converting it to lowerclass and removing trailing spaces
//  	let searchString = e.target.value.trim().toLowerCase();
// 			console.log(searchString);

// 			//if Input is empty
// 			if (searchString === null || searchString.length === 0){
// 			//Clear current question/answers and post all question/answers
// 			clearList();
// 			loadAllFaqs();
// 				//ENTER KEY pressed

// 			return;
// 		}
// 		//Clear question/answers and replace with filtered question/answers
// 	else clearList();

// 		if (e.which === '13') {
// 			e.preventDefault()

// 			console.log(searchString)
// 		}
// 	const filteredQuestions = question.filter((questions) => {
// 		return (

// 				questions.buzz_words.trim().toLowerCase().includes(searchString) ||
// 				questions.question.trim().toLowerCase().includes(searchString) ||
//     questions.answer.trim().toLowerCase().includes(searchString)
//         	)
//     });
// 		//if No results will call function otherwise list the filtered list of question/answers
// 		if (filteredQuestions.length === 0){
// 			noResults();
// 		}
// 		else {
// 			listFilteredFaqs(filteredQuestions);
// 		}
// 	});
// /*
// // Display notice of no results
// function noResults(){
// 	const error = document.createElement('li');
// 	error.classList.add('error-message');
// 	error.innerHTML = 'No Results Found' ;
// 	list.appendChild(error)
// }
// */
// // Display notice of no results
// function noResults(){
// 	faq.classList.add('error-message');
// 	faq.innerHTML = 'No Results Found ....' ;

// }
// function checkToggle(){
// const faqToggles = document.querySelectorAll('.faq-toggle')
// console.log(faqToggles)
// faqToggles.forEach (faqToggle  => {
// 	faqToggle.addEventListener ('click', () =>
// faqToggle.parentNode.classList.toggle('active')
// 	)
// 	console.log(faqToggles)
// })}
// //const faqToggles = document.querySelectorAll('.faq-toggle')
// //console.log(faqToggles)
// //faqToggles.forEach (faqToggle  => {
// //	faqToggle.addEventListener ('click', () =>
// //faqToggle.parentNode.classList.toggle('active')
// //	)
// //	console.log(faqToggles)
// //})
// clearButton.addEventListener('click', (e) => {
// 	let searchstring = null;
// 	loadAllFaqs()
// })

// export default FAQs

// //Global variables
