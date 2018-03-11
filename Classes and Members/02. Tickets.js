function tickets(args, str) {
    class Ticket{
        constructor(destination, price, status){
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
    }

    let result = [];

    for (let element of args) {
        let ticketData = element.split('|');
        let destination = ticketData[0];
        let price = Number(ticketData[1]);
        let status = ticketData[2];
        result.push(new Ticket(destination,price, status));
    }
    switch (str){
        case 'destination':
            result = result.sort((a,b)=> a.destination.localeCompare(b.destination));
            break;
        case 'price':
            result = result.sort((a,b)=> a.price - b.price);
            break;
        case 'status':
            result = result.sort((a,b)=> a.status.localeCompare(b.status));
            break;
    }
    return result;
}


let resultArray = tickets(['Philadelphia|94.20|available',
        'New York City|95.99|available',
        'New York City|95.99|sold',
        'Boston|126.20|departed'],
    'status'
);
console.log(resultArray);