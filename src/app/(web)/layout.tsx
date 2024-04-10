import HeaderMobile from "@/components/layouts_web/header-mobile";
import SideNav from "@/components/layouts_web/side-nav";
import PageWrapper from "@/components/layouts_web/page-wrapper";
import MarginWidthWrapper from "@/components/layouts_web/margin-width-wrapper";

const Web = ({children}: {children: React.ReactNode}) => {
  return ( 
    <div className="flex ">
        <SideNav />
        <main className="flex-1">
          <MarginWidthWrapper>
            <HeaderMobile />
            <PageWrapper>
              {children}
            </PageWrapper>
          </MarginWidthWrapper>
        </main>
      </div>
   );
}
 
export default Web;