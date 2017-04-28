import React from 'react';

export default () => (
  <div>
    <h1 className="text-center">
     About Us
    </h1>
    {`We at Freeways believe that there is a traveller in each one of us.
It is about unravelling your inner wishes and smash them at the mirror of present. It is about enhancing your precious travel resources be it time, money, energy and the overall experience.

Our existential purpose is to restore the meaning of travelling.
We offer you the services which will make your experiences more native to the destination. We go places and bring enthralling information along with the best staying, riding and experiential activities you always needed. We will do this by connecting you to various opportunities & information which will amplify your travelling experience.

The crunchy, authentic and reliable information about the destination you are visiting will be at your disposal throughout so that you remain never short of anything with your travelling escapade.

It could be diving into the abundance of an ocean far away from coast in Goa, or trekking in the mighty himalayas, or biking on the roads less travelled, or witnessing the local dance form of a certain place, or eating the punjabi food at a stay you will choose far away from hustle and bustle of the city and rather right in the deepest roots of ethnicity.

The destination you choose will be unwrapped, magnified,explored and the signature of that place will be all over your travelling canvas.`.split(/[\n\r\f]/g).map(curr => <p>{curr}</p>)}
  </div>
)
