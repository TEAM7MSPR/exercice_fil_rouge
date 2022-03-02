import { Restaurant } from '../src/Classes/Restaurant'; // this will be your custom import
import { expect } from 'chai';
import { MaitreHotel } from '../src/Classes/MaitreHotel';

describe('DebutService', () => {
  it('ÉTANT DONNE un restaurant ayant 3 tables, QUAND le service commence, ALORS elles sont toutes affectées au Maître d\'Hôtel',
    () => {
      const restaurant = new Restaurant(3);
      const maitreHotel = new MaitreHotel();

      restaurant.demarrerService(maitreHotel);

      expect(restaurant.tables).to.have.all.members(maitreHotel.tables);
    })
})