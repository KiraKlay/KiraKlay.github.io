const prayers = [
    {
      name: 'Modeh Ani',
      url: 'https://www.sefaria.org/api/texts/Siddur_Ashkenaz%2C_Weekday%2C_Shacharit%2C_Preparatory_Prayers%2C_Modeh_Ani.2?lang=bi'
    },
    {
      name: 'Netilat Yadayim',
      url: 'https://www.sefaria.org/api/texts/Siddur_Ashkenaz%2C_Weekday%2C_Shacharit%2C_Preparatory_Prayers%2C_Netilat_Yadayim?lang=bi'
    },
    {
      name: 'Asher Yatzar',
      url: 'https://www.sefaria.org/api/texts/Siddur_Ashkenaz%2C_Weekday%2C_Shacharit%2C_Preparatory_Prayers%2C_Asher_Yatzar?lang=bi'
    },
    {
      name: 'Elokai Neshama',
      url: 'https://www.sefaria.org/api/texts/Siddur_Ashkenaz%2C_Weekday%2C_Shacharit%2C_Preparatory_Prayers%2C_Elokai_Neshama?lang=bi'
    },
    {
      name: 'Tzitzit',
      url: 'https://www.sefaria.org/api/texts/Siddur_Ashkenaz%2C_Weekday%2C_Shacharit%2C_Preparatory_Prayers%2C_Tzitzit?lang=bi'
    },
    {
      name: 'Torah Blessings',
      url: 'https://www.sefaria.org/api/texts/Siddur_Ashkenaz%2C_Weekday%2C_Shacharit%2C_Preparatory_Prayers%2C_Torah_Blessings?lang=bi'
    },
    {
        name: "Torah Study",
        url: "https://www.sefaria.org/api/texts/Siddur_Ashkenaz%2C_Weekday%2C_Shacharit%2C_Preparatory_Prayers%2C_Torah_Study?lang=bi"
      },
    {
        name: 'Tallit',
        url: 'https://www.sefaria.org/api/texts/Siddur_Ashkenaz%2C_Weekday%2C_Shacharit%2C_Preparatory_Prayers%2C_Tallit?lang=bi'
      },
      {
        name: 'Tefillin',
        url: 'https://www.sefaria.org/api/texts/Siddur_Ashkenaz%2C_Weekday%2C_Shacharit%2C_Preparatory_Prayers%2C_Tefillin?lang=bi'
      },
      {
        name: 'Ma Tovu',
        url: 'https://www.sefaria.org/api/texts/Siddur_Ashkenaz%2C_Weekday%2C_Shacharit%2C_Preparatory_Prayers%2C_Ma_Tovu?lang=bi'
      },
    {
      name: 'Adon Olam',
      url: 'https://www.sefaria.org/api/texts/Siddur_Ashkenaz%2C_Weekday%2C_Shacharit%2C_Preparatory_Prayers%2C_Adon_Olam?lang=bi'
    },
    {
      name: 'Yigdal',
      url: 'https://www.sefaria.org/api/texts/Siddur_Ashkenaz%2C_Weekday%2C_Shacharit%2C_Preparatory_Prayers%2C_Yigdal?lang=bi'
    },
    {
        name: "Morning Blessings",
        url: "https://www.sefaria.org/api/texts/Siddur_Ashkenaz%2C_Weekday%2C_Shacharit%2C_Preparatory_Prayers%2C_Morning_Blessings?lang=bi"
      },
      {
        name: "Akedah",
        url: "https://www.sefaria.org/api/texts/Siddur_Ashkenaz%2C_Weekday%2C_Shacharit%2C_Preparatory_Prayers%2C_Akedah?lang=bi"
      },
      {
        name: "Sovereignty of Heaven",
        url: "https://www.sefaria.org/api/texts/Siddur_Ashkenaz%2C_Weekday%2C_Shacharit%2C_Preparatory_Prayers%2C_Sovereignty_of_Heaven?lang=bi"
      },
      {
        name: "Kiyor",
        url: "https://www.sefaria.org/api/texts/Siddur_Ashkenaz%2C_Weekday%2C_Shacharit%2C_Preparatory_Prayers%2C_Korbanot%2C_Kiyor?lang=bi"
      },
      {
        name: "Terumat HaDeshen",
        url: "https://www.sefaria.org/api/texts/Siddur_Ashkenaz%2C_Weekday%2C_Shacharit%2C_Preparatory_Prayers%2C_Korbanot%2C_Terumat_HaDeshen.1?lang=bi"
      },
      {
        name: "Korban HaTamid",
        url: "https://www.sefaria.org/api/texts/Siddur_Ashkenaz%2C_Weekday%2C_Shacharit%2C_Preparatory_Prayers%2C_Korbanot%2C_Korban_HaTamid.1?lang=bi"
      },
      {
        name: "Ketoret",
        url: "https://www.sefaria.org/api/texts/Siddur_Ashkenaz%2C_Weekday%2C_Shacharit%2C_Preparatory_Prayers%2C_Korbanot%2C_Ketoret.1?lang=bi"
      },
      {
        name: "Order of the Temple Service",
        url: "https://www.sefaria.org/api/texts/Siddur_Ashkenaz%2C_Weekday%2C_Shacharit%2C_Preparatory_Prayers%2C_Korbanot%2C_Order_of_the_Temple_Service.1?lang=bi"
      },
      {
        name: "Laws of Sacrifices",
        url: "https://www.sefaria.org/api/texts/Siddur_Ashkenaz%2C_Weekday%2C_Shacharit%2C_Preparatory_Prayers%2C_Korbanot%2C_Laws_of_Sacrifices.1?lang=bi"
      },
      {
        name: "Baraita of Rabbi Yishmael",
        url: "https://www.sefaria.org/api/texts/Siddur_Ashkenaz%2C_Weekday%2C_Shacharit%2C_Preparatory_Prayers%2C_Korbanot%2C_Baraita_of_Rabbi_Yishmael.1?lang=bi"
      },
      {
        name: "Kaddish DeRabbanan",
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
  