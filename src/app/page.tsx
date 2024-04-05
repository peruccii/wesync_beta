'use client'
import ContextPageOne from "@/components/@initial_page/components/ctxpage_1";
import ContextPageSecond from "@/components/@initial_page/components/ctxpage_2";
import Header from "@/components/@initial_page/components/header";
import StandardErrorBoundary from "./errors/handleErrors";
const FirstPage = () => {
  return (
    <>
      <StandardErrorBoundary>
        <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
          <Header />
          <ContextPageOne />
          <ContextPageSecond />
        </div>
      </StandardErrorBoundary>
    </>
  );
};

export default FirstPage;
