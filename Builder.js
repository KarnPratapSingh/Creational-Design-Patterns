class Address{
    constructor(houseNo,street){
        this.houseNo=houseNo;
        this.street= street;
    }
}

class User{
    constructor(name,age,phone,address){ //there could be many more parameters here
        this.name=name;
        this.age=age;
        this.phone=phone;
        this.address=address;
    }


}

// const user= new User('Karn', undefined,undefined,new Address('79-B','Y-Street')); //we have to adhere to the sequence in which we are passing parameters
// console.log(user);

class UserNew{
    constructor(name){ 
        this.name=name;
    }
   
}


class userBuilder{
    constructor(name){
        this.user=new UserNew(name);
    }

setAge(age){
    this.user.age=age;
    return this;
}

setPhone(phone){
    this.user.phone=phone;
    return this;
}

setAddress(address){
    this.user.address=address;
    return this;
}

build(){
    return this.user;
}

}

let user= new userBuilder('Karn').setAge(23).build();
console.log(user);