import Categories from '@/components/layout/search/categories'
import FilterList from '@/components/layout/search/filter'
import { SORTING } from '@/lib/constants'
import ChildrenWrapper from './children-wrapper'
import { Suspense } from 'react'

const SearchLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="mx-auto flex max-w-screen-2xl flex-col gap-8 px-4 pb-4 text-black md:flex-row dark:text-white">
      <div className="order-first w-full flex-none md:max-w-[125px]">
        <Categories />
      </div>
      <div className="order-last min-h-screen w-full md:order-none">
        <Suspense>
          <ChildrenWrapper>{children}</ChildrenWrapper>
        </Suspense>
      </div>
      <div className="order-none flex-none md:order-last md:w-[125px]">
        <FilterList list={SORTING} title="Sort by" />
      </div>
    </div>
  )
}

export default SearchLayout
