import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { categoriesData } from "../../static/data";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { createProduct } from "../../redux/actions/product";

const CreateProduct = () => {
  const { seller } = useSelector((state) => state.seller);
  const { success, error } = useSelector((state) => state.products);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [tags, setTags] = useState("");
  const [stock, setStock] = useState();
  const [images, setImages] = useState([]);
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [originalPrice, setOriginalPrice] = useState();
  const [discountPrice, setDiscountPrice] = useState();

  useEffect(() => {
    if (error) {
      toast.error(error);
    }
    if (success) {
      toast.success("Product created successfully!");
      navigate("/dashboard");
      window.location.reload() ;
    }
  }, [dispatch, error, success]);

  const handleImageChange = (e) => {
    e.preventDefault();

    let files = Array.from(e.target.files);
    setImages((prevImages) => [...prevImages, ...files]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newForm = new FormData();

    images.forEach((image) => {
      newForm.append("images", image);
    });
    newForm.append("name", name);
    newForm.append("tags", tags);
    newForm.append("stock", stock);
    newForm.append("shopId", seller._id);
    newForm.append("category", category);
    newForm.append("description", description);
    newForm.append("originalPrice", originalPrice);
    newForm.append("discountPrice", discountPrice);

    dispatch(createProduct(newForm));
  };

  return (
    <div className="h-[80vh] w-[90%] 800px:w-[50%] bg-[white] shadow mt-5 mb-5 rounded-[4px] p-3 overflow-y-scroll ">
      <div>
        <h3 className="text-[30px] font-[600]  font-Poppins  text-center">
          Create Product
        </h3>
      </div>
      {/* product form  */}
      <form onSubmit={handleSubmit}>
        <br />
        <div>
          <label className="pb-2">
            Name <span className="text-red-500">*</span>
            <input
              className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 sm:text-sm"
              type="text"
              name="name"
              value={name}
              placeholder="Enter your product name..."
              onChange={(e) => setName(e.target.value)}
            />
          </label>
        </div>

        <br />
        <div>
          <label className="pb-2">
            Category <span className="text-red-500">*</span>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full mt-2 border h-[35px] rounded-[5px]"
            >
              <option value="Choose a category">Choose a category</option>
              {categoriesData &&
                categoriesData.map((i) => (
                  <option key={i.title} value={i.title}>
                    {i.title}
                  </option>
                ))}
            </select>
          </label>
        </div>
        <br />
        <div>
          <label className="pb-2">
            Tags
            <input
              className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 sm:text-sm"
              type="text"
              name="tags"
              value={tags}
              placeholder="Enter your product tags..."
              onChange={(e) => setTags(e.target.value)}
            />
          </label>
        </div>
        <br />
        <div>
          <label className="pb-2">
            Original Price <span className="text-red-500">*</span>
            <input
              className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 sm:text-sm"
              type="number"
              name="price"
              value={originalPrice}
              placeholder="Enter your product price..."
              onChange={(e) => setOriginalPrice(e.target.value)}
            />
          </label>
        </div>
        <br />
        <div>
          <label className="pb-2">
            Price (with discount)
            <input
              className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 sm:text-sm"
              type="number"
              name="price"
              value={discountPrice}
              placeholder="Enter your product price with discount..."
              onChange={(e) => setDiscountPrice(e.target.value)}
            />
          </label>
        </div>
        <br />
        <div>
          <label className="pb-2">
            Product Stock <span className="text-red-500">*</span>
            <input
              className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 sm:text-sm"
              type="number"
              name="stock"
              value={stock}
              placeholder="Enter your product stock..."
              onChange={(e) => setStock(e.target.value)}
            />
          </label>
        </div>
        <br />
        <div>
          <label className="pb-2">
            Description <span className="text-red-500">*</span>
            <textarea
              cols="30"
              rows="8"
              required
              type="text"
              name="description"
              value={description}
              placeholder="Enter your product description..."
              onChange={(e) => setDescription(e.target.value)}
              className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 sm:text-sm"
            ></textarea>
          </label>
        </div>
        <br />
        <div>
          <label className="pb-2">
            Upload Images <span className="text-red-500">*</span>
            <input
              type="file"
              name="images"
              id="upload"
              className="hidden"
              multiple
              onChange={handleImageChange}
            />
            <div className="w-full flex items-center flex-wrap">
              {images &&
                images.map((i, index) => {
                  return (
                    <img
                      src={URL.createObjectURL(i)}
                      key={index}
                      alt=""
                      className="h-[120px] border-[2px] border-[black] w-[120px] object-cover m-2"
                    />
                  );
                })}
              <label htmlFor="upload">
                <AiOutlinePlusCircle
                  size={50}
                  className="ml-10 mt-3"
                  color="#555"
                />
              </label>
            </div>
            <br />
          </label>
        </div>
        <br />
        <div>
          <button
            onClick={handleSubmit}
            className="mt-2 cursor-pointer hover:bg-red-600 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 sm:text-sm"
          >
            {" "}
            Create Product
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateProduct;
