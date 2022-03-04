import { Restaurant } from '../src/Classes/Restaurant'; // this will be your custom import
import { expect } from 'chai';
import { MaitreHotel } from '../src/Classes/MaitreHotel';
import {Serveur} from "../src/Classes/Serveur";

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
            const servuer = new Serveur();

            restaurant.demarrerService(maitreHotel, servuer);

            expect(restaurant.tables).to.include.members(maitreHotel.tables);
            expect(restaurant.tables).to.include.members(servuer.tables);
    });

    it('ÉTANT DONNÉ un restaurant ayant 3 tables dont une affectée à un serveur\n' +
        '\tQUAND le service débute\n' +
        '\tALORS il n\'est pas possible de modifier le serveur affecté à la table',
        () => {
        //TODO
    });
})