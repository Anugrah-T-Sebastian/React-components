import React, { useState, useContext } from 'react'
import sublinks from './data'

const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
    // || HOOKS
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
    const [location, setLocation] = useState({});
    const [page, setPage] = useState({ page: '', links: [] });

    // || FUNCTIONS
    const openSidebar = () => {
        setIsSidebarOpen(true);
    }
    const closeSidebar = () => {
        setIsSidebarOpen(false);
    }
    const openSubmenu = (text, coordinates) => {
        const page = sublinks.find((link) => link.page === text);
        setPage(page);
        setLocation(coordinates);
        setIsSubmenuOpen(true);
    }
    const closeSubmenu = () => {
        setIsSubmenuOpen(false);
    }

    // || RETURN
    return (
        <AppContext.Provider value={{
            isSubmenuOpen,
            isSidebarOpen,
            location,
            page,
            openSubmenu,
            closeSubmenu,
            openSidebar,
            closeSidebar,
            setLocation,
            setPage,
        }}>
            {children}
        </AppContext.Provider>
    )
}


export const useGlobalContext = () => {
    return useContext(AppContext);
}