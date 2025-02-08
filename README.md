# url-signer

The URL Signer uses SHA-256 encryption to sign JSON objects into URL strings.
The Signer class accepts a private key and generates two outputs: a base64-encoded policy string and a signature string.
These two strings can later be validated using the Verifier function.
