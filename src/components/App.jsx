// App.jsx

import Star from './Star';
import Title from './Title';
import Description from './Description';
import RatingButton from './RatingButton';
import SubmitButton from './SubmitButton';
import Image from './Image';
import Feedback from './Feedback';
import { v4 as uuidv4 } from 'uuid'
import { Fragment, useState } from 'react';

export default function App() {

  const [rating, setRating] = useState()
  const [view, setView] = useState("initial")

  const title = view === "initial" ? "How did we do?" : "Thank you!"
  const description = view === "initial" ? "Please let us know how we did with your support request. All feedback is appreciated to help us improve our offereing!" : "We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!"

  let buttons = [];
  for (let i = 1; i <= 5; i++) {
    const bg = rating === i ? "bg-[#7c8798]" : "bg-[#252d37]"
    const textColor = rating === i ? "text-white" : "text-[#7c8798]"
    const hoverBg = rating === i ? "" : "hover:bg-[#fb7413]"
    buttons.push(<RatingButton key={uuidv4()} setRating={setRating} index={i} bg={bg} textColor={textColor} hoverBg={hoverBg} />)
  }

  const submit = () => {
    if (rating) setView("final")
  }

  return (
    <div className={`max-w-[412px] bg-gradient-radial from-[#232A34] to-[#181E27] mx-5 rounded-[12px] h-[360px] flex flex-col justify-evenly px-7 pt-1 ${view === "final" ? "place-items-center" : ""}`}>
      {view === "initial" ?
        <Fragment>
          <Star />
          <Title value={title} />
          <Description value={description} />
          <div className="flex justify-between items-center">
            {buttons}
          </div>
          <SubmitButton submit={submit} />
        </Fragment> :
        <Fragment>
          <Image />
          <Feedback rating={rating} />
          <Title value={title} />
          <Description value={description} view={view} />
        </Fragment>
      }
    </div>
  )
}
