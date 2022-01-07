fetch('https://9c8lmh1yo8.execute-api.us-west-1.amazonaws.com/dev')
    .then(response => {
        console.log(response);
        return response.text();
    })
    .then(text => {
        console.log(text);
        document.getElementById('visits').innerText = text;
    });

    fetch('https://9c8lmh1yo8.execute-api.us-west-1.amazonaws.com/dev/update', { method: 'POST'})
        .then(results => results.json())
        .then(console.log);