import { Customer } from './customer.model';

export class CustomerService{

    private customers: Customer[] = [
        new Customer('Mateusz Dembek', '508-214-531',1),
        new Customer('Sempre Sempreszynski', '500-500-500',7),
        new Customer('Aleksandra Wojcieszkiewicz', '508-888-888',4),
        new Customer('Zuzanna Kasprzak', '884-308-853',4),
        new Customer('Kacper Nowakowski', '787-362-083',1),
        new Customer('Szymon Lisowski', '793-350-416',2),
        new Customer('Kacper Nowakowski', '787-362-083',1),
        new Customer('Szymon Lisowski', '793-350-416',2),
        new Customer('Kacper Nowakowski', '787-362-083',1),
        new Customer('Szymon Lisowski', '793-350-416',2),
        new Customer('Szymon Lisowski', '793-350-416',2)
    ];

    getCustomers(){
        return this.customers.slice();
    }


}