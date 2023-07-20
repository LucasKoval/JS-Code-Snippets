$(document).ready(function () {
   let PRODUCTS_SKU = [122280, 122230, 120011];

   const soldOutFilter = async () => {
      try {
         PRODUCTS_SKU.forEach(async (sku) => {
            let productData = await fetch(
               `https://www.chanel.com/us/yapi/product/availability/${sku}?site=chanel`
            );
            let productDataJson = await productData.json();

            if (productDataJson.stock.stockLevel === 'OUT_STOCK') {
               PRODUCTS_SKU = PRODUCTS_SKU.filter((value) => value !== sku);
            }
         });
      } catch (err) {
         console.log(err);
      }
   };

   soldOutFilter();
});
