import { Link } from "react-router-dom";

const MiniHeader = () => {
    const categories = [
        "All ", "Electronics", "Clothing", "Home & Kitchen", "Beauty", "Toys",
        "Sports", "Automotive", "Books", "Movies & TV", "Music",
        "Video Games", "Pet Supplies", "Grocery", "Health"
    ];

    return (
        <>
            <div className=" max-xl:hidden bg-customBlue1 container-fluid pl-14 pr-14 text-white mx-auto px-4 py-2">
                <ul className="flex justify-between items-center flex-wrap ">
                    {categories.map((category, index) => (
                        <Link to={category} key={index} className="whitespace-nowrap hover:border-b hover:cursor-pointer">
                            {category}
                        </Link>
                    ))}
                </ul>
            </div>
        </>
    );
}

export default MiniHeader;
