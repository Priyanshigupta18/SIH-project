const textarea = document.querySelector('.chatbox-message-input')
const chatboxForm = document.querySelector('.chatbox-message-form')

textarea.addEventListener('input', function () {
	let line = textarea.value.split('\n').length

	if(textarea.rows < 6 || line < 6) {
		textarea.rows = line
	}

	if(textarea.rows > 1) {
		chatboxForm.style.alignItems = 'flex-end'
	} else {
		chatboxForm.style.alignItems = 'center'
	}
})


// TOGGLE CHATBOX
const chatboxToggle = document.querySelector('.chatbox-toggle')
const chatboxMessage = document.querySelector('.chatbox-message-wrapper')

chatboxToggle.addEventListener('click', function () {
	chatboxMessage.classList.toggle('show')
})

// CHATBOX MESSAGE
const chatboxMessageWrapper = document.querySelector('.chatbox-message-content')
const chatboxNoMessage = document.querySelector('.chatbox-message-no-message')

chatboxForm.addEventListener('submit', function (e) {
	e.preventDefault()
    
    if(isValid(textarea.value)){
		writeMessage()
		setTimeout(autoReply, 1000)
    }
})
   

function addZero(num) {
	return num < 10 ? '0'+num : num
}
function writeMessage(){
    const today = new Date()
	let message = `
		<div class="chatbox-message-item sent">
			<span class="chatbox-message-item-text">
				${textarea.value.trim().replace(/\n/g, '<br>\n')}
			</span>
			<span class="chatbox-message-item-time">${addZero(today.getHours())}:${addZero(today.getMinutes())}</span>
		</div>
	`   
    chatboxMessageWrapper.insertAdjacentHTML('beforeend', message)
    chatboxForm.style.alignItems = 'center'
	textarea.rows = 1
	textarea.focus()
	textarea.value = ''
    chatboxNoMessage.style.display = 'none'
	scrollBottom()
}


function autoReply() {
	const today = new Date()
	let message = `
		<div class="chatbox-message-item received">
			<span class="chatbox-message-item-text">
			
			<div>
			Please type the number of your selected problem:-

			</div>
			</br>
			</br>
		<div>1.Case Registration:</div>
		</br>
			i.Welcome! How can I assist you today? Are you looking to register a new case or inquire about an existing one?			
			</br>
			</br>
		<div>2.New Case Registration:</div></br>
            i.To get started with registering a new case, could you please provide the case type?</br>
            ii.What are the names of the parties involved in this case?</br>
            iii.Do you have any key dates or deadlines associated with this case?</br>
            iv.Could you briefly describe the nature of the case or provide any additional details?

			</br>
			</br>
        <div>3.Case Inquiry:</div></br>
		    i.To assist you with an existing case, could you please provide the case number or any relevant information about the case?

			</br>
			</br>
        <div>4.Search for Cases:</div></br>
            i.Would you like to search for cases by case number, case type, parties involved, or another criteria?</br>
			ii.Please specify the search criteria you'd like to use.

			</br>
			</br>
        <div>5.Hearing Schedule:</div></br>
            i.Are you interested in scheduling a new hearing or checking the details of an existing one?</br>
            ii.To schedule a hearing, please provide the date and time you prefer.

			</br>
			</br>
        <div>6.Legal Research:</div></br>
            i.Do you need information about specific legal statutes or laws related to your case?</br>
            ii.Please specify the legal topic or question you have in mind.

			</br>
			</br>
        <div>7.Document Management:</div></br>
            i.Are you looking to upload or retrieve case-related documents?</br>
            ii.Please provide the document's title or a brief description.

			</br>
			</br>
        <div>8.Notifications and Reminders:</div></br>
            i.Would you like to receive reminders for upcoming hearings and important case updates?
            ii.How would you prefer to receive these notifications? (e.g., email, SMS, in-app notifications)

			</br>
			</br>
        <div>9.Chatbot Assistance:</div></br>
            i.Is there anything else you would like to know or any specific assistance you require today?</br>
            ii.Feel free to ask any questions you have related to your case or the legal process.

			</br>
			</br>
        <div>10.Feedback and Improvements:</div>
		</br>
            i. We're continuously working to improve our services. Do you have any feedback or suggestions for us?

			</br>
			</br>
			</span>
				
			</span>
			<span class="chatbox-message-item-time">${addZero(today.getHours())}:${addZero(today.getMinutes())}</span>
		</div>
	`
	chatboxMessageWrapper.insertAdjacentHTML('beforeend', message)
	scrollBottom()
}

function scrollBottom() {
	chatboxMessageWrapper.scrollTo(0, chatboxMessageWrapper.scrollHeight)
}
function isValid(value) {
	let text = value.replace(/\n/g, '')
	text = text.replace(/\s/g, '')

	return text.length > 0
}