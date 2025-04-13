
const header=document.querySelector("header");

window.addEventListener("scroll",function() {
    header.classList.toggle("sticky", window.scrollY>60)
});
const chatIcon = document.getElementById('chat-icon');
const chatWindow = document.getElementById('chat-window');
const closeChat = document.getElementById('close-chat');
const chatMessages = document.getElementById('chat-messages');
const chatInput = document.getElementById('chat-input');

// Open chat window
chatIcon.addEventListener('click', () => {
    chatWindow.style.display = chatWindow.style.display === 'flex' ? 'none' : 'flex';
});

// Close chat window
closeChat.addEventListener('click', () => {
    chatWindow.style.display = 'none';
});

// Example of async bot response (can be replaced with a real API call)
async function botResponse(userMessage) {
    // Predefined responses
    const responses = {
        "hello": "Hi! How can I assist you today?",
        "how are you": "I'm just a bot, but thanks for asking! How can I help you?",
        "what is your name": "I'm your friendly assistant. How can I assist?",
        "goodbye": "Goodbye! Have a great day!",
        "help": "Sure! What do you need help with?",
        "thank you": "You're welcome! Anything else I can assist with?",
        
        // Tourist spots related questions
        "tell me about tourist spots": "Some must-visit tourist spots include Venice, the Grand Canyon, the Eiffel Tower, and Machu Picchu. Which one would you like to know more about?",
        "what are the best tourist spots in nepal": "Nepal offers amazing spots such as Mount Everest, Lumbini (birthplace of Buddha), and Chitwan National Park. Are you looking for an adventure, cultural experience, or relaxation?",
        "best tourist spots in italy": "Italy is home to the Colosseum, Venice's Grand Canal, and the Leaning Tower of Pisa. Interested in historical or scenic spots?",
        "tourist spots in france": "France is famous for places like the Eiffel Tower, the Louvre Museum, and the Palace of Versailles. Which one interests you?",
        
        // Trip suggestions based on preferences
        "which trip is best for adventure": "For an adventurous trip, consider trekking in Nepal's Himalayas, exploring Iceland's glaciers, or hiking the Inca Trail to Machu Picchu.",
        "which trip is best for cultural experience": "For a rich cultural experience, I'd suggest a visit to Kyoto, Japan to experience traditional temples, or to Peru for its indigenous heritage and vibrant festivals.",
        "which trip is best for relaxation": "Looking to relax? You might enjoy a beach getaway to the Maldives, a serene retreat in Bali, or a peaceful stay in the Italian countryside.",
        "which trip is best for history": "If you're into history, exploring Rome's ancient ruins, visiting Egypt's Pyramids, or touring Greece's classical landmarks could be the perfect trip for you.",
        
        // Connection with team
        "should i connect with the team": "It seems like you're looking for more information. Would you like me to connect you with a team member to clear up any doubts?",
        
        "default": "I'm sorry, I don't understand that. Can you please rephrase or ask about tourist spots, trips, or connecting with the team?"
    };

    // Normalize user message: trim, convert to lowercase
    const normalizedMessage = userMessage.trim().toLowerCase();

    // Simulating a delay to mimic an API call
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(responses[normalizedMessage] || responses["default"]);
        }, 500); // Simulating response delay
    });
}

// Handle sending and receiving messages
chatInput.addEventListener('keypress', async function (e) {
    if (e.key === 'Enter' && chatInput.value.trim() !== '') {
        const userMessage = chatInput.value.trim();
        
        // Display the user's message
        const userMessageElement = document.createElement('p');
        userMessageElement.textContent = `You: ${userMessage}`;
        chatMessages.appendChild(userMessageElement);
        chatInput.value = ''; // Clear input

        // Wait for the bot's response
        const botReply = await botResponse(userMessage); // Await the response from botResponse

        // Display bot response
        const botMessageElement = document.createElement('p');
        botMessageElement.textContent = `Bot: ${botReply}`;
        chatMessages.appendChild(botMessageElement);
        
        // Auto-scroll to the latest message
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }
});

