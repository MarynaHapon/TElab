import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const abonents = [
      { id: 1,
        firstName: 'Джон',
        lastName: 'Чейни',
        telNumber: 380681232455,
        cashBalance: -200,
        active: false
      },
      { id: 2,
        firstName: 'Федор',
        lastName: 'Грибоедов',
        telNumber: 380681154684,
        cashBalance: 200,
        active: true
      },
      { id: 3,
        firstName: 'Макар',
        lastName: 'Девушкин',
        telNumber: 380689949644,
        cashBalance: -320,
        active: true
      },
      { id: 4,
        firstName: 'Мая',
        lastName: 'Ривман',
        telNumber: 380681154699,
        cashBalance: 340,
        active: true
      },
      { id: 5,
        firstName: 'Роза',
        lastName: 'Грие',
        telNumber: 380681154677,
        cashBalance: 450,
        active: true
      },
      { id: 6,
        firstName: 'Лернид',
        lastName: 'Соколов',
        telNumber: 380681159977,
        cashBalance: 550,
        active: true
      },
      { id: 7,
        firstName: 'Борис',
        lastName: 'Волков',
        telNumber: 380683354677,
        cashBalance: 250,
        active: true
      },
      { id: 8,
        firstName: 'Александр',
        lastName: 'Соловей',
        telNumber: 380681154677,
        cashBalance: 950,
        active: true
      },
      { id: 9,
        firstName: 'Юлиан',
        lastName: 'Гуревич',
        telNumber: 380681565467,
        cashBalance: -350,
        active: true
      },
      { id: 10,
        firstName: 'Юрий',
        lastName: 'Штерн',
        telNumber: 380681122677,
        cashBalance: 150,
        active: true
      }
    ];
    return {abonents};
  }
}
