import { Restaurant } from '../src/Classes/Restaurant'; // this will be your custom import
import { expect } from 'chai';
import { Table } from '../src/Classes/Table';
import { EtatService } from '../src/Classes/EtatService';
import { ServeurBuilder } from '../src/utilites/ServeurBuilder';
import { ServeurGenerator } from '../src/utilites/ServeurGenerator';
import { MaitreHotelBuilder } from '../src/utilites/MaitreHotelBuilder';

describe('DebutService', () => {
  it('\tÉTANT DONNE un restaurant ayant 3 tables\n' +
    '\tQUAND le service commence\n' +
    '\tALORS elles sont toutes affectées au Maître d\'Hôtel',
    () => {
      const restaurant = new Restaurant(3);
      const maitreHotel = new MaitreHotelBuilder().build();

      restaurant.demarrerService(maitreHotel);

      expect(restaurant.tables).to.have.all.members(maitreHotel.tables);
    });

  it('\tÉTANT DONNÉ un restaurant ayant 3 tables dont une affectée à un serveur\n' +
    '\tQUAND le service débute\n' +
    '\tALORS la table éditée est affectée au serveur et les deux autres au maître d\'hôtel',
    () => {
      const restaurant = new Restaurant(3);
      const maitreHotel = new MaitreHotelBuilder().build();
      const serveur = new ServeurBuilder().build();

      restaurant.demarrerService(maitreHotel, serveur);

      expect(restaurant.tables).to.include.members(maitreHotel.tables);
      expect(restaurant.tables).to.include.members(serveur.tables);
    });

  it('ÉTANT DONNÉ un restaurant ayant 3 tables dont une affectée à un serveur\n' +
    '\tQUAND le service débute\n' +
    '\tALORS il n\'est pas possible de modifier le serveur affecté à la table',
    () => {
      const restaurant = new Restaurant(3);
      const serveurGenerator = new ServeurGenerator().nommés("Claude").generate(1);

      let tables: Array<Table> = null;

      restaurant.demarrerService(null, serveurGenerator[0]);

      tables = restaurant.tables;

      let result = tables[0].modifierServeurAffecte(serveurGenerator[1], restaurant.etatService);

      expect(result).to.be.equal(false);

    });

  it('ÉTANT DONNÉ un restaurant ayant 3 tables dont une affectée à un serveur\n' +
    'ET ayant débuté son service\n' +
    'QUAND le service se termine\n' +
    'ET qu\'une table est affectée à un serveur\n' +
    'ALORS la table éditée est affectée au serveur et les deux autres au maître d\'hôtel',
    () => {
      const restaurant = new Restaurant(3);
      const maitreHotel = new MaitreHotelBuilder().build();
      const serveur = new ServeurBuilder().build();

      restaurant.demarrerService(maitreHotel, serveur);
      let result = restaurant.terminerService();


      expect(result).to.be.equal(EtatService.Termine);
      expect(restaurant.tables).to.include.members(maitreHotel.tables);
      expect(restaurant.tables).to.include.members(serveur.tables);
    });
})