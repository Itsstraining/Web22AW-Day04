//Shop
class shopInfo {
    /**
     * 
     * @param {String} shopName 
     * @param {String} shopAddress 
     */
    constructor (shopName, shopAddress) {
        this._shopName = shopName; //Tên cửa hàng
        this._shopAddress = shopAddress; //Địa chỉ cửa hàng
        this._items = []; //Mảng chứa các sản phẩm
        this._vendorName = []; //Mảng chứa các nhà cung cấp
    }

    //Đăng ký nhà cung cấp
    registerVendor (_vendorName, _vendorAddress) {
        this._vendorName.push(new shopVendor(_vendorName, _vendorAddress));
    }

    //Thêm sản phẩm mới
    registerItems (_itemName, _itemPrice, _itemQuantity , _itemVendor) {
        let foundVendor = this._vendorName.find((vendor) => vendor._vendorName === _itemVendor);
        
        if (foundVendor === undefined) {
            throw new Error("Vendor not found");
        }
        
        this._items.push(new shopItems(_itemName, _itemPrice, _itemQuantity , _itemVendor));
    }

    /**
     * @return {shopItems[]}
     */
    getItems () {
        return this._items;
    }

    //Mua hàng 
    registerBuyitems (_itemName, _itemQuantity) {
        let foundItem = this._items.find((item) => item._itemName === _itemName);
        
        if (foundItem === undefined) {
            throw new Error("Item not found");
        }
        
        this._items.find((item) => item._itemName === _itemName)._itemQuantity -= _itemQuantity;
    }
}

//Hàng trong shop
class shopItems {
    /**
     * 
     * @param {String} itemName 
     * @param {Number} itemPrice 
     * @param {Number} itemQuantity 
     * @param {String} itemVendor 
     */
    constructor (itemName, itemPrice, itemQuantity, itemVendor) {
        this._itemName = itemName; //Tên sản phẩm
        this._itemPrice = itemPrice; //Giá sản phẩm
        this._itemQuantity = itemQuantity; //Số lượng sản phẩm
        this._itemVendor = itemVendor; //Nhà cung cấp sản phẩm
    }
}

//Nhà cung cấp của shop
class shopVendor {
    /**
     * 
     * @param {String} vendorName 
     * @param {String} vendorAddress 
     */
    constructor (vendorName, vendorAddress) {
        this._vendorName = vendorName; //Tên nhà cung cấp
        this._vendorAddress = vendorAddress; //Địa chỉ nhà cung cấp
    }
}

//=====================================================================================================================
//=====================================================================================================================

//Tạo shop
let myShop = new shopInfo("BUGS - Build Ur Gaming Setup", "Ho Chi Minh, VietNam");

//Thêm vendor mới vào shop
myShop.registerVendor("Intel", "Intel 123 St.");
myShop.registerVendor("AMD", "AMD 123 St.");
myShop.registerVendor("Nvidia", "Nvidia 123 St.");
myShop.registerVendor("Asus", "Asus 123 St.");
myShop.registerVendor("MSI", "MSI 123 St.");
myShop.registerVendor("Razer", "Razer 123 St.");
myShop.registerVendor("Logitech", "Logitech 123 St.");

//Thêm sản phẩm mới vào shop
myShop.registerItems("Intel Core i7-8700K", 699, 20, "Intel");
myShop.registerItems("Intel Core i9-12900K", 899, 10, "Intel");
myShop.registerItems("Intel Core i5-9600K", 599, 30, "Intel");
myShop.registerItems("AMD Ryzen 5", 499, 10, "AMD");
myShop.registerItems("AMD Ryzen 7", 699, 20, "AMD");
myShop.registerItems("AMD Ryzen 9", 899, 30, "AMD");
myShop.registerItems("Nvidia GTX 1080", 999, 10, "Nvidia");
myShop.registerItems("Nvidia RTX 2080", 1199, 20, "Nvidia");
myShop.registerItems("Nvidia GTX 1080Ti", 1299, 30, "Nvidia");
myShop.registerItems("Asus ROG Strix", 499, 10, "Asus");
myShop.registerItems("Asus ROG Maximus", 699, 20, "Asus");
myShop.registerItems("Asus ROG Swift", 899, 30, "Asus");
myShop.registerItems("MSI Z270", 499, 10, "MSI");
myShop.registerItems("MSI Z270-A", 699, 20, "MSI");
myShop.registerItems("MSI Z270-A", 899, 30, "MSI");
myShop.registerItems("Razer Blade Stealth", 499, 10, "Razer");
myShop.registerItems("Razer Blade Stealth", 699, 20, "Razer");
myShop.registerItems("Razer Blade Stealth", 899, 30, "Razer");
myShop.registerItems("Logitech G213", 499, 10, "Logitech");
myShop.registerItems("Logitech G502", 699, 20, "Logitech");
myShop.registerItems("Logitech G933", 899, 30, "Logitech");
// myShop.registerItems("Samsung Galaxy S10", 999, 10, "Samsung");
// myShop.registerItems("Lenovo Thinkpad", 999, 10, "Lenovo");

//Mua hàng
let myGiohang = myShop.registerBuyitems("Intel Core i7-8700K", 2);

//Resquest
//console.log(myShop._vendorName);
console.log(myShop.getItems());