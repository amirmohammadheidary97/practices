`
const useReposAndMembers = ()=> {
  return useQueries({
    queries:[
      {
        queryKey: ['repos'],
        queryFn: () => fetchRepos(),
      },
      {
        queryKey: ['members'],
        queryFn: () => fetchMembers(),
      },
    ]
  })
}

`;
