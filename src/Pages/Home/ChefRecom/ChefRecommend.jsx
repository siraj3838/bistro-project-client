import img from '../../../assets/home/slide1.jpg'
import SectionTittle from '../../../components/SectionTittle/SectionTittle';
const ChefRecommend = () => {
    return (
        <div>
            <SectionTittle subHeading={'Should Try'} heading={'CHEF RECOMMENDS'}></SectionTittle>
            <div className="grid md:grid-cols-3 gap-6 my-10">
                <div className="bg-base-100 shadow-xl">
                    <figure><img className='w-full h-[300px]' src={img} alt="Shoes" /></figure>
                    <div className="card-body flex flex-col items-center">
                        <h2 className="card-title">Caeser Salad</h2>
                        <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-outline bg-slate-100 border-0 border-b-4 border-orange-400 mt-4">Add to Cart</button>
                        </div>
                    </div>
                </div>
                <div className="bg-base-100 shadow-xl">
                    <figure><img className='w-full h-[300px]' src={img} alt="Shoes" /></figure>
                    <div className="card-body flex flex-col items-center">
                        <h2 className="card-title">Caeser Salad</h2>
                        <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-outline bg-slate-100 border-0 border-b-4 border-orange-400 mt-4">Add to Cart</button>
                        </div>
                    </div>
                </div>
                <div className="bg-base-100 shadow-xl">
                    <figure><img className='w-full h-[300px]' src={img} alt="Shoes" /></figure>
                    <div className="card-body flex flex-col items-center">
                        <h2 className="card-title">Caeser Salad</h2>
                        <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-outline bg-slate-100 border-0 border-b-4 border-orange-400 mt-4">Add to Cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChefRecommend;