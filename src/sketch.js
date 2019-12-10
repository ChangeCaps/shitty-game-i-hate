let vec = new Vector(20, 100);

function setup() {
  // put setup code here

  let y = vec.mul(vec_from_num(5));

  console.log(y.normalize().len());
}

function draw() {
  // put drawing code here
}