import Section from 'components/Section';
import React from 'react';

function Home() {

  const items = [
    {
      id:1,
      title: 'Daily Mix 1',
      description: 'Jack Harlow, Eminem, Wiz Khalifa ve daha fazlası',
      image: 'https://dailymix-images.scdn.co/v2/img/ab6761610000e5ebed3a04c76cbc92b97f59c3c0/3/tr/default',
      type: 'album'
    },
    {
      id:2,
      title: 'Daily Mix 1',
      description: 'Jack Harlow, Eminem, Wiz Khalifa ve daha fazlası',
      image: 'https://newjams-images.scdn.co/image/ab676477000033ad/dt/v3/discover-weekly/etiTEuVEJaB8XleeGhLzMA==/cnRydHJ0cnRydHJ0cnRydA==',
      type: 'album'
    },
    {
      id:3,
      title: 'Daily Mix 1',
      description: 'Jack Harlow, Eminem, Wiz Khalifa ve daha fazlası',
      image: 'https://dailymix-images.scdn.co/v2/img/ab6761610000e5ebd8b9980db67272cb4d2c3daf/5/tr/default',
      type: 'podcast'

    },
    {
      id:4,
      title: 'Daily Mix 1',
      description: 'Jack Harlow, Eminem, Wiz Khalifa ve daha fazlası',
      image: 'https://dailymix-images.scdn.co/v2/img/ab6761610000e5ebed3a04c76cbc92b97f59c3c0/3/tr/default',
      type: 'artist'

    },
    {
      id:5,
      title: 'Daily Mix 1',
      description: 'Jack Harlow, Eminem, Wiz Khalifa ve daha fazlası',
      image: 'https://dailymix-images.scdn.co/v2/img/ab6761610000e5eb1269e8667cdc254a53e9ac39/4/tr/default',
      type: 'album'

    }
  ];

  return (
    <div className='grid gap-y-8 '>
      <Section title={'Recently played'} more={'/more'} items={items} />
      <Section title={'En Çok Dinlediğim Mixler'} more={'/more'} items={items} />
    </div>
  );
}

export default Home;
