import ContextPageOne from "@/components/@initial_page/components/ctxpage_1";
import Header from "@/components/@initial_page/components/header";
import { ThemeProvider } from "@/components/ui/theme-provider";
const App = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <ContextPageOne />
        </ThemeProvider>
      </div>
    </>
  );
};

export default App;
