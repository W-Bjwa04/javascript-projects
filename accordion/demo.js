const data = [
    {
      id: "1",
      question: "What are accordion components?",
      answer:
        "Accordion components are user interface elements used for organizing and presenting content in a collapsible manner. They typically consist of a header, content, and an expand/collapse action.",
    },
    {
      id: "2",
      question: "What are they used for?",
      answer:
        "They are commonly employed in various contexts, including FAQs, product descriptions, navigation menus, settings panels, and data tables, to save screen space and provide a structured and user-friendly interface for presenting information or options.",
    },
    {
      id: "3",
      question: "Accordion as a musical instrument",
      answer:
        "The accordion is a musical instrument with a keyboard and bellows. It produces sound by air passing over reeds when the player expands or compresses the bellows, used in various music genres.",
    },
    {
      id: "4",
      question: "Can I create an accordion component with a different framework?",
      answer:
        "Yes of course, it is very possible to create an accordion component with another framework.",
    },
  ];

  
  
  
  let result

  function addAccordionData(){
    result=data.map((dataItem)=>
        `<div class="accordion-item">
            <div class="accordion-title">
                <h3>${dataItem.question} </h3>
                <i class="fa-solid fa-arrow-up"> </i>
            </div>
        </div>`          
    )
  } 


  addAccordionData()

  console.log(result);


  const carNames = [
    "Tesla Model S",
    "Ford Mustang",
    "Chevrolet Camaro",
    "BMW 3 Series",
    "Audi A4",
    "Honda Civic",
    "Toyota Corolla",
    "Mercedes-Benz C-Class",
    "Volkswagen Golf",
    "Nissan Altima"
];

    result = null
    function mapDemo(){
        result=carNames.map((car)=>
            car.toUpperCase()
        )
    }
    mapDemo()

    console.log(result);
