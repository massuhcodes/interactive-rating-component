// RatingButton.jsx

export default function RatingButton(props) {
    const setRating = props.setRating
    const index = props.index
    const bg = props.bg
    const hoverBg = props.hoverBg
    const textColor = props.textColor
    return <button onClick={() => setRating(index)} className={`${bg} transition-colors ease-in duration-[250ms] hover:text-white ${hoverBg} ${textColor} w-12 h-12 flex text-[0.8rem] justify-center items-center rounded-full`}>{index}</button>
}