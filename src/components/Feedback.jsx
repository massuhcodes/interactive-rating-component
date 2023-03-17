// Feedback.jsx

export default function Feedback(props) {
    return (
        <span className="w-[52%] text-center rounded-full py-1 text-[0.85rem] bg-[#252d37] text-[#fb7413]" >You selected {props.rating} out of 5</span>
    )
}