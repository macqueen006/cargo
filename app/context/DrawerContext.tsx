"use client";
import {createContext, useState, ReactNode, useContext} from "react";

interface DrawerContext {
    isDrawerOpen: boolean;
    toggleDrawer: () => void;
    closeDrawer: () => void;
}

const DrawerContext = createContext<DrawerContext | undefined>(undefined);

export const useDrawer = () => {
    const context = useContext(DrawerContext);
    if (!context) {
        throw new Error('useDrawer must be used within a DrawerProvider');
    }
    return context;
};

export const DrawerProvider = ({children}: { children: ReactNode }) => {
    const [isDrawerOpen, setDrawerOpen] = useState(false);

    const toggleDrawer = () => {
        setDrawerOpen(!isDrawerOpen);
    };

    const closeDrawer = () => {
        setDrawerOpen(false);
    }

    return (
        <DrawerContext.Provider value={{isDrawerOpen, toggleDrawer, closeDrawer}}>
            {children}
        </DrawerContext.Provider>
    );
};