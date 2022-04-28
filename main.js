import fetch from 'node-fetch';

const endpoint = 'https://api.whatdoestrumpthink.com/api/v1/quotes/random';

async function getQuote() {
    try {
        const response = await fetch(endpoint)
        // If the response is not 200 OK...
        if (!response.ok) {
            // ...throw an error. This causes control flow
            // to skip to the `catch` block below.
            throw Error(response.statusText)
        }

        const json = await response.json();
        console.log(json.message);
    } catch (err) {
        console.log(err)
        alert('Failed to fetch new quote');
    }
}

getQuote()