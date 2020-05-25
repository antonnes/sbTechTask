# sbTechTask

## Install

 Clone the project and run npm install
 
 ## Authorization
 
 In order to obtain JWT token, send POST request to "auth/login" with the following fields:
 
 ```bash
{
  username: testUser,
  password: 123456,
  country: 'bg'
}
```

## VAT Service 

User [vatlayer](https://vatlayer.com/quickstart) as VAT API, since the https://jsonvat.com/ is dead and not supported.

## Bugs 

While developing, came across the following bug: The VAT would be applied every time the products are requested. First I was using plain
array for in-memory database, but later switched to nest.js plugin, but the the problem persisted. Even when tried to copy the array with 
destructor and using the old way (array.slice) nothing changed. 

Despite using ValidationPipe with transform set to true, the properties of newly created orders will be passed as arrays.

## Comments

For the sake of simplicity did not used .env file and hardcoded values on several places like expiration time in auth module and 
VAT API url in vat.service.
