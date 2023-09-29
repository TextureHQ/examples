from flask import Flask, request
from dotenv import load_dotenv
import hashlib
import hmac
import json
import os

load_dotenv()

PORT = os.getenv("PORT")
WEBHOOK_SECRET = os.getenv("WEBHOOK_SECRET")

app = Flask(__name__)


# This helper function computes the HMAC of the payload using the secret key
def compute_hmac(payload, secret):
    hmac_obj = hmac.new(secret.encode(), digestmod=hashlib.sha256)
    hmac_obj.update(json.dumps(payload, separators=(",", ":")).encode())
    return hmac_obj.hexdigest()


# We want to verify that the payload we received was sent by Texture
# To do this, we compute a HMAC of the payload using our secret key
# and compare it to the signature sent in the request
def verify(payload, secret, signature):
    expected = compute_hmac(payload, secret)
    return hmac.compare_digest(signature, expected)


@app.route("/webhook", methods=["POST"])
def webhook():
    print("\n\nBody: ", json.dumps(request.get_json(), indent=2))
    print("\n\nHeaders: ", json.dumps(dict(request.headers), indent=2))
    texture_signature = request.headers.get("Texture-Signature")
    print(
        "\n\nPayload Verified: ",
        verify(request.get_json(), WEBHOOK_SECRET, texture_signature),
    )
    return "Hello, World!"


if __name__ == "__main__":
    app.run(port=int(os.getenv("PORT", 8000)))
