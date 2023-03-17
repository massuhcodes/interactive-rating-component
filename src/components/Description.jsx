// PromptDescription.jsx

export default function Description(props) {
    return <p className={`text-[#959eac] text-[0.95rem] mt-[-0.9rem] text-${props.view === "final" ? "center" : ""}`}>{props.value}</p>
}