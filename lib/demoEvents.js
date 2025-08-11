// lib/demoEvents.js
export const demoEvents = (() => {
  const base = new Date();
  const add = (h) => new Date(base.getTime() + h * 3600 * 1000).toISOString();
  return [
    { title: 'Tigres vs Halcones', start: add(2)  },
    { title: 'Bulls vs Celtics',   start: add(5)  },
    { title: 'Heat vs Spurs',       start: add(26) },
    { title: 'Norte vs Sur',        start: add(30) },
  ];
})();
