const reactQueryCodes = `
// چون فچ و پری فیچ هردو همین آپشن هارو دارن ما با فانکشن زیر فاکتور میگیریم از این آبجکت
const getProductQueryOptions = (id) => {
  return {
    queryKey: ['products', id],
    queryFn: ()=> fetchProduct(id),
    staleTime: 5000
  }
}
.
.
.
const useGetProduct=(id)={
  const queryClient = useQueryClient();
  return useQuery({
    ...getProductQueryOptions(id),
    // واسه اینکه تا حد امکان کاربر لودینگ نبینه توی صفحه
    // از آپشن زیر استفاده میکنیم تا حداقل دیتاهای 
    // اولیه ی محصول رو از توی لیست محصولات بکیریم
    placeHolderData:()=>{
      return queryClient.getQueryData(['products'])
      ?.find((p) => p.id === id)
    }
  })
}
`;

const productListPage = `
.
.
const queryClient = useQueryClient();
.
.
.
// مثلا وقتی توی صفحه لیست محصولات که هستیم وقتی کاربر روی یک محصول هاور کرد :
onMouseEnter={()=>{
  queryClient.prefetchQuery(getProductQueryOptions(product.id))  
}}
`;

const productPage = `
.
.
const {status, data, isPlaceHolderData} = useGetProduct(productId);
.
.
.
<div>
  {
    isPlaceHolderData
     ? <>...</>
     : <>{data....}</>
  }
</div>

`;
