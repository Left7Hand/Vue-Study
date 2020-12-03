var app = new Vue({
  el: '#app',
  data: {
    books: [
      {
        name: '《算法导论》',
        time: '2006-9',
        price: 85.00,
        number: 1,
      },
      {
        name: '《UNIx编程艺术》',
        time: '2006-2',
        price: 59.00,
        number: 1,
      },
      {
        name: '《编程珠玑》',
        time: '2008-10',
        price: 39.00,
        number: 1,
      },
      {
        name: '《代码大全》',
        time: '2006-3',
        price: 128.00,
        number: 1,
      },
    ]
  },
  methods: {
    // 按钮：减
    decrement(index){
      this.books[index].number--
    },
    // 按钮：加
    increment(index){
      this.books[index].number++
    },
    // 移除按钮
    removeHandler(index) {
      this.books.splice(index, 1)
    }
  },
  computed:{
    totalPrice(){
      let totalPrice = 0
      for (let iterator of this.books) {
        totalPrice += iterator.price * iterator.number
      }
      return totalPrice
    }
  },
  // 过滤器
  filters: {
    showPrice(price){
      return '￥' + price.toFixed(2)
    }
  }
})