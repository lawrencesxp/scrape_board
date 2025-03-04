// Fetch the JSON data
fetch('data.json')
    .then(response => response.json())
    .then(data => {
        const container = document.getElementById('data');

        // Create a table
        const table = document.createElement('table');

        // Create table headers
        const thead = document.createElement('thead');
        const headerRow = document.createElement('tr');
        for (const key in data[0]) {
            const th = document.createElement('th');
            th.textContent = key;
            headerRow.appendChild(th);
        }
        thead.appendChild(headerRow);
        table.appendChild(thead);

        // Create table body
        const tbody = document.createElement('tbody');
        data.forEach(row => {
            const tr = document.createElement('tr');
            for (const key in row) {
                const td = document.createElement('td');
                td.textContent = row[key];
                tr.appendChild(td);
            }
            tbody.appendChild(tr);
        });
        table.appendChild(tbody);

        // Add the table to the page
        container.appendChild(table);
    })
    .catch(error => {
        console.error('Error fetching or displaying data:', error);
    });