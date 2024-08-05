// You can now use ES6 syntax here
Luigi.setConfig({
  navigation: {
    nodes: function () {
      return [
        {
          pathSegment: "ssp",
          label: "SSP",
          viewUrl: "/dashboard",
        },
      ];
    },
  },
  routing: {
    useHashRouting: true,
  },
  settings: {
    appLoadingIndicator: {
      hideAutomatically: true,
    },

    header: {
      title: "Testing Header and Sidedrawer",
      logo: "/assets/favicon.ico",
    },

    hideNavigation: true /* hides luigi shell */,
  },
});
