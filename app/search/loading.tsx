import Grid from '@/components/grid'

const SearchLoading = () => {
  return (
    <>
      <div className="mb-4" />
      <Grid className="grid-cols-2 lg:grid-cols-3">
        {Array(12)
          .fill(0)
          .map((_, index) => {
            return (
              <Grid.Item
                key={index}
                className="animate-pulse bg-neutral-100 dark:bg-neutral-800 rounded-lg"
              />
            )
          })}
      </Grid>
    </>
  )
}

export default SearchLoading
