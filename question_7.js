const dropdown = document.getElementById('selectCountry');
const message = document.getElementById('countryMessage');

dropdown.addEventListener('change', function() {
    const selectedCountry = dropdown.value;

    switch (selectedCountry) {
        case 'Japan':
            message.textContent = 'You selected Japan! It is known for its rich culture and technology.';
            break;
        case 'Brazil':
            message.textContent = 'You selected Brazil! It is famous for its vibrant culture and beautiful beaches.';
            break;
        case 'Canada':
            message.textContent = 'You selected Canada! It is known for its stunning natural landscapes and friendly people.';
            break;
        case 'Jamaica':
            message.textContent = 'You selected Jamaica! It is renowned for its reggae music and beautiful beaches.';
            break;
        default:
            message.textContent = '';
    }
});