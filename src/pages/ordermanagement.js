import React, { useState ,useEffect} from "react";
import ItemListCard from '../components/itemlistcard'

const OrderManagement = () => {

  const [listItem , setlistItme] = useState('get-pizza');

  const PIZZA_URL = `http://localhost:8080/api/v1/pizza/${listItem}`;
  
  const [items, setitems] = useState([]);

//   ----------------fetch-data-function-----------
async function fetchItemsData() {
  
  try {
    const res = await fetch(PIZZA_URL , {method: 'GET'});
    const data = await res.json();
    console.log(data?.data);
    setitems(data?.data);
  } catch (error) {
    console.log("error aaye hai home page ke fet function me ");
    setitems([]);
  }
  
}


//   -----------to-run-fetch-function-----------------
useEffect(() => {
  console.log("Item is : " , listItem);
  fetchItemsData();
}, [listItem]);



  // Manage the tabs: New, Preparing, Ready, etc.
  const [activeTab, setActiveTab] = useState("new");

  const tabs = ["New", "Preparing", "Ready", "Picked Up", "Past Orders"];

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-900 text-white flex flex-col fixed h-full">
        <div className="p-4 text-lg font-semibold">Menu</div>
        <nav className="flex-1">
          <ul className="space-y-4 px-4">
            <li onClick={()=>setlistItme('get-pizza')} className="hover:bg-gray-700 p-2 rounded cursor-pointer">
              Pizza
            </li>
            <li onClick={()=>setlistItme('get-burgers')} className="hover:bg-gray-700 p-2 rounded cursor-pointer">
              Burgers
            </li>
            <li onClick={()=>setlistItme('get-pasta')} className="hover:bg-gray-700 p-2 rounded cursor-pointer">
              Pasta
            </li>
            <li onClick={()=>setlistItme('get-chinise')} className="hover:bg-gray-700 p-2 rounded cursor-pointer flex justify-between">
              Chinese
            </li>
            <li onClick={()=>setlistItme('get-pizza')} className="hover:bg-gray-700 p-2 rounded cursor-pointer">
              Maggi
            </li>
            <li onClick={()=>setlistItme('get-beverage')} className="hover:bg-gray-700 p-2 rounded cursor-pointer">
              Beverages
            </li>
            <li onClick={()=>setlistItme('get-dessert')} className="hover:bg-gray-700 p-2 rounded cursor-pointer">
              Dessert
            </li>
            <li className="hover:bg-gray-700 p-2 rounded cursor-pointer">
              Help
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 p-8 ml-64">
        {/* Top Bar */}
        <header className="flex justify-between items-center bg-white shadow p-4 mb-8">
          <div>
            <h1 className="text-xl font-semibold">BQuick</h1>
            <p className="text-gray-600">KIET | ORDER ID: XXXXX</p>
          </div>
          <button className="bg-orange-500 text-white px-4 py-2 rounded">
            FAQs
          </button>
        </header>

        {/* Tabs */}
        <div className="border-b border-gray-300 mb-4">
          <ul className="flex space-x-6 text-lg">
            {tabs.map((tab) => (
              <li
                key={tab}
                className={`cursor-pointer pb-2 ${
                  activeTab === tab.toLowerCase()
                    ? "border-orange-500 text-orange-500"
                    : "text-gray-600"
                }`}
                onClick={() => setActiveTab(tab.toLowerCase())}
              >
                {tab}
              </li>
            ))}
          </ul>
        </div>
         {/* -----------------items listed here--------------- */


        items ? (
        <div
        className="grid md:grid-cols-3 sm:grid-cols-2 sx:grid-cols-1 lg:grid-cols-4 max-w-6xl p-2 mx-auto space-y-10 space-x-5
        min-h-[80px]"
        >
        {
              items.map((item) => (
                <ItemListCard key={item.id} item={item}/>) )
        }
        </div>
      ) : (
        <div
        className="flex justify-center items-center"
        >
          <p>No items Found</p>
        </div>
      )}

        
      </div>
      
    </div>
  );
};

export default OrderManagement;
