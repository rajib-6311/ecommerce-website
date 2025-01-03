import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";
import Title from "../components/Title";
import ProductItem from "../components/ProductItem";

const Collection = () => {
    const {products} = useContext(ShopContext)
    const [showFilter, setShowFilter] = useState(false);
    const [filterProducts, setFilterProducts] = useState([]);
    const [category , setCategory] = useState([]);
    const [subCategory, setSubCategory] = useState([]);   
    
    const toggleCategory = (e) => {
        if(category.includes(e.target.value)){
          setCategory(prev => prev.filter(item =>item !== e.target.value))
        }
        else{
          setCategory(prev => [...prev, e.target.value])
        }
    }

    const toggleSubCategory = (e) => {
      if(subCategory.includes(e.target.value)){
        setSubCategory(prev => prev.filter(item => item !== e.target.value))
      }
      else{
        setSubCategory(prev => [...prev, e.target.value])
      }
    }
  // category and subCategory create in one filter 
    const applyFilter = () => {
      let productsCopy = products.slice();

      if(category.length > 0) {
        productsCopy = productsCopy.filter(item => category.includes(item.category))
      }
      if(subCategory.length > 0) {
        productsCopy = productsCopy.filter(item => subCategory.includes(item.subCategory))
      }
      setFilterProducts(productsCopy)
    }

    useEffect(()=>{
        applyFilter();
    },[category, subCategory])


    useEffect(()=>{
        setFilterProducts(products)
    },[products])
    
    return (
        <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t">
        {/* Filter Options   */}
        <div className="min-w-60">
        <p onClick={()=>setShowFilter(!showFilter)} className="my-2 text-xl flex items-center cursor-pointer gap-2">FILTERS
        <img className={`h-3 sm:hidden ${showFilter ? 'rotate-90':''}`} src={assets.dropdown_icon} alt="" />
        </p>
        {/* Category filter  */}
        <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? '': 'hidden'} sm:block`}>
             <p className="mb-3 text-sm font-medium">CATEGORIES</p>
             <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
              <p className="flex gap-2">
                <input className="w-3" type="checkbox" value={'Men'} onChange={toggleCategory} />Men
              </p>
              <p className="flex gap-2">
                <input className="w-3" type="checkbox" value={'Women'} onChange={toggleCategory} />Women
              </p>
              <p className="flex gap-2">
                <input className="w-3" type="checkbox" value={'Kids'} onChange={toggleCategory} />kids
              </p>
             </div>
        </div>
        {/* SubCategory filter  */}
        <div className={`border border-gray-300 pl-5 py-3 my-5 ${showFilter ? '': 'hidden'} sm:block`}>
             <p className="mb-3 text-sm font-medium">TYPE</p>
             <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
              <p className="flex gap-2">
                <input className="w-3" type="checkbox" value={'Topwear'} onChange={toggleSubCategory} />Topwear
              </p>
              <p className="flex gap-2">
                <input className="w-3" type="checkbox" value={'Bottomwear'} onChange={toggleSubCategory} />Bottomwear
              </p>
              <p className="flex gap-2">
                <input className="w-3" type="checkbox" value={'Winterwear'} onChange={toggleSubCategory} />Winterwea
              </p>
             </div>
        </div>
        </div>
            {/* Right side  */}
            <div className="flex-1">
            <div className="flex justify-between text-base sm:text-2xl mb-4">
            <Title text1={'ALL'} text2={'COLLECTION'}/>
            {/* product sort  */}
            <select className="border-2 border-gray-300 text-sm px-2 ">
            <option value="relevant">Sort by: relevant</option>
            <option value="Low-High">Sort by: High to Low</option>
            <option value="High-Low">Sort by: Low to High</option>
            </select>
            </div>
            {/* Map Products  */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
                {
                    filterProducts.map((item, index)=>(
                        <ProductItem 
                        key={index}
                            item={item}
                        />
                    ))
                }
            </div>
            </div>
        </div>
    );
};

export default Collection;