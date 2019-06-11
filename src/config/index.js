module.exports = {
  siteTitle: 'Timothy Jao | Software Engineer',
  siteDescription:
    'Timothy Jao is a software engineer based in San Francisco, CA who specializes in developing exceptional, high-quality websites and applications.',
  siteKeywords:
    'Timothy Jao, Timothy, Jao, timothyjao, software engineer, front-end engineer, web developer, javascript, sf, san francisco',
  siteUrl: 'https://timothyjao.com',
  siteLanguage: 'en_US',

  googleVerification: 'DCl7VAf9tcz6eD9gb67NfkNnJ1PKRNcg8qQiwpbx9Lk',

  name: 'Timothy Jao',
  location: 'San Francisco, CA',
  email: 'timothy.i.jao@gmail.com',
  github: 'https://github.com/TimothyJao/',
  socialMedia: [
    {
      name: 'Github',
      url: 'https://github.com/TimothyJao/',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/timothy-jao-670718b5/',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '#about',
    },
    {
      name: 'Experience',
      url: '#jobs',
    },
    {
      name: 'Work',
      url: '#projects',
    },
    {
      name: 'Contact',
      url: '#contact',
    },
  ],

  // twitterHandle: '@bchiang7',
  // googleAnalyticsID: 'UA-45666519-2',

  navHeight: 100,

  greenColor: '#64ffda',
  navyColor: '#0a192f',
  darkNavyColor: '#020c1b',

  srConfig: (delay = 200) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
