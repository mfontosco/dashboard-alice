

const SquareColor = ({ boxColor,onClick }) => {

    // Map custom color names to Tailwind CSS class names
    // const colorClasses = {
    //     green: 'bg-green-500',
    //     red: 'bg-red-500',
    //     yellow: 'bg-yellow',
    //     gold: 'bg-yellow-500',
    //     black:"bg-black",
    //     teal:"bg-teal" ,
    //     white:"bg-white"
    // };

    // Get the corresponding Tailwind CSS class for the provided boxColor
    // const colorClass = colorClasses[boxColor];

    return (
        <div className="flex flex-col justify-center ">
            <div onClick={onClick} style={{backgroundColor:`${boxColor}`}} className={`h-12 w-12 cursor-pointer  border`}>
                {/* Content */}
            </div>
            <p>{boxColor}</p>
        </div>
    );
}

export default SquareColor;
