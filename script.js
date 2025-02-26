// Get the elements from the HTML file
const quote_button = document.getElementById('quote-btn');
const quote_block = document.getElementById('quote');

// Add an event listener to the button
quote_button.addEventListener('click', async () => {
    try {
        // API endpoint for Ron Swanson Quotes found on the website provided in the assignment
        const response = await fetch('https://ron-swanson-quotes.herokuapp.com/v2/quotes');

        // Check if the response is ok to continue
        if (!response.ok) {
            throw new Error('Network response has error occurred while fetching the quote');
        }

        // Get the quote from the response and update the blockquote
        quote_block.textContent = (await response.json())[0];
    } catch (error) {
        console.error('Error:', error);
        quote_block.textContent = 'Failed to load quote. Please try again later.';
    }
});