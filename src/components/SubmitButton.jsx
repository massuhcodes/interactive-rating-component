// SubmitButton.jsx

export default function SubmitButton(props) {
    return <button onClick={props.submit} className="tracking-[0.13rem] text-white text-[0.8rem] w-full bg-[#fb7413] uppercase rounded-full hover:bg-white hover:text-[#fb7413] p-3 transition-colors ease-in duration-[250ms]">Submit</button>
}