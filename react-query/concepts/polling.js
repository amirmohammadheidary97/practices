`
useQuery({
  queryKey:['totalAmount'],
  queryFn: () => fetchTotalAmount(),
  // option 1 : refetch every 3 sec forever
  refetchInterval : 3000,
  // option 1 : refetch every 3 sec till finished = false
  refetchInterval:(query)=>{
    if(query.state.data?.finished){
      return false
    }
    return 3000;
  }
})
`;
