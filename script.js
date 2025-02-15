function rentEquipment(name, price) {
    document.getElementById('equipment-name').value = name;
    document.getElementById('rental-days').value = 1;
    document.getElementById('total-price').value = '$${price}';

    document.getElementById('rental-form').classList.remove('hidden');

    document.getElementById('rental-days').oninput = function () {
        let days = this.value;
        document.getElementById('total-price').value = '$${days * price}';
    };
}

function submitForm() {
    alert('Rental confirmed!');
    closeForm();
    return false;
}


function closeForm() {
    document.getElementById('rental-form').classList.add('hidden');
} 