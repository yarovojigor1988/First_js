/// 1

someArray = [1,12,123,123,12,31,23,123,3]

function funcFirstHW (someArray) {
    	const [first, ...other] = someArray;
return console.log(`first: ${first}, other: ${other}`);
}

funcFirstHW(someArray);

/// 2 

const organisation = {  
    name: 'Google',   
    info: { employees: ['Vlad', 'Olga'], partners: ['Microsoft', 'Facebook', 'Xing']   } 
    };

const organisationTwo = {  
    info: { employees: ['Petr'], partners: ['fly-by-night company']   } 
    };

function funcSecondHW (a) {
    const {name: name1 = "Unknown", info: {partners: [firstPartner = "", secondPartner = ""] }} = a;
    return console.log(`name: ${name1}, partners: ${firstPartner} ${secondPartner}`);
};

funcSecondHW(organisation);
funcSecondHW(organisationTwo);