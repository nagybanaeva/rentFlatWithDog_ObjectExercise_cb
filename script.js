var apartment = {
	'type of the building': 'tégla', 
	'floor': '4. emelet', 
	'number of rooms': '3 szoba', 
	'size': '62 négyzetméter', 
	'view': 'kert', 
	'pets allowed': ['kutyák', 'macskák'], 
	'shortest rental period': 'legalább egy év'
};



document.write(['pets allowed']in apartment);

document.write(apartment.hasOwnProperty(['pets allowed']));
	