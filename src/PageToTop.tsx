import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function PageToTop() {
    const {pathname} = useLocation();

    useEffect(() => {
        // 스크롤을 최상단으로 이동시키지 않을 페이지
        const pathsToExcludeFromScrollToTop = ['/App', '/Web', '/2024', '/2023', '/2022', '/2021'];
    
        // 현재 pathname이 pathsToExcludeFromScrollToTop 배열에 포함되지 않는지 확인
        if (!pathsToExcludeFromScrollToTop.includes(pathname)) {
        window.scrollTo(0, 0);
        }
    }, [pathname]);
    return null;
}