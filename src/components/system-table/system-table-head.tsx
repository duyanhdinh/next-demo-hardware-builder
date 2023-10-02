export default function SystemTableHead() {
    return (
        <div className="w-full h-[40px] bg-gray-800 flex text-white font-bold">
            <div className="w-1/8 pl-2 flex justify-start items-center"><span>Product</span></div>
            <div className="w-5/8 pl-2 flex justify-start items-center"><span>Title</span></div>
            <div className="w-1/12 pl-2 flex justify-start items-center"><span>Price</span></div>
            <div className="w-1/12 pl-2 flex justify-center items-center"><span>Link</span></div>
            <div className="w-1/12 pl-2 flex justify-center items-center"><span>Picked</span></div>
        </div>
    )
}