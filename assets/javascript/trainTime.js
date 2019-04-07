// Initialize Firebase
var config = {
    apiKey: "AIzaSyDlTxDifEAi_hVFQ0Ij3MmhMa3E2wwIeyA",
    authDomain: "traintime-53200.firebaseapp.com",
    databaseURL: "https://traintime-53200.firebaseio.com",
    projectId: "traintime-53200",
    storageBucket: "traintime-53200.appspot.com",
    messagingSenderId: "149625528710"
};
firebase.initializeApp(config);

var database = firebase.database();

$('#submitButton').on('click', function () {
    var currentMin = moment().format('mm'); 
    var newFrequency = $('#frequencyInput').val()
    var remainder = (currentMin % newFrequency);
    var minutesAway = (newFrequency - remainder);
    var nextArrival = moment().add(minutesAway, 'minutes');
    var convertedArrival = moment(nextArrival).format('HH:mm');
    var newName = $('#nameInput').val().trim();
    var newDestination = $('#destinationInput').val().trim();

    var newRow = $('<tr>').append (
        $('<td>').text(newName),
        $('<td>').text(newDestination),
        $('<td>').text(newFrequency),
        $('<td>').text(convertedArrival),
        $('<td>').text(minutesAway),
    );

    database.ref().set({
        Name: newName,
        Destination: newDestination,
        Frequency: newFrequency,
        NextTrain: convertedArrival,
        MinutesAway: minutesAway,
    });

    $('#scheduleTable > tbody').append(newRow);
    $('#nameInput').val('');
    $('#destinationInput').val('');
    $('#firstTrainInput').val('');
    $('#frequencyInput').val('');
});