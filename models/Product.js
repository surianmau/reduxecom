class Product {
    constructor(id,productName,productCategoryId,productCategoryName,productCategoryId2,productCategoryName2,unit,variants,msrp,unitPrice,productImage){
        this.id = id;
        this.productName = productName;
        this.productCategoryId =productCategoryId;
        this.productCategoryName = productCategoryName;
        this.productCategoryId2= productCategoryId2;
        this.productCategoryName2 = productCategoryName2;
        this.unit = unit;
        this.variants = variants;
        this.msrp = msrp;
        this.unitPrice= unitPrice;
        this.productImage= productImage;
    }
}


export default Product;