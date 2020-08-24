const units = [
'sıfır'
,'bir'
,'iki'
,'üç'
,'dört'
,'beş'
,'altı'
,'yedi'
,'sekiz'
,'dokuz'
];

const tens = [
    'on',
    'yirmi',
    'otuz',
    'kırk',
    'elli',
    'altmış',
    'yetmiş',
    'seksen',
    'doksan'
];

const getTurkishNumber = (num) => {
    if (num < 10) {
        return units[num]
    } else  {
        if (num % 10 === 0) {
            return tens[Math.floor(num / 10) -1]
        } else {
            let firstDigit = Math.floor(num / 10) -1;
            let lastDigit = num % 10;
            const result = tens[firstDigit] + ' ' + units[lastDigit]
            return result
        }

    }
}