const crypto = require("crypto");

class Signer {
  static _instance;
  privateKey;

  constructor(rawPrivateKey) {
    if (Signer._instance) return Signer._instance;
    this.privateKey = crypto.createPrivateKey({
      key: rawPrivateKey,
      format: "pem",
    });
    Signer._instance = this;
  }

  sign(policy) {
    const policyString = JSON.stringify(policy);
    const policyBase64 = Buffer.from(policyString).toString("base64");
    const signer = crypto.createSign("SHA256");

    signer.update(policyBase64);

    const signature = signer.sign(this.privateKey, "base64");

    return {policy: policyBase64, signature};
  }
}