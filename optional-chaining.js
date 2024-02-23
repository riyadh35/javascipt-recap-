// declare variable based on the name of an object property

const myProperty = { laptop: 1, mobile: 1, bluetooth: 2, monitor: "hp" };

const { monitor, laptop } = myProperty;

// kono object ba array ke destructing korte hoile tar object ba array onojayi korte hove.

// nested object with optional chaining

const company = {
  name: "Company",
  category: {
    mobile: "mobile app",
    web: {
      tech: {
        framework: "tailwindcss, bootstrap",
        library: "react.js",
        backend: "node.js",
      },
      service: "web development",
    },
  },
};

// destructing

console.log(company.category.web.service);

//
