import { Customer } from "./customer.model";
import { EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';

export class CustomerService {

  // private customerChanged = new Subject<Customer[]>();

  private customers: Customer[] = [
    new Customer(
      "Mateusz Dembek",
      "508-214-531",
      1,
      "mateuszdembek@gmail.com",
      "Lednická 15 988 13 Rožmberk nad Vltavou",
      "Moravskoslezský kraj",
      "735-53"
    ),
    new Customer(
      "Sempre Sempreszynski",
      "500-500-500",
      7,
      "sempresempreszynski@gmail.com",
      "Nad Šancemi 7/8 284 38 Krásno",
      "Stredoceský kraj",
      "267-62"
    ),
    new Customer(
      "Aleksandra Wojcieszkiewicz",
      "508-888-888",
      4,
      "aleksandrawojcieszkiewicz@gmail.com",
      "Poštovní 1716 Loukov u Mnichova Hradište",
      "Jihoceský kraj",
      "378-53"
    ),
    new Customer(
      "Zuzanna Kasprzak",
      "884-308-853",
      4,
      "zuzannakasprzak@gmail.com",
      "Abdi ipekçi mahallesi Şehit gaffar okkan caddesi 1526 sokak /3 no:4 daire:4 Darica/Kocaeli",
      "Stredoceský kraj",
      "263-01"
    ),
    new Customer(
      "Kacper Nowakowski",
      "787-362-083",
      1,
      "kacpernowakowski@gmail.com",
      "Střední 1579 Nezvestice",
      'Olomoucký kraj',
      '789-01'
    ),
    new Customer(
      "Szymon Lisowski",
      "793-350-416",
      2,
      "szymonlisowski@gmail.com",
      "Bedřicha Smetany 772 Medlovice",
      'Královéhradecký kraj',
      '507-71'
    ),
    new Customer(
      "Kacper Nowakowski",
      "787-362-083",
      1,
      "kacpernowakowski@gmail.com",
      "Příkopy 826 Ústí nad Orlicí 1",
      'Jihomoravský kraj',
      '671-62'
    ),
    new Customer(
      "Bodnar Bondaruk",
      "793-350-416",
      2,
      "bodnarbondaruk@gmail.com",
      "Hřbitovní 1625 Tlumacov",
      'Pardubický kraj',
      '566-01'
    ),
    new Customer(
      "Honcharenko Honcharuk",
      "787-362-083",
      1,
      "honcharenkohoncharuk@gmail.com",
      "Sokolovská 728 Horní Mesto",
      "Moravskoslezský kraj",
      '783-75'
    ),
    new Customer(
      "Kushnirenko Kushniruk",
      "793-350-416",
      2,
      "kushnirenkokushniruk@gmail.com",
      "Na Výsluní 226 Konstantinovy Lázne",
      "Pardubický kraj",
      '569-67'
    ),
    new Customer(
      "Ponomarenko  Clergyman",
      "793-350-416",
      2,
      "ponomarenkoclergyman@gmail.com",
      "Osvobození 1723 Dolní Lutyne",
      'Moravskoslezský kraj',
      '747-19'
    )
  ];

  getCustomers() {
    return this.customers.slice();
  }

  // getCustomerOutput(){
  //   return this.customerChanged;
  // }

  getCustomer(index: number){
    return this.customers[index];
  }
}
