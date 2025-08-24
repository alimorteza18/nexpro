import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";

// Lazy-loaded Pages
const Header = lazy(() => import("./components/Header"));
const Footer = lazy(() => import("./components/Footer"));
const MobileNavbar = lazy(() => import("./components/MobileNavbar"));
const Home = lazy(() => import("./pages/Home"));
const Game = lazy(() => import("./pages/Game"));
const Blog = lazy(() => import("./pages/Blog"));
const Notification = lazy(() => import("./pages/Notification"));
const Support = lazy(() => import("./pages/Support"));
const AboutUs = lazy(() => import("./pages/AboutUs"));

// Yüklenme ekranı
const Loader = () => (
    <div className="flex w-full items-center justify-center min-h-screen">
        <h1 className="load">
            <span class="let7">g</span>
            <span class="let6">n</span>
            <span class="let5">i</span>
            <span class="let4">d</span>
            <span class="let3">a</span>
            <span class="let2">o</span>
            <span class="let1">l</span>
        </h1>
    </div>
);

const App = () => {
    return (
        <Suspense fallback={<Loader />}>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/game" element={<Game />} />
                    <Route path="/blog" element={<Blog />} />
                    <Route path="/notification" element={<Notification />} />
                    <Route path="/support" element={<Support />} />
                    <Route path="/about-us" element={<AboutUs />} />
                </Routes>
                <MobileNavbar />
                <Footer />
            </BrowserRouter>
        </Suspense>
    );
};

export default App;
