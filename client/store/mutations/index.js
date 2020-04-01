export default {
  // updateCount(state, num) {//第二个参数payload不能随便传的，传多个数据只能包装成一个对象
  //   state.count = num;
  // }
  updateCount(state, {num, num2}) {//第二个参数payload不能随便传的，传多个数据只能包装成一个对象
    state.count = num;
    console.log(num2)
  }
}