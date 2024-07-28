const carData = [
  {
    id: "1",
    make: "Toyota",
    model: "Camry",
    year: "2020",
    description:
      "The Toyota Camry is a comfortable and reliable midsize sedan with a spacious interior and a reputation for longevity and dependability.",
    specifications: {
      engine: "2.5L 4-cylinder",
      transmission: "8-speed automatic",
      fuelType: "Gasoline",
      bodyStyle: "Sedan",
      drivetrain: "FWD",
      color: "White",
      mileage: "20000",
    },
  },
  {
    id: "2",
    make: "Honda",
    model: "Civic",
    year: "2019",
    description:
      "The Honda Civic is a compact car known for its fuel efficiency, sporty handling, and modern design. It's a popular choice for city driving.",
    specifications: {
      engine: "2.0L 4-cylinder",
      transmission: "CVT",
      fuelType: "Gasoline",
      bodyStyle: "Sedan",
      drivetrain: "FWD",
      color: "Black",
      mileage: "30000",
    },
  },
  {
    id: "3",
    make: "Ford",
    model: "Mustang",
    year: "2021",
    description:
      "The Ford Mustang is an iconic sports car with a powerful engine lineup, aggressive styling, and a rich history of performance and muscle.",
    specifications: {
      engine: "5.0L V8",
      transmission: "6-speed manual",
      fuelType: "Gasoline",
      bodyStyle: "Coupe",
      drivetrain: "RWD",
      color: "Red",
      mileage: "10000",
    },
  },
  {
    id: "4",
    make: "Chevrolet",
    model: "Tahoe",
    year: "2022",
    description:
      "The Chevrolet Tahoe is a full-size SUV with a strong V8 engine, plenty of towing capacity, and a spacious cabin that can accommodate large families and cargo.",
    specifications: {
      engine: "5.3L V8",
      transmission: "10-speed automatic",
      fuelType: "Gasoline",
      bodyStyle: "SUV",
      drivetrain: "4WD",
      color: "Blue",
      mileage: "5000",
    },
  },
  {
    id: "5",
    make: "Tesla",
    model: "Model 3",
    year: "2021",
    description:
      "The Tesla Model 3 is an all-electric sedan offering impressive range, cutting-edge technology, and a minimalist design. It's known for its acceleration and autopilot features.",
    specifications: {
      engine: "Electric",
      transmission: "1-speed automatic",
      fuelType: "Electric",
      bodyStyle: "Sedan",
      drivetrain: "RWD",
      color: "Silver",
      mileage: "15000",
    },
  },
  {
    id: "6",
    make: "BMW",
    model: "3 Series",
    year: "2020",
    description:
      "The BMW 3 Series is a luxury sports sedan that combines performance, comfort, and advanced technology. It's praised for its driving dynamics and premium interior.",
    specifications: {
      engine: "2.0L 4-cylinder turbo",
      transmission: "8-speed automatic",
      fuelType: "Gasoline",
      bodyStyle: "Sedan",
      drivetrain: "RWD",
      color: "Gray",
      mileage: "25000",
    },
  },
  {
    id: "7",
    make: "Mercedes-Benz",
    model: "E-Class",
    year: "2019",
    description:
      "The Mercedes-Benz E-Class is a midsize luxury sedan with a sophisticated design, a comfortable ride, and a wealth of advanced safety and technology features.",
    specifications: {
      engine: "3.0L V6",
      transmission: "9-speed automatic",
      fuelType: "Gasoline",
      bodyStyle: "Sedan",
      drivetrain: "AWD",
      color: "Black",
      mileage: "35000",
    },
  },
  {
    id: "8",
    make: "Audi",
    model: "Q5",
    year: "2022",
    description:
      "The Audi Q5 is a compact luxury SUV with a stylish design, a high-quality interior, and a smooth and engaging driving experience. It offers a variety of powertrains, including hybrid options.",
    specifications: {
      engine: "2.0L 4-cylinder turbo",
      transmission: "7-speed automatic",
      fuelType: "Gasoline",
      bodyStyle: "SUV",
      drivetrain: "AWD",
      color: "White",
      mileage: "5000",
    },
  },
  {
    id: "9",
    make: "Lexus",
    model: "RX",
    year: "2021",
    description:
      "The Lexus RX is a midsize luxury SUV known for its refined ride, plush interior, and strong reliability record. It's a popular choice for those seeking comfort and luxury.",
    specifications: {
      engine: "3.5L V6",
      transmission: "8-speed automatic",
      fuelType: "Gasoline",
      bodyStyle: "SUV",
      drivetrain: "AWD",
      color: "Silver",
      mileage: "20000",
    },
  },
  {
    id: "10",
    make: "Hyundai",
    model: "Elantra",
    year: "2020",
    description:
      "The Hyundai Elantra is a compact sedan offering great value with its long list of standard features, fuel efficiency, and comfortable ride. It's an affordable and practical choice.",
    specifications: {
      engine: "2.0L 4-cylinder",
      transmission: "CVT",
      fuelType: "Gasoline",
      bodyStyle: "Sedan",
      drivetrain: "FWD",
      color: "Blue",
      mileage: "30000",
    },
  },
];

document.addEventListener("DOMContentLoaded", () => {
  const accordionContainer = document.querySelector(".accordion");

  addCarDataToContainer();

  contentSliderMain();

  contentSliderSpec();

  function addCarDataToContainer() {
    accordionContainer.innerHTML = carData
      .map(
        (car) =>
          `<div class="accordin-item">
                <div class="accordin-title">
                    <h3>${car.make} ${car.model} </h3>
                </div>
                <div class="accordin-content">
                    <ul>
                        <li> <strong>Make :</strong> ${car.make} </li>
                        <li> <strong>Model :</strong> ${car.model} </li>
                        <li> <strong>Year :</strong> ${car.year} </li>
                        <li> <strong>Description :</strong> ${car.description} </li>
                    </ul>
                    <div class="specifications">
                        <h3 id="spec-heading"> Specifications </h3>
                        <ul class="specs-list">
                            <li> <strong>Engine :</strong> ${car.specifications.engine} </li>
                            <li> <strong>Transmission :</strong> ${car.specifications.transmission} </li>
                            <li> <strong>Fuel Type :</strong> ${car.specifications.fuelType} </li>
                            <li> <strong>Body Style :</strong> ${car.specifications.bodyStyle} </li>
                            <li> <strong>Drive Train :</strong> ${car.specifications.drivetrain} </li>
                            <li> <strong>Color :</strong> ${car.specifications.color} </li>
                            <li> <strong>Mileage :</strong> ${car.specifications.mileage} </li>
                        </ul>
                    </div>
                </div>
            </div>`).join("");
  }

  function contentSliderMain() {
    const titles = document.querySelectorAll(".accordin-title");

    titles.forEach((carTitle) => {
      carTitle.addEventListener(
        "click",
        function (event) {
          // deactivate if it is already activate
          if (carTitle.classList.contains("active")) {
            carTitle.classList.remove("active");
          }

          // if not active
          else {
            // check if others are activate

            const otherActivateList = document.querySelectorAll(".active");

            if (otherActivateList) {
              otherActivateList.forEach((listItem) => {
                listItem.classList.remove("active");
              });
            }

            // now activate the current

            carTitle.classList.add("active");
          }
        },
        false
      );
    });
  }

  function contentSliderSpec() {
    // get the list of all specs

    const specList = document.querySelectorAll("#spec-heading");
    console.log(specList);

    // add event listener to each specification

    specList.forEach(function (spec) {
      spec.addEventListener(
        "click",
        function (event) {
            event.stopPropagation(); // Add this line to stop event propagation
            event.preventDefault(); // Add this line to prevent default behavior

          // check if previously active

          if (spec.classList.contains("active")) {
            spec.classList.remove("active");
            spec.parentElement.querySelector(".specs-list").style.display = "none";
          } else {
            //get all the previoulsy active spec

            const previouslyActive = document.querySelectorAll(
              "specifications.active"
            );

            if (previouslyActive) {
              previouslyActive.forEach((listItem) => {
                listItem.classList.remove("active");
                listItem.parentElement.querySelector(".specs-list").style.display = "none";
              });
            }

            // active the current spec
            spec.classList.add("active");
            spec.parentElement.querySelector(".specs-list").style.display = "block";
          }
        },
        false
      );
    });
  }
});
