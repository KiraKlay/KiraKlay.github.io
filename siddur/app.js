const prayers = [
    {
      name: 'מודה אני',
      url: 'https://www.sefaria.org/api/texts/Siddur_Ashkenaz%2C_Weekday%2C_Shacharit%2C_Preparatory_Prayers%2C_Modeh_Ani.2?lang=bi'
    },
    {
      name: 'נטילת ידים',
      url: 'https://www.sefaria.org/api/texts/Siddur_Ashkenaz%2C_Weekday%2C_Shacharit%2C_Preparatory_Prayers%2C_Netilat_Yadayim?lang=bi'
    },
    {
      name: 'אשר יצר',
      url: 'https://www.sefaria.org/api/texts/Siddur_Ashkenaz%2C_Weekday%2C_Shacharit%2C_Preparatory_Prayers%2C_Asher_Yatzar?lang=bi'
    },
    {
      name: 'אלוקי נשמה',
      url: 'https://www.sefaria.org/api/texts/Siddur_Ashkenaz%2C_Weekday%2C_Shacharit%2C_Preparatory_Prayers%2C_Elokai_Neshama?lang=bi'
    },
    {
      name: 'ציצית',
      url: 'https://www.sefaria.org/api/texts/Siddur_Ashkenaz%2C_Weekday%2C_Shacharit%2C_Preparatory_Prayers%2C_Tzitzit?lang=bi'
    },
    {
      name: 'ברכת התורה',
      url: 'https://www.sefaria.org/api/texts/Siddur_Ashkenaz%2C_Weekday%2C_Shacharit%2C_Preparatory_Prayers%2C_Torah_Blessings?lang=bi'
    },
    {
        name: "תלמוד תורה",
        url: "https://www.sefaria.org/api/texts/Siddur_Ashkenaz%2C_Weekday%2C_Shacharit%2C_Preparatory_Prayers%2C_Torah_Study?lang=bi"
      },
    {
        name: 'טלית',
        url: 'https://www.sefaria.org/api/texts/Siddur_Ashkenaz%2C_Weekday%2C_Shacharit%2C_Preparatory_Prayers%2C_Tallit?lang=bi'
      },
      {
        name: 'תפלין',
        url: 'https://www.sefaria.org/api/texts/Siddur_Ashkenaz%2C_Weekday%2C_Shacharit%2C_Preparatory_Prayers%2C_Tefillin?lang=bi'
      },
      {
        name: 'מה טבו',
        url: 'https://www.sefaria.org/api/texts/Siddur_Ashkenaz%2C_Weekday%2C_Shacharit%2C_Preparatory_Prayers%2C_Ma_Tovu?lang=bi'
      },
    {
      name: 'אדון עולם',
      url: 'https://www.sefaria.org/api/texts/Siddur_Ashkenaz%2C_Weekday%2C_Shacharit%2C_Preparatory_Prayers%2C_Adon_Olam?lang=bi'
    },
    {
      name: 'יגדל',
      url: 'https://www.sefaria.org/api/texts/Siddur_Ashkenaz%2C_Weekday%2C_Shacharit%2C_Preparatory_Prayers%2C_Yigdal?lang=bi'
    },
    {
        name: "ברכות השחר",
        url: "https://www.sefaria.org/api/texts/Siddur_Ashkenaz%2C_Weekday%2C_Shacharit%2C_Preparatory_Prayers%2C_Morning_Blessings?lang=bi"
      },
      {
        name: "עקדה",
        url: "https://www.sefaria.org/api/texts/Siddur_Ashkenaz%2C_Weekday%2C_Shacharit%2C_Preparatory_Prayers%2C_Akedah?lang=bi"
      },
      {
        name: "עול מלכות שמים",
        url: "https://www.sefaria.org/api/texts/Siddur_Ashkenaz%2C_Weekday%2C_Shacharit%2C_Preparatory_Prayers%2C_Sovereignty_of_Heaven?lang=bi"
      },
      {
        name: "הכיור",
        url: "https://www.sefaria.org/api/texts/Siddur_Ashkenaz%2C_Weekday%2C_Shacharit%2C_Preparatory_Prayers%2C_Korbanot%2C_Kiyor?lang=bi"
      },
      {
        name: "תרומת הדשן",
        url: "https://www.sefaria.org/api/texts/Siddur_Ashkenaz%2C_Weekday%2C_Shacharit%2C_Preparatory_Prayers%2C_Korbanot%2C_Terumat_HaDeshen.1?lang=bi"
      },
      {
        name: "קרבן תמיד",
        url: "https://www.sefaria.org/api/texts/Siddur_Ashkenaz%2C_Weekday%2C_Shacharit%2C_Preparatory_Prayers%2C_Korbanot%2C_Korban_HaTamid.1?lang=bi"
      },
      {
        name: "הקטורת",
        url: "https://www.sefaria.org/api/texts/Siddur_Ashkenaz%2C_Weekday%2C_Shacharit%2C_Preparatory_Prayers%2C_Korbanot%2C_Ketoret.1?lang=bi"
      },
      {
        name: "סדר המערכה",
        url: "https://www.sefaria.org/api/texts/Siddur_Ashkenaz%2C_Weekday%2C_Shacharit%2C_Preparatory_Prayers%2C_Korbanot%2C_Order_of_the_Temple_Service.1?lang=bi"
      },
      {
        name: "דיני זבחים",
        url: "https://www.sefaria.org/api/texts/Siddur_Ashkenaz%2C_Weekday%2C_Shacharit%2C_Preparatory_Prayers%2C_Korbanot%2C_Laws_of_Sacrifices.1?lang=bi"
      },
      {
        name: "ברייתא דרבי ישמעאל",
        url: "https://www.sefaria.org/api/texts/Siddur_Ashkenaz%2C_Weekday%2C_Shacharit%2C_Preparatory_Prayers%2C_Korbanot%2C_Baraita_of_Rabbi_Yishmael.1?lang=bi"
      },
      {
        name: "קדיש דרבנן",
        url: "https://www.sefaria.org/api/texts/Siddur_Ashkenaz%2C_Weekday%2C_Shacharit%2C_Preparatory_Prayers%2C_Korbanot%2C_Kaddish_DeRabbanan.1?lang=bi"
      },
    // Add more prayers here
  ];
  
  function fetchPrayer(prayer) {
    return fetch(prayer.url)
      .then(response => response.json())
      .then(data => {
        const text = data.he;
        const prayerElement = document.createElement('div');
        prayerElement.innerHTML = `<h2 style="text-align: right;">${prayer.name}</h2><p>${text}</p>`;
        document.body.appendChild(prayerElement);
      })
      .catch(error => {
        console.log(`Error fetching ${prayer.name}: ${error}`);
      });
  }
  
  function fetchPrayers() {
    return prayers.reduce((promise, prayer) => {
      return promise.then(() => fetchPrayer(prayer));
    }, Promise.resolve());
  }
  
  fetchPrayers()
    .then(() => console.log('All prayers fetched and displayed.'))
    .catch(error => console.log(`Error: ${error}`));
  