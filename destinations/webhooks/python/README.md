# Python (Flask) Example Webhook Destination

## What does it do?

This is a tiny sample application built with Python and Flask to show you how you can easily receive Webhooks from the Texture platform.

We do a few things in this example:

1. We use the [Flask](https://flask.palletsprojects.com/) framework to create a simple web server.
2. We create a route that listens for POST requests to `/webhook` and logs the request body to the console.
3. This route not only listens for and logs the request, but also performs validation on the request body to ensure that it is a valid Texture Webhook request.

For more details on Webhook Destinations, see the [Webhooks documentation](https://docs.texturehq.com/docs/streams/destinations/webhooks).

## Getting Started

In order to run this, first copy the `.env.example` file to `.env` and fill in the values with your own.

```bash
cp .env.example .env
```

Then, run the following commands:

```bash
pip install -r requirements.txt
python server.py
```

Next you can use a tool like [ngrok](https://ngrok.com/) to expose your local server to the internet. You can then use the ngrok URL as your Webhook Destination URL in the Texture Dashboard.

For this example app, pretend that your ngrok URL is `https://my-ngrok-url.ngrok.io`. You would then set your Webhook Destination URL to `https://my-ngrok-url.ngrok.io/webhook`.

If you want to ensure that your Webhook Destination is secure, you can set the `WEBHOOK_SECRET` environment variable in your `.env` file and then add that same secret to the Destination in the Texture Dashboard with the same value.

As you create and test Webhooks, you should see the request body logged to your console.
