'use client'
import { useState } from "react"
import { FaCss3, FaFigma, FaHtml5, FaJs, FaReact, FaWordpress } from "react-icons/fa";
import { SiAdobephotoshop, SiAdobexd, SiFramer, SiNextdotjs } from "react-icons/si";
const aboutData = [
  {
    title: 'skills',
    info: [
      {
        title: 'Web Development',
        icons: [
          <FaHtml5 />,
          <FaCss3 />,
          <FaJs />,
          <FaReact />,
          <SiNextdotjs />,
          <SiFramer />,
          <FaWordpress />,
        ],
      },
      {
        title: 'UI/UX Design',
        icons: [<FaFigma />, <SiAdobexd />, <SiAdobephotoshop />],
      },
    ],
  },
  {
    title: 'awards',
    info: [
      {
        title: 'Webby Awards - Honoree',
        stage: '2011 - 2012',
      },
      {
        title: 'Adobe Design Achievement Awards - Finalist',
        stage: '2009 - 2010',
      },
    ],
  },
  {
    title: 'experience',
    info: [
      {
        title: 'UX/UI Designer - XYZ Company',
        stage: '2012 - 2023',
      },
      {
        title: 'Web Developer - ABC Agency',
        stage: '2010 - 2012',
      },
      {
        title: 'Intern - DEF Corporation',
        stage: '2008 - 2010',
      },
    ],
  },
  {
    title: 'credentials',
    info: [
      {
        title: 'Web Development - ABC University, LA, CA',
        stage: '2011',
      },
      {
        title: 'Computer Science Diploma - AV Technical Institute',
        stage: '2009',
      },
      {
        title: 'Certified Graphic Designer - ABC Institute, Los Angeles, CA',
        stage: '2006',
      },
    ],
  },
];
export default function About() {
  const [index, setIndex] = useState(0)
  //impoortar circle
  return (
    <div>

      <div>
        About
      </div>
      <div className="container">
        <div>Text</div>
        <div>
          <div>
            {aboutData.map((item, itemIndex) => {
              return (
                <div key={itemIndex}>
                  {item.title}
                </div>
              )
            })}
          </div>
          <div>{aboutData[index].info.map((item, itemIndex) => {
            return (
              <div key={itemIndex}>
                <div>{item.title}</div>
                <div>-</div>
                <div>{item.stage}</div>
                {item.icons?.map((icon, itemIndex) => {
                  return <div key={itemIndex}>{icon}</div>
                })}
              </div>
            )
          })}</div>
        </div>

      </div>
    </div>
  )
}