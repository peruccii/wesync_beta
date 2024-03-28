import * as React from "react"

export default function Block({
  subheading,
  heading,
  text,
  buttons,
  cards,
  columns = 3,
  ...props
}: any) {
  return (
    <section py="4|6|12|20" {...props}>
      <div >
        <div className="flex items-center">
          {subheading && <p >{subheading}</p>}
          {heading && (
            <h2 >
              {heading}
            </h2>
          )}
          {text && (
            <p className="mt-2">
              {text}
            </p>
          )}
        </div>
        {cards && (
          <div className='grid grid-cols-2  gap-2'>
            {cards.map((card: any, index: any) => (
              <Card key={index} {...card} />
            ))}
          </div>
        )}
        {buttons}
      </div>
    </section>
  )
}

export function Card({ heading, text, image, link, ...props }: any) {
  return (
    <div borderWidth="1" rounded="lg" p="6" {...props}>
      {image && <img w="full" mb="4" rounded="md" {...image} />}
      <h4 >{heading}</h4>
      {text && (
        <p >
          {text}
        </p>
      )}
      {link}
    </div>
  )
}