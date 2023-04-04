class recipe {
    title;
    serving;
    ingredients;
    constructor(title,serving,ingredients) {
        this.title = title;
        this.serving = serving;
        this.ingredients = ingredients;
    }
}
let recipe1 = new recipe('Sườn xào chua ngọt',2,['400 g sườn thăn', '4 tbsp nước mắm', '5 tsp đường', '5 tsp nước cốt chanh', '1/3 bát nước sôi', 'Hành khô, tỏi, ớt, hành lá', '2 quả cà chua', 'Hành tây (ớt chuông)']);
console.log(`Tên món ăn: ${recipe1.title}`);
console.log(`Khẩu phần ăn: ${recipe1.serving}`);
console.log(`Thành phần:`);
recipe1.ingredients.forEach(elt=> console.log(`-${elt}`))
