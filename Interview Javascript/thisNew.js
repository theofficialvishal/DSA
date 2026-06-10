const cateringCompany = {
  owner: "Amit",
  chef: function () {
    console.log("Khana banaya: " + this.owner);
  },
};

cateringCompany.chef(); // Output: Khana banaya: Amit

const raju = {
    owner: "Raju",
    cook: cateringCompany.chef
}

raju.cook()


const akelaChef = cateringCompany.chef;
akelaChef(); // Output: Khana banaya: undefined (ya Window object browser mein)




// Yeh ek blueprint hai (Constructor Function)
function Franchise(city, ownerName) {
    // Step 1 & 2 (Piche se): this = {} ban gaya automatically
    
    this.city = city;
    this.owner = ownerName;
    this.serve = function() {
        console.log(`Serving in ${this.city} by ${this.owner}`);
    };

    // Step 4 (Piche se): return this; ho gaya automatically
}

// `new` button dabaya!
const delhiFranchise = new Franchise("Delhi", "Rahul");
const mumbaiFranchise = new Franchise("Mumbai", "Suresh");

delhiFranchise.serve();  // Output: Serving in Delhi by Rahul
mumbaiFranchise.serve(); // Output: Serving in Mumbai by Suresh