import requests
import json

# URL of the data source (replace with your target URL)
url = 'https://data.un.org/_Docs/SYB/CSV/SYB67_1_202411_Population,%20Surface%20Area%20and%20Density.csv'

# Fetch the CSV data
response = requests.get(url)
if response.status_code == 200:
    # Parse the CSV data (this is a simple example; you may need to adjust for your CSV format)
    csv_text = response.text
    rows = csv_text.split('\n')
    headers = rows[0].split(',')
    data = []

    for row in rows[1:]:
        if row:
            cells = row.split(',')
            data.append(dict(zip(headers, cells)))

    # Save the data as a JSON file
    with open('data.json', 'w') as f:
        json.dump(data, f, indent=2)

    print('Data scraped and saved to data.json')
else:
    print(f'Failed to fetch data. Status code: {response.status_code}')