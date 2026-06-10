export const mockItems = [
    { id: 1, name: "Interior Wall", price: 2.5 },
    { id: 2, name: "Ceiling", price: 3.0 },
    { id: 3, name: "Garage Door", price: 5.5 },
    { id: 4, name: "Fence", price: 4.25 },
  ];
  
  export const getItemsFromSheet = async () => {
    return Promise.resolve(mockItems);
  };