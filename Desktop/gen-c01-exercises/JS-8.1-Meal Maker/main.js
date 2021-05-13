const menu = {
  _courses : {
    appetizers: [],
    mains: [],
    desserts: [],
  },
  get appetizers() {
 
  },
  set appetizers(appetizerIn) {
 
  },
  get courses() {
    return {
      appetizers: this.appetizers,
    };
  },
  addDishToCourse(courseName, dishName, dishPrice) {
    const dish = {

    };
    this._courses[courseName].push(dish); 
  },
  getRandomDishFromCourse() {
    const dishes = this._courses[courseName];
    const randomIndex = Math.floor(Math.random() * dishes.length);
  },
  generateRandomMeal() {
    const appetizer = this.getRandomDishFromCourse ('appetizers');
    const main = this.getRandomDishFromCourse ('main');
    const dessert = this.getRandomDishFromCourse ('dessert');
    const totalPrice = appetizer.price + main.price + dessert.price 
    return `Your meal is ${appetizer.name}, ${main.name}, ${dessert.name} The price is $${totalPrice}.`;
  },
};
  menu.addDishToCourse('appetizers', 'Caesar Salad', 'chocolate');
  let meal = menu.generateRandomMeal();
console.log(meal);