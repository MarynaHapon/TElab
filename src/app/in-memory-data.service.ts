import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const abonents = [
      { id: 1,
        firstName: 'Maryna',
        lastName: 'Hapon',
        telNumber: 380681154644,
        cashBalance: -34000,
        active: false
      },
      { id: 2,
        firstName: 'Nina',
        lastName: 'Hapon',
        telNumber: 380681154644,
        cashBalance: -34000,
        active: true
      },
      { id: 3,
        firstName: 'Olli',
        lastName: 'Hapon',
        telNumber: 380681154644,
        cashBalance: -34000,
        active: true
      },
      { id: 4,
        firstName: 'Mark',
        lastName: 'Hapon',
        telNumber: 380681154644,
        cashBalance: -34000,
        active: true
      },
      { id: 5,
        firstName: 'Mark',
        lastName: 'Hapon',
        telNumber: 380681154644,
        cashBalance: 34000,
        active: true
      }
    ];
    return {abonents};
  }
}