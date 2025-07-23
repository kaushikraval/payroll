export const ShiftData = {
  getProductsData() {
    return [
      {
        id: '1000',
        name: 'General',
      },
      {
        id: '1001',
        name: 'Day',
      },
      {
        id: '1002',
        name: 'Morning',
      },
      {
        id: '1003',
        name: 'Afternoon',
      },
      {
        id: '1003',
        name: 'Night',
      },
    ];
  },

  getProductsSmall() {
    return Promise.resolve(this.getProductsData().slice(0, 10));
  },
};
