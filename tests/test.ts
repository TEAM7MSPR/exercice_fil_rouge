import { Restaurant } from '../src/Classes/Restaurant'; // this will be your custom import
import { expect } from 'chai';
import { MaitreHotel } from '../src/Classes/MaitreHotel';
import { Serveur } from "../src/Classes/Serveur";
import { Table } from '../src/Classes/Table';

describe('DebutService', () => {
  it('\tÉTANT DONNE un restaurant ayant 3 tables\n' +
    '\tQUAND le service commence\n' +
    '\tALORS elles sont toutes affectées au Maître d\'Hôtel',
    () => {
      const restaurant = new Restaurant(3);
      const maitreHotel = new MaitreHotel();

      restaurant.demarrerService(maitreHotel);

      expect(restaurant.tables).to.have.all.members(maitreHotel.tables);
    });

  it('\tÉTANT DONNÉ un restaurant ayant 3 tables dont une affectée à un serveur\n' +
    '\tQUAND le service débute\n' +
    '\tALORS la table éditée est affectée au serveur et les deux autres au maître d\'hôtel',
    () => {
      const restaurant = new Restaurant(3);
      const maitreHotel = new MaitreHotel();
      const serveur = new Serveur();

      restaurant.demarrerService(maitreHotel, serveur);

      expect(restaurant.tables).to.include.members(maitreHotel.tables);
      expect(restaurant.tables).to.include.members(serveur.tables);
    });

  it('ÉTANT DONNÉ un restaurant ayant 3 tables dont une affectée à un serveur\n' +
    '\tQUAND le service débute\n' +
    '\tALORS il n\'est pas possible de modifier le serveur affecté à la table',
    () => {
      const restaurant = new Restaurant(3);
      const serveur1 = new Serveur();
      const serveur2 = new Serveur();

      let tables: Array<Table> = null;

      restaurant.demarrerService(null, serveur1);

      tables = restaurant.tables;

      let result = tables[0].modifierServeurAffecte(serveur2, restaurant.etatService);

      expect(result).to.be.equal(false);

    });

  it('ÉTANT DONNÉ un restaurant ayant 3 tables dont une affectée à un serveur\n' +
    'ET ayant débuté son service\n' +
    'QUAND le service se termine\n' +
    'ET qu\'une table est affectée à un serveur\n' +
    'ALORS la table éditée est affectée au serveur et les deux autres au maître d\'hôtel',
    () => {

    });
})