# TestCases for Developer
-Manual Testing
-Write code to test .

# Types of testing (developer)
- Unit testing
- Integration Testing
- E2E (End to end) testing 

# React-testing library
-it uses jest(js delightfull testing library)\


# Testing begins

-in sum.test.js

import {sum} form "../sum"

test("Description",()=>{
    const result=sum(3,4);

    expect(result).toBe(7);
})

npm run test