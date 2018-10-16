/*
The Oyster Card Problem
You are required to model the following fare card system which is a limited version of London’s Oyster card system. At the end of the test, 
you should be able to demonstrate a user loading a card with £30, and taking the following trips, and then viewing the balance.

Tube Holborn to Earl’s Court
328 bus from Earl’s Court to Chelsea
Tube Earl’s court to Hammersmith

Operation
When the user passes through the inward barrier at the station, their oyster card is charged the maximum fare.
When they pass out of the barrier at the exit station, the fare is calculated and the maximum fare transaction removed and replaced with the 
real transaction (in this way, if the user doesn’t swipe out, they are charged the maximum fare).

All bus journeys are charged at the same price.

The system should favor the customer where more than one fare is possible for a given journey. E.g. Holburn to Earl’s Court is charged at £2.50.

For the purposes of this test using the following data:


Stations and zones:

Station         Zone(s)
------------    -------
Holborn         1
Earl’s Court    1, 2
Wimbledon       3
Hammersmith     2

Fares:

Journey                                 Fare
------------------------------          ------
Anywhere in Zone 1                      £2.50
Anyone zone outside zone 1              £2.00
Any two zones including zone 1          £3.00
Any two zones excluding zone 1          £2.25
Any three zones                         £3.20
Any bus journey                         £1.80

The maximum possible fare is therefore £3.20.
*/

const STATIONS = { 
	HOLBORN: [1],
	EARLS_COURT: [1,2],
	WIMBLEDON: [3],
	HAMMERSMITH: [2]
}

const FARES = {
	ANYWHERE_IN_ZONE_1: 2.50,
	ANY_ONE_ZONE_OUTSIDE_ZONE_1: 2.00,
	ANY_TWO_ZONE_INCLUDE_ZONE_1: 3.00,
	ANY_TWO_ZONE_EXCLUDE_ZONE_1: 2.25,
	ANY_THREE_ZONE: 3.20,
	ANY_BUS_JOURNEY: 1.80,
	MAX_FARE: 3.20
}

const NOW = {
	credit: 0,
	fare: 0,
	both_in_zone_1: false
}

const noOfZones = new Set()

function setCredit(credit){
	NOW.credit += credit;
}
function setDebit(debit){
	NOW.credit >= debit ? NOW.credit -= debit : console.log('Not enough credit');
}
function getCredit(credit){
	return NOW.credit;
}
function getZoneNumbers(){
	return noOfZones.size;
}
function hasInZone(zone){
	return noOfZones.has(zone);
}
function reset(){
	NOW.fare = 0;
	NOW.both_in_zone_1 = false;
	noOfZones.clear();
}
function startJourney(fromPlace, toPlace){
	reset();
	const from = STATIONS.hasOwnProperty(fromPlace) ? STATIONS[fromPlace] : [];
	const to = STATIONS.hasOwnProperty(toPlace) ? STATIONS[toPlace] : [];
	let from_in_zone_1 = false;
	let to_in_zone_1 = false;
	for (let i = 0; i < from.length; i++) {
		noOfZones.add(from[i]);
		if(from[i] === 1){
			from_in_zone_1 = true;
		}
	}
	for (let i = 0; i < to.length; i++) {
		noOfZones.add(to[i])
		if(to[i] === 1){
			to_in_zone_1 = true;
		}
	}
	if(from_in_zone_1 && to_in_zone_1){
		NOW.both_in_zone_1 = true;
	}
	setDebit(FARES.MAX_FARE);
}
function endJourney(swiped, vehicle_type){
	if(swiped){
		calculateFare(vehicle_type);
		setCredit(FARES.MAX_FARE);
		setDebit(NOW.fare);
	}
}
function calculateFare(vehicle_type){
	if(vehicle_type === 'bus'){
		NOW.fare = FARES.ANY_BUS_JOURNEY;
	}else{
		const crossedZone = getZoneNumbers();
		const hasZone = hasInZone(1);
		switch(crossedZone){
			case 1:
				if(!hasZone){
					NOW.fare = FARES.ANY_ONE_ZONE_OUTSIDE_ZONE_1;
				}
				break;
			case 2:
				if(hasZone){
					if(NOW.both_in_zone_1){
						NOW.fare = FARES.ANYWHERE_IN_ZONE_1;
					}else{
						NOW.fare = FARES.ANY_TWO_ZONE_INCLUDE_ZONE_1;
					}
				}else{
					NOW.fare = FARES.ANY_TWO_ZONE_EXCLUDE_ZONE_1;
				}
				break;
			case 3:
				NOW.fare = FARES.ANY_THREE_ZONE
				break;
			default:
				break;
		}
	}
}

//set initital credit to 30
setCredit(30);
// Trip 1
startJourney('HOLBORN', 'EARLS_COURT');
endJourney(true, 'tube');
// Trip 2
startJourney('EARLS_COURT', 'CHELSEA');
endJourney(true, 'bus');
// Trip 3
startJourney('EARLS_COURT', 'HAMMERSMITH');
endJourney(true, 'tube');

console.log(NOW.credit);