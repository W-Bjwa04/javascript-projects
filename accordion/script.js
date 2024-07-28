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

  
  
  const accordionContainer = document.querySelector('.accordion')

  function addAccordionData(){
    accordionContainer.innerHTML=data.map((dataItem)=>
        `<div class="accordion-item">
            <div class="accordion-title">
                <h3>${dataItem.question} </h3>
                <i class="fa-solid fa-arrow-down"> </i>
            </div>
            <div class="accordion-content">
                <p> ${dataItem.answer} </p>
            </div>
        </div>`          
    ).join('')   // convert this array into a single string (check demo.js)
  } 


  addAccordionData()

// getting all the titles 

const accordionTitles = document.querySelectorAll('.accordion-title')


accordionTitles.forEach((title)=>{

    title.addEventListener('click',(event)=>{
        //remove actice is previoulsy active
        if(title.classList.contains('active')){
            title.classList.remove('active')
        } // if not previoulsy active

        else{
            
            //before open this get the list of all the open classes

            let otherOpendedClasses = document.querySelectorAll('.active')

            console.log(otherOpendedClasses);
            //close all of them 

            otherOpendedClasses.forEach((openClass)=>{
                openClass.classList.remove('active')
            })

            // now active current class 
            title.classList.add('active')
        }
    },false)

})
