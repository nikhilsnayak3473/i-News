import Country from './Country';

const Countries = ({ isActive }) => {
  const countries = [
    {
      name: 'Argentina',
      id: 'ar',
    },
    {
      name: 'Australia',
      id: 'au',
    },
    {
      name: 'Belgium',
      id: 'be',
    },
    {
      name: 'Brazil',
      id: 'br',
    },
    {
      name: 'Bulgaria',
      id: 'bg',
    },
    {
      name: 'Canada',
      id: 'ca',
    },
    {
      name: 'China',
      id: 'cn',
    },
    {
      name: 'Colombia',
      id: 'co',
    },
    {
      name: 'Cuba',
      id: 'cu',
    },
    {
      name: 'Czech Republic',
      id: 'cz',
    },
    {
      name: 'Egypt',
      id: 'eg',
    },
    {
      name: 'France',
      id: 'fr',
    },
    {
      name: 'Germany',
      id: 'de',
    },
    {
      name: 'Greece',
      id: 'gr',
    },
    {
      name: 'Hong Kong',
      id: 'hk',
    },
    {
      name: 'Hungary',
      id: 'hu',
    },
    {
      name: 'India',
      id: 'in',
    },
    {
      name: 'Indonesia',
      id: 'id',
    },
    {
      name: 'Ireland',
      id: 'ie',
    },
    {
      name: 'Israel',
      id: 'il',
    },
    {
      name: 'Italy',
      id: 'it',
    },
    {
      name: 'Japan',
      id: 'jp',
    },
    {
      name: 'Latvia',
      id: 'lv',
    },
    {
      name: 'Lithuania',
      id: 'lt',
    },
    {
      name: 'Malaysia',
      id: 'my',
    },
    {
      name: 'Mexico',
      id: 'mx',
    },
    {
      name: 'Morocco',
      id: 'ma',
    },
    {
      name: 'Netherlands',
      id: 'nl',
    },
    {
      name: 'New Zealand',
      id: 'nz',
    },
    {
      name: 'Nigeria',
      id: 'ng',
    },
    {
      name: 'Norway',
      id: 'no',
    },
    {
      name: 'Philippines',
      id: 'ph',
    },
    {
      name: 'Poland',
      id: 'pl',
    },
    {
      name: 'Portugal',
      id: 'pt',
    },
    {
      name: 'Romania',
      id: 'ro',
    },
    {
      name: 'Russia',
      id: 'ru',
    },
    {
      name: 'Saudi Arabia',
      id: 'sa',
    },
    {
      name: 'Serbia',
      id: 'rs',
    },
    {
      name: 'Singapore',
      id: 'sg',
    },
    {
      name: 'Slovakia',
      id: 'sk',
    },
    {
      name: 'Slovenia',
      id: 'si',
    },
    {
      name: 'South Africa',
      id: 'za',
    },
    {
      name: 'South Korea',
      id: 'kr',
    },
    {
      name: 'Sweden',
      id: 'se',
    },
    {
      name: 'Switzerland',
      id: 'ch',
    },
    {
      name: 'Taiwan',
      id: 'tw',
    },
    {
      name: 'Thailand',
      id: 'th',
    },
    {
      name: 'Turkey',
      id: 'tr',
    },
    {
      name: 'UAE',
      id: 'ae',
    },
    {
      name: 'Ukraine',
      id: 'ua',
    },
    {
      name: 'United Kingdom',
      id: 'gb',
    },
    {
      name: 'United States',
      id: 'us',
    },
    {
      name: 'Venuzuela',
      id: 've',
    },
  ];

  return (
    <div className={isActive ? 'options active' : 'options'}>
      {countries.map((country, index) => (
        <Country key={index} countryObj={country} />
      ))}
    </div>
  );
};

export default Countries;
