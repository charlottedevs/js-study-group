// fetch intakes a URL
fetch('https://jsonplaceholder.typicode.com/todos/1')
    // return the json body from response
    .then(response => response.json())
    // do something with our data
    .then(data => {
        console.log('here', data);

        // find an element on the page and replace inner html with response data
        const p = document.getElementById('fetch-here');
        p.innerHTML = data.title;
    })