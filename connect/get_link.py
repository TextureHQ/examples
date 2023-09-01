import requests

# URL to POST to
url = "https://api.texture.energy/v1/connections"

# The header to include with the request
headers = {"x-api-key": "<your-api-key-goes-here>", "Content-Type": "application/json"}

# JSON body data
data = {
    "referenceId": "9bb290c8-fe97-46ce-92a8-952823164277",  # A unique ID in your system for this connection
    "redirectUrl": "http://localhost:8910",  # The URL to redirect to after the user has connected
    "groupId": "cllh2buhk000008la0ln6cb80",  # The ID of the group to connect to
    "clientName": "Energy Demo",  # The name of your application
    "email": "person@gmail.com",  # The email address of the user to connect
}

# Make the POST request
response = requests.post(url, headers=headers, json=data)

# Check the response
if response.status_code == 200:
    print("Successfully sent POST request.")
    print("Response:", response.json())
else:
    print(f"Failed to send POST request. Status code: {response.status_code}")
    print("Response:", response.text)