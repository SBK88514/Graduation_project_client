 import * as XLSX from "xlsx";

export function debounce(func, timeout = 1000) {
  // Create Variable
  let timer;
  return (...args) => {
    // Stop the previous Function
    clearTimeout(timer);
    // Start the function when the timeout done
    timer = setTimeout(() => func(args), timeout);
  };
}


export function exportToXL(json,exelName){
  console.log(4);
  
  // Generate XL Page
const wb = XLSX.utils.book_new();
// Convert Json To CheetSheet
const ws = XLSX.utils.json_to_sheet(json)
// Create New Xl Page With Data
XLSX.utils.book_append_sheet(wb,ws,exelName);
XLSX.writeFile(wb,`${exelName}.xlsx`)
}