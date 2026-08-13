const mode = "light";

let colorTokens = {
    neutralBackground1: {
        light: "#FFFFFF",
        dark: "#292929"
    },
    compoundBrandBackground: {
        light: "#117865",
        dark: "#2AAC94"
    },
    compoundBrandForeground1: {
        light: "#117865",
        dark: "#2AAC94"
    },
    'paletteBerryBackground1': {
        light: "#FDF5FC",
        dark: "#3A1136"
    }
};


// Two ways to access
colorTokens.neutralBackground1.light
colorTokens["neutralBackground1"]["light"]

colorTokens.compoundBrandBackground[mode]
colorTokens["compoundBrandBackground"][mode]

// Update using the mode variable
colorTokens.neutralBackground1[mode] = "#F0F0F0"; // hypothetical override
console.log(colorTokens.neutralBackground1[mode]);