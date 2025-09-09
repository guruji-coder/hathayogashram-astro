export const mantrasSchema = {
  '@context': 'https://schema.org',
  '@type': 'MusicPlaylist',
  name: 'Sacred Mantras & Chants',
  description: 'Traditional Sanskrit mantras and chants taught in our programs',
  track: [
    {
      '@type': 'MusicRecording',
      name: 'Gayatri Mantra',
      inLanguage: 'sa',
      lyrics:
        'Om Bhur Bhuvah Svah, Tat Savitur Varenyam, Bhargo Devasya Dhimahi, Dhiyo Yo Nah Prachodayat',
      description: 'Universal prayer for enlightenment from Rig Veda',
    },
    {
      '@type': 'MusicRecording',
      name: 'Patanjali Invocation',
      inLanguage: 'sa',
      lyrics: 'Yogena cittasya padena vacam, malam sarirasya ca vaidyakena...',
      description: 'Traditional invocation to Sage Patanjali',
    },
    {
      '@type': 'MusicRecording',
      name: 'Shanti Mantras',
      inLanguage: 'sa',
      lyrics: 'Om Sahana Vavatu, Sahanau Bhunaktu...',
      description: 'Peace mantras from Upanishads for harmony',
    },
    {
      '@type': 'MusicRecording',
      name: 'Ashtanga Opening Mantra',
      inLanguage: 'sa',
      lyrics: 'Vande Gurunam Caranaravinde...',
      description: 'Opening prayer for Ashtanga practice',
    },
    {
      '@type': 'MusicRecording',
      name: 'Om Namah Shivaya',
      inLanguage: 'sa',
      description: 'Five syllable mantra for meditation',
    },
  ],
};
