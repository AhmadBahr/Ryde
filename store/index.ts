import { LocationStore, DriverStore, MarkerData } from "@/types/type";
import { create } from "zustand";

export const useLocation = create<LocationStore>((set) => ({
    userAddress: null,
    userLongitude: null,
    userLatitude: null,
    destinationLongitude: null,
    destinationLatitude: null,
    destinationAddress: null,

    setUserLocation: ({ latitude, longitude, address }: { latitude: number, longitude: number, address: string }) => {
        set(() => ({
            userLatitude: latitude,
            userLongitude: longitude,
            userAddress: address,
        }));
    },

    setDestinationLocation: ({
        latitude,
        longitude,
        address
    }: {
        latitude: number,
        longitude: number,
        address: string
    }) => {
        set(() => ({
            destinationAddress: address,
            destinationLatitude: latitude,
            destinationLongitude: longitude,
        }));
    },
}));
export const useDriverStore = create((set) => ({
    drivers: [] as MarkerData[],
    selectedDriver: null,
    setSelectedDriver: (driverId: number) =>
        set(() => ({ selectedDriver: driverId })),
    setDrivers: (drivers: MarkerData[]) =>
        set(() => ({ drivers: drivers })),
    clearSelectedDriver: () => set(() => ({ selectedDriver: null })),
}));
