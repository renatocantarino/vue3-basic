var products = [
  {
    photo: 'img/big-mac.png',
    name: 'Big Mac',
    price: 5.99,
    active: false,
    quantity: 0,
  },
  {
    photo: 'img/mc-chicken.png',
    name: 'Mc Chicken',
    price: 4.99,
    active: false,
    quantity: 0,
  },
  {
    photo: 'img/double-cb.png',
    name: 'Double Cheese Burger',
    price: 2.99,
    active: false,
    quantity: 0,
  },
  {
    photo: 'img/fries.png',
    name: 'Batata frita',
    price: 2.99,
    active: false,
    quantity: 0,
  },
  {
    photo: 'img/nuggets.png',
    name: 'Mc Nuggets',
    price: 3.49,
    active: false,
    quantity: 0,
  },
  {
    photo: 'img/salad.png',
    name: 'Salada',
    price: 2.79,
    active: false,
    quantity: 0,
  },
  {
    photo: 'img/cola.png',
    name: 'Coca Cola',
    price: 1.99,
    active: false,
    quantity: 0,
  },
  {
    photo: 'img/lipton.png',
    name: 'Ice Tea',
    price: 1.99,
    active: false,
    quantity: 0,
  },
  {
    photo: 'img/water.png',
    name: 'Água',
    price: 1.49,
    active: false,
    quantity: 0,
  },
];

const _selfServiceMachine = {
  data() {
    return {
      products: window.products,
    };
  },
  methods: {
    calculate: function () {
      var total = 0;

      this.products.forEach((item) => {
        if (item.active) {
          total += item.price * item.quantity;
        }
      });

      return total.toFixed(2);
    },
  },
};

Vue.createApp(_selfServiceMachine).mount('#app');
