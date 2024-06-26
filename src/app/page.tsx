'use client'

import ContextPageSecond from "@/components/initial_page/ctxpage_2"
import ContextPageOne from "@/components/initial_page/ctxpage_1"
import ContextPageThird from "@/components/initial_page/ctxpage_3"
import ContextPageFour from "@/components/initial_page/ctxpage_4"
import Header from "@/components/initial_page/header"

const HomePage = () => {
  return (
      <div className="pt-[4.75rem] bg-color-n-principal lg:pt-[5.25rem] overflow-hidden ">
        <Header />
        <ContextPageOne />
        <ContextPageSecond />
        <ContextPageThird />
        <ContextPageFour />
      </div>
  )
};

export default HomePage


