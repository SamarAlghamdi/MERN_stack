const express = require('express');
const faker = require('faker');
const app = express();
console.log(faker.random.uuid())

const port = 8000;

class User {
    constructor(){
        this._id=faker.random.uuid();
        this.firstName=faker.name.firstName();
        this.lastName=faker.name.lastName();
        this.phonNumber=faker.phone.phoneNumber();
        this.email=faker.internet.email();
        this.password=faker.phone.phoneNumber();
    }
}

class Company{
    constructor() {
        this._id=faker.random.uuid();
        this.name=faker.company.companyName();
        this.address={
            street: faker.address.streetName(),
            city: faker.address.cityName(),
            state: faker.address.state(),
            zipCode: faker.address.zipCode(),
            country: faker.address.country()
        }
    }
}

app.get("/api/users/new", (req, res) => {
    res.json(new User())
})

app.get("/api/companies/new", (req, res) => {
    res.json(new Company())
})

app.get("/api/user/company/new", (req, res) => {
    res.json({Company: new Company(), user: new User()})
})
app.listen(port, ()=> {
    console.log("server listening on "+port)
});

