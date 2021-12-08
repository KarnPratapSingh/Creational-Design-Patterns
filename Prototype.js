class Brands {
  constructor() {
    this._name = 'Company1';
    this._items = [];
  }


  addItemToList(item) {
    this._items.push(item);
  }

  clone() {
    let proto = Object.getPrototypeOf(this);
    // console.log(">>",proto);
    let clone = Object.create(proto);
    // console.log(">>>",clone);
    clone._name = this._name;
    clone._items = [...this._items];

    return clone;
  }
}

// first object
const Company1 = new Brands();
Company1.addItemToList("Screw-Driver");
Company1.addItemToList("Wrench");


//cloning the first obj created:
const Company2 = Company1.clone();
Company2._name = "Company2";
Company2.addItemToList("Bolts");

//cloning the second cloned object:
const company3 = Company2.clone();
company3._name = "Company3";
company3.addItemToList("Hammer");

console.log(Company1);
console.log(Company2);
console.log(company3);
