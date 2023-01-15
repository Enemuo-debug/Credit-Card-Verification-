// Regex for Master Card and Visa cards
// From online discovery, It is noticed that Master Cards Start with the digit 5 followed by 15 other digits
// while Visa cards start with the digit 4 and is followed by 15 other digits
// But both cards have a 16 digit card number
//Hence with this info we pattern match
const MasterCardVerification = /^5[1-5]\d{14}$/
const VisaCardVerification = /^4\d{15}$/
// Verifyer function
function CreditCardVerificator(params) {
    if (MasterCardVerification.test(params)) {
        console.log('This is a MASTER CARD')
    }
    else if (VisaCardVerification.test(params)) {
        console.log('This is a VISA CARD')
    }
    else {
        console.log('This is not a valid credit card')
    }
}
// The Credit card number to be pattern matched
const CardNumber = `5511111111111991`;
// Card Verification process using CreditCardVerificator function
CreditCardVerificator(CardNumber)