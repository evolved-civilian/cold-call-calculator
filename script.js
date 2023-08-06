document.getElementById('calculator-form').addEventListener('submit', function(e) {
    e.preventDefault();

    var income = document.getElementById('income').value;
    var commission = document.getElementById('commission').value;
    var closingRate = document.getElementById('closing-rate').value / 100;
    var daysWorked = document.getElementById('days-worked').value;

    var salesRequired = income / commission;
    var contacts = salesRequired / closingRate;
    var contactsPerDay = contacts / daysWorked;
    var contactsPerDay10x = contactsPerDay * 10;

    document.getElementById('calls-per-day').textContent = 'You need to make ' + contactsPerDay.toFixed(2) + ' calls per day.';
    document.getElementById('calls-per-day-10x').textContent = 'With the 10x principle, you need to make ' + contactsPerDay10x.toFixed(2) + ' calls per day.';

    document.getElementById('results').style.display = 'block';
});
