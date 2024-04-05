import React from 'react'
import FAQCard from './FAQCard'
const FaqData = [
    {
      question: "Can AI dubbing make my videos sound like a Hollywood blockbuster?",
      answer: "Etiam posuere metus vel neque imperdiet, vel condimentum erosconsequat. Donec in sapien sed nisi ullamcorper viverra at nonnulla. Quisque hendrerit tellus id gravida rutrum. Praesent exlorem, imperdiet sed sem eget, tempor fringilla urna."
    },
    {
      question: "Will AI dubbing turn my videos into a multilingual masterpiece?",
      answer: "Etiam posuere metus vel neque imperdiet, vel condimentum erosconsequat. Donec in sapien sed nisi ullamcorper viverra at nonnulla. Quisque hendrerit tellus id gravida rutrum. Praesent exlorem, imperdiet sed sem eget, tempor fringilla urna."
    },
    {
      question: "Can AI dubbing make my characters sound like superheroes or villains?",
      answer: "Etiam posuere metus vel neque imperdiet, vel condimentum erosconsequat. Donec in sapien sed nisi ullamcorper viverra at nonnulla. Quisque hendrerit tellus id gravida rutrum. Praesent exlorem, imperdiet sed sem eget, tempor fringilla urna."
    },
    {
      question: "Will AI dubbing make my videos 'sing' with expressive voices?",
      answer: "Etiam posuere metus vel neque imperdiet, vel condimentum erosconsequat. Donec in sapien sed nisi ullamcorper viverra at nonnulla. Quisque hendrerit tellus id gravida rutrum. Praesent exlorem, imperdiet sed sem eget, tempor fringilla urna."
    },

  ]

const FAQ = () => {
    return (
        <div className="items-center justify-center sm:justify-start flex flex-col w-[95%] mx-auto gap-3" >
          {
            FaqData.map((item, index) => (
              FAQCard(item, index)
            ))
          }
        </div>
      )
}

export default FAQ