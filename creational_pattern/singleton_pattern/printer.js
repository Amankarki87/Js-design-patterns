let instance = null;

class Printer {
    constructor(pages) {
        this.display = function() {
            console.log(`You are connected to printer. You want to print ${pages} pages.`)
        }
    }

    static getInstance(numOfPages) {
        if (!instance) {
            instance = new Printer(numOfPages);
        }
        return instance;
    }
}

let obj1 = Printer.getInstance(2);
console.log(obj1);
obj1.display();
let obj2 = Printer.getInstance(4);
console.log(obj2);
obj2.display();

/* Output 
 Printer { display: [Function] }
 You are connected to printer. You want to print 2 pages.
 Printer { display: [Function] }
 You are connected to printer. You want to print 2 pages.

Class Printer will have only one instance at the moment. 
*/