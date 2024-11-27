`
we can improve paginated queries like this : 

function getReposQueryOptions(sort, page) {
  return {
    queryKey: ['repos', {sort, page}],
    queryFn: () => fetchRepos(sort, page),
    staleTime: 10 * 1000
  }
}

function useRepos(sort, page){
  const queryClient = useQueryClient();
  useEffect(()=>{
    // prefetchs next page
    queryClient.prefetchQuery(getReposQueryOptions(sort, page + 1))
  },[sort, page, queryClient])

  return useQuery({
    ...getReposQueryOptions(sort, page),
    placeholderData: (previousData) => {
      return previousData;
    }
  })
}


const ReposList = ({sort, page, setPage}) => {
  const {data, status, isPlaceholderData} = useRepos(sort, page);

  return (
  <div>
    <ul style={{
      opacity: isPlaceholderData ? 0.5 : 1
    }}>
      {
        data.map...
      }
    </ul>
    <div>
      <button 
        onClick={()=> setPage(page-1)} 
        disabled={isPlaceHolder || page === 1}>
          Prev
      </button>
      <button 
        onClick={()=> setPage(page+1)}
        disabled={isPlaceHolder}>
          Next
      </button>
    </div>
  </div>
  );

}

`;
