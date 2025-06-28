//your JS code here. If required.
   const bands = [
    'The Plot in You',
    'The Devil Wears Prada',
    'Pierce the Veil',
    'Norma Jean',
    'The Bled',
    'Say Anything',
    'The Midway State',
    'We Came as Romans',
    'Counterparts',
    'Oh, Sleeper',
    'A Skylit Drive',
    'Anywhere But Here',
    'An Old Dog'
  ];

  function stripArticle(name) {
    return name.replace(/^(a |an |the )/i, '').trim();
  }

  const sortedBands = bands
    .map(band => ({ original: band, stripped: stripArticle(band) }))
    .sort((a, b) => a.stripped.localeCompare(b.stripped))
    .map(band => band.original);

  const ul = document.getElementById('band');
  ul.innerHTML = sortedBands.map(band => `<li>${band}</li>`).join('');