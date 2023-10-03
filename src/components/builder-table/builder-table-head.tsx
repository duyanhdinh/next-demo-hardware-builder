export default function BuilderTableHead() {
    return (
        <div className="w-full h-[40px] bg-gray-800 text-white font-bold hidden lg:flex">
            <div className="w-1/8 pl-2 flex justify-start items-center"><span>Component</span></div>
            <div className="w-1/8 pl-2 flex justify-start items-center"><span>Product</span></div>
            <div className="w-1/2 pl-2 flex justify-start items-center"><span>Title</span></div>
            <div className="w-1/12 pl-2 flex justify-start items-center"><span>Price</span></div>
            <div className="w-1/12 pl-2 flex justify-center items-center"><span>Link</span></div>
            <div className="w-1/12 pl-2 flex justify-center items-center"><span>Remove</span></div>
        </div>
    )
}