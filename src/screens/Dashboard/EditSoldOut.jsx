import EditProduct from '../../components/EditProduct';

const EditSoldOut = () => {
    return (
        <div className='w-full md:w-[80%]  rounded-md bg-white py-6'>
            <h2 className='text-center mt-4 text-xl mb-4 font-bold'>Edit Draft</h2>
            <p className='text-center mb-4'>Last Saved: 31/01/24 00:12</p>
            <hr />
            <div className='h-auto'>
                <EditProduct />
            </div>
        </div>
    );
}

export default EditSoldOut;
