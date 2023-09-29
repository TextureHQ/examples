const crypto = require('crypto');

const computeHMAC = (payload, secret) => {  
  const hmac = crypto.createHmac('sha256', secret);  
  hmac.update(JSON.stringify(payload));  
  return hmac.digest('hex');  
};

// This is a constant-time comparison function to prevent timing attacks
const constantTimeCompare = (a, b) => {
  if (a.length !== b.length) return false;
  
  let result = 0;
  for (let i = 0; i < a.length; i++) {
    result |= a.charCodeAt(i) ^ b.charCodeAt(i);
  }
  return result === 0;
}

exports.verify = (payload, secret, signature) => {
    const expected = computeHMAC(payload, secret);
    return constantTimeCompare(signature, expected);
}